export interface Steps {
  description: string
  id: number
}

export interface Step extends Steps {
  id: number
  current: number | string
}
