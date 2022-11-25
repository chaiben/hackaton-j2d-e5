import { api } from './axios.config'

export const login = () => api.post('/auth/login', { username: 'user', password: 'user' })
