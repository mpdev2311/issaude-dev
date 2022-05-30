<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { store } from '@core/store/store'
import SearchList from '../../../components/layouts/List/SearchList.vue'
import { Patient, RequestPatient } from '@core/domain/patient/patient'
import { BasePaginator } from '@core/domain/pagination/Paginator'
import { PatientService } from '@services/patients/patient-service'
import { PAGINATION_SIZE } from '@core/constaints'

export default defineComponent({
  components: {
    SearchList,
  },

  setup() {
    const patientService = new PatientService()
    let paginator = ref(new BasePaginator<Patient>())
    const router = useRouter()
    const columns = {
      id: {
        label: 'ID',
        align: 'end',
        headerCellClass: 'py-1.5',
        cellClass:
          'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8',
      },
      nome: {
        label: 'Nome',
        align: 'start',
        format: (value: string) => value[0].toUpperCase() + value.substring(1),
        cellClass:
          'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-[0.65rem]',
      },
      dropdown: {
        label: '',
        align: 'end',
        cellClass:
          'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-[0.65rem]',
      },
    }

    onMounted(async () => {
      paginator.value = (await patientService.getAll([], paginator.value)) as BasePaginator<Patient>
    })

    const onEdit = (id: number) => router.push(`/patients/${id}`)
    const onCreate = () => router.push('/patients/0')
    const onFilter = async (filter: string) => await filterPatient(filter, 0)

    const filterPatient = async (searchTerm: string, page: number) => {
      let requestPatient = new RequestPatient(
        page,
        PAGINATION_SIZE,
        searchTerm,
        store.getters.user.id_corp
      )
      paginator.value = (await patientService.searchPatient(
        requestPatient
      )) as BasePaginator<Patient>
    }

    const onUpdatePaginationPage = async (page: number, searchTerm: string) => {
      if (searchTerm.length) {
        return await filterPatient(searchTerm, page)
      }

      let patientPaginator = new BasePaginator<Patient>()
      patientPaginator.pageable.pageNumber = page
      paginator.value = (await patientService.getAll(
        [],
        patientPaginator
      )) as BasePaginator<Patient>
    }

    return {
      onCreate,
      onEdit,
      onFilter,
      onUpdatePaginationPage,
      columns,
      paginator,
    }
  },
})
</script>

<template>
  <SearchList
    title="Cadastro de Pacientes"
    :paginator="paginator"
    :columns="columns"
    :can-create="true"
    :can-edit="true"
    @on-filter="onFilter"
    @on-edit="onEdit"
    @on-create="onCreate"
    @update-pagination-page="onUpdatePaginationPage"
  />
</template>
