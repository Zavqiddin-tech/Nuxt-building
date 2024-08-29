import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', ()=> {
	const count = ref('salom')

	return {
		count
	}
})