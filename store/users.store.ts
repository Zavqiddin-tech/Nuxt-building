import { defineStore } from "pinia";

export const useUsersStore = defineStore('auth', ()=> {
	const users = ref([])

	const setUsers = (val: any) => users.value = val

	return {
		users,
		setUsers
	}
})