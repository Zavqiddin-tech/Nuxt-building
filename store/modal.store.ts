import { defineStore } from "pinia";

export const useModalStore = defineStore("auth", () => {
  const isOpen = ref(false);
  const setIsOpen = (val: boolean) => (isOpen.value = val);

  return {
    isOpen,
    setIsOpen,
  };
});
