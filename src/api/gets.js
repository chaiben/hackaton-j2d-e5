import { api } from './axios.config'

export const getCenters = async () => {
  const res = await api.get('/getCenters')
  return res.data
}

export const getCheck = async () => {
  const res = await api.get('/getCheck')
  return res.data
}

export const getTotalSales = async () => {
  const res = await api.get('/numPerCenter')
  return res.data
}
