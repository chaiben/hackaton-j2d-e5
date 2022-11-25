import { api } from './axios.config'

export const getCenters = async () => {
  const res = await api.get('/getCenters')
  return res.data
}

export const getCheck = async () => {
  const res = await api.get('/getCheck')
  return res.data
}

export const countCorder = async () => {
  const res = await api.get('/countCorder')
  return res.data
}
