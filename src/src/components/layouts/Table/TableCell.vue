<script setup lang="ts">
import type { VNode } from 'vue';

interface TableColumn {
  key: string
  label: string
  format: (value: any, row: any, index: number) => any
  renderHeader?: () => VNode
  renderRow?: (row: any, column: TableColumn, index: number) => VNode
  align?: 'start' | 'center' | 'end'
  bold?: boolean
  media?: boolean
  cellClass?: string
}

interface TableCellProps {
  column?: Partial<TableColumn>
  total: number
}

const props = withDefaults(defineProps<TableCellProps>(), {
  column: () => ({}),
})
</script>

<template>
  <td
  :class="[
    props.column.bold && 'font-bold',
    props.column.media && '',
    props.column.align === 'end' && 'text-right justify-end',
    props.column.align === 'center' && 'text-center justify-center',
    props.column.align === 'start' && 'text-left justify-start',
    Number(props.column.key) !== props.total - 1 ? 'border-b border-gray-200' : '', 'whitespace-nowrap py-1 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8',
    props.column.cellClass
  ]"
  >
    <slot></slot>
  </td>
</template>