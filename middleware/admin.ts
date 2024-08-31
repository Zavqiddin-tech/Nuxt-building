import { useNuxtApp } from "#app";
import { useAuthStore } from "~/store/auth";

export default defineNuxtRouteMiddleware(async (to, from) => {
		useAuthStore().checkUser()
	
});
