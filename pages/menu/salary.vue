<script setup>
useHead({
  title: "company",
});

// store
import { useModalStore } from '~/store/modal.store';
const {setIsOpen} = useModalStore()
</script>

<template>
  <ModalFormModal />
  <div>
    <div class="hero flex items-center justify-between">
      <div class="text-xl font-medium">Company</div>
      <div>
        <UButton @click="setIsOpen(true)" size="lg" class="text-md !bg-[#36bcba]">Qo'shish</UButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
