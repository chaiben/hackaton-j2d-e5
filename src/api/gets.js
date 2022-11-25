import { api } from './axios.config'

export const getCenters = token => api.get('/getCenters', { headers: { authorization: `Bearer ${token}` } })
