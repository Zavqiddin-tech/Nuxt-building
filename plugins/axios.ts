import axios from 'axios'
import { defineNuxtPlugin } from '#app'
const token = useCookie("token").value

export default defineNuxtPlugin(() => {
  const api = axios.create({
    baseURL: 'http://localhost:8080/api', // API bazaviy URL
    headers: {Authorization: `Bearer ${token}`}
  })

  return {
    provide: {
      api,
    },
  }
})