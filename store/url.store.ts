import { defineStore } from "pinia";

export const useUrlStore = defineStore("url", () => {
  const url = ref("http://localhost:8080/api");

  return {
    url,
  };
});
