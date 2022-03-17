export interface PaginationProps {
  itemPerPage: number
  totalItems: number
  currentPage?: number
  maxLinksDisplayed?: number
  noRouter?: boolean
  routerQueryKey?: string
}

export interface PaginationEmits {
  (e: 'update:currentPage', currentPage: number): void
}