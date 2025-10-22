import { http } from './client'

http.interceptors.request.use(
    (request) => {
        const accessToken = localStorage.getItem('access')
        if (accessToken) {
            request.headers['Authorization'] = `Bearer ${accessToken}`
        }

        return request
    },
    (error) => {
        return Promise.reject(error)
    },
)
