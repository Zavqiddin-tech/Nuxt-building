<script setup lang="ts">
useHead({
  title: "settings",
});

import { useNuxtApp } from "#app";

const { $api } = useNuxtApp();

const test = async () => {
  await $api.get("/auth/checkuser", {});
};

/* import axios from "axios";
import { useQuery } from "@tanstack/vue-query";
import { storeToRefs } from "pinia";

import { useUrlStore } from "~/store/url.store";
import { useUsersStore } from "~/store/users.store";
const { url } = storeToRefs(useUrlStore());
const { setUsers } = useUsersStore();

import { useModalStore } from "~/store/modal.store";
const { setIsOpen } = useModalStore();

const { data, isLoading, error } = useQuery({
  queryKey: ["get-users"],
  queryFn: async () => {
    const { data } = await axios.get(`${url.value}/auth/users`);
    setUsers(data);
    return data;
  },
}); */
</script>

<template>
  sas
  <UButton @click="test()">Click</UButton>
</template>

<style lang="scss"></style>
