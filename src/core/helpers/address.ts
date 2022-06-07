import axios from 'axios'

const getFullAddressByCep = async (cep: string) => {
  const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
  return response.data
}

export { getFullAddressByCep }
