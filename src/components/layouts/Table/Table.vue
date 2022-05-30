<script setup lang="ts">
import TableCell from './TableCell.vue';
import type { InjectionKey, VNode, Ref } from 'vue'
import { toRaw, computed, reactive, isReactive, inject, ref } from 'vue';
const table = ref()
const selected = ref()
interface TableColumn {
  key: string
  label: string
  format: (value: any, row: any, index: number) => any
  renderHeader?: () => VNode
  renderRow?: (row: any, column: TableColumn, index: number) => VNode
  align?: 'start' | 'center' | 'end'
  bold?: boolean
  cellClass?: string
  headerCellClass?: string
}

interface TableWrapperInjection {
  data?: any[] | undefined
  columns?: Record<string, Partial<TableColumn>>
  loading?: boolean
}

const flewTableWrapperSymbol: InjectionKey<TableWrapperInjection> = Symbol()

interface TableColumn {
  key: string
  label: string
  format: (value: any, row: any, index: number) => any
  renderHeader?: () => VNode
  renderRow?: (row: any, column: TableColumn, index: number) => VNode
  align?: 'start' | 'center' | 'end'
  bold?: boolean
  cellClass?: string
}

interface TableProps {
  data?: any[]
  columns?: Record<string, string | Partial<TableColumn>>
  reactive?: boolean
  noHeader?: boolean
  scrollTop?: boolean
  clickable?: boolean
}

const emits = defineEmits<{
  (e: 'rowClick', row: any, index: number): void
}>()
const props = withDefaults(defineProps<TableProps>(), {
  columns: undefined,
  data: () => [],
  scrollTop: false,
  clickable: false,
})

const wrapper = inject(flewTableWrapperSymbol, null)

const data = computed(() => {
  if (table.value != null && props.scrollTop) {
    table.value.parentElement.scrollTop = 0
  }
  if (wrapper?.data) return wrapper.data

  if (props.reactive) {
    if (isReactive(props.data)) {
      return props.data
    } else {
      return reactive(props.data)
    }
  }

  return toRaw(props.data)
})

const defaultFormatter = (value: any) => value
const columns = computed(() => {
  const columnsSrc = wrapper?.columns ?? props.columns
  let columns: TableColumn[] = []

  if (columnsSrc) {
    for (const [key, label] of Object.entries(columnsSrc)) {
      if (typeof label === 'string') {
        columns.push({
          format: defaultFormatter,
          label,
          key,
        })
      } else {
        columns.push({
          format: defaultFormatter,
          label: key,
          key,
          ...(label as any),
        })
      }
    }
  } else if (data.value.length > 0) {
    for (const [key] of Object.entries(data.value[0])) {
      columns.push({
        format: defaultFormatter,
        label: key,
        key,
      })
    }
  }

  return columns
})

function emitSelected(row: any, index: number) {
  if(props.clickable) {
    emits('rowClick', row, index)
    selected.value = row
  }
}
</script>
<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div ref="table" class="px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col">
      <div class="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle">
          <div class="shadow-sm ring-1 ring-black ring-opacity-5">
            <table class="min-w-full border-separate" style="border-spacing: 0">
              <thead v-if="!props.noHeader" class="bg-gray-50">
                <slot name="header">
                  <template v-for="(column, id) in columns" :key="'col' + column.key">
                    <slot name="header-column" :column="column">
                      <component :is="{ render: column.renderHeader }" v-if="column.renderHeader" :class="[
                        column.headerCellClass ? column.headerCellClass : id === 0 ? 'sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-100 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8' : 'sticky top-0 z-10  border-b border-gray-300 bg-gray-50 bg-opacity-5 sm:bg-opacity-100 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell',
                      ]" />
                      <th v-else scope="col"
                        :class="[
                          id === 0 ? 'sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-100 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8' : 'sticky top-0 z-10  border-b border-gray-300 bg-gray-50 bg-opacity-5 sm:bg-opacity-100 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell', column.align === 'center' && 'text-center', column.align === 'start' && 'text-left', column.align === 'end' && 'text-right'
                        ]">
                        {{ column.label }}</th>
                    </slot>
                  </template>
                </slot>
              </thead>
              <tbody class="bg-white" id="table-body">
                <slot name="body">
                  <tr v-for="(row, index) in data" :key="index" :class="[
                    index % 2 === 0 && 'bg-gray-100',
                    props.clickable && 'hover:bg-gray-200 cursor-pointer focus:bg-gray-400 focus-within:bg-gray-400',
                    props.clickable && selected === row ? 'bg-gray-400': undefined
                    
                  ]"
                  :tabindex="props.clickable ? 0 : undefined" 
                  @keydown.space.prevent="emitSelected(row, index)"
                  @click="emitSelected(row, index)">
                    <slot name="body-row-pre" :row="row" :columns="columns" :index="index"></slot>
                    <slot name="body-row" :row="row" :columns="columns" :index="index">
                      <template v-for="(column, idx) in columns" :key="'row' + column.key">
                        <TableCell :column="column" :total="columns.length">
                          <slot name="body-cell" :row="row" :column="column" :index="index"
                            :value="column.format(row[column.key], row, index)">
                            <component :is="{ render: () => column.renderRow?.(row, column, index) }"
                              v-if="column.renderRow"></component>
                            <template v-else :class="[
                                  column.cellClass ? column.cellClass : '' 
                                ]">{{ column.format(row[column.key], row, index) }}</template>
                          </slot>
                        </TableCell>
                      </template>
                    </slot>
                    <slot name="body-row-post" :row="row" :columns="columns" :index="index"></slot>
                  </tr>
                </slot>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>