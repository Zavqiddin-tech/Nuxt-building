import { defineStore } from "pinia";
import { useNuxtApp } from "#app";

export const useAuthStore = defineStore("auth", () => {
  const checkUser = async () => {
    useNuxtApp()
      .$api.get("/auth/checkuser", {})
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return {
    checkUser,
  };
});
