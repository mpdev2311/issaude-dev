import { Param } from '@domain/param/param-model'
const createParameter = (name: string, value: string): Param => {
  const param = new Param()
  param.name = name
  param.value = value

  return param
}

export { createParameter }
