<script setup>
import { useModalStore } from "~/store/modal.store";
const { setIsOpen } = useModalStore();
</script>

<template>
	<ModalWorkerModal />
	<div>
    <div class="hero flex items-center justify-between">
      <div class="text-xl font-medium">Ishchilar</div>
      <div>
        <UButton
          @click="setIsOpen(true)"
          size="lg"
          class="text-md !bg-[#36bcba]"
          >Qo'shish</UButton
        >
      </div>
    </div>
  </div>
</template>