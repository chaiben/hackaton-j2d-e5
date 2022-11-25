import { api } from './axios.config'

export const getCenters = async () => {
  const res = await api.get('/getCenters')
  return res.data
}
