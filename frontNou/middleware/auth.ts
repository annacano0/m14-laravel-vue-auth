import { AxiosError } from "axios"

export default defineNuxtRouteMiddleware(async(to, from) => {
    const {initUser}=useAuth()
    initUser()
})
