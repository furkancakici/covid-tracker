import axios from 'axios'

const env = import.meta.env

const http = axios.create({
    baseURL: env.VITE_API_URL,
    timeout: 60 * 2 * 1000
})

http.interceptors.request.use(
    config => {
        config.headers['X-RapidAPI-Key'] = env.VITE_API_KEY
        config.headers['X-RapidAPI-Host'] = env.VITE_API_HOST
        return config
    },
    error => error
)

http.interceptors.response.use(
    response => {
        return response
    },
    error => {
        if (error?.response?.status === 401) {
            window.location.href = '/'
        }
        return error?.response
    }
)

export default http
