<script lang="ts" setup>
useHead({
  title: "Authorization",
});
const router = useRouter()
definePageMeta({
  layout: "auth",
});
const cookie = useCookie('token')
import axios from "axios";
import { useMutation } from "@tanstack/vue-query";
import { storeToRefs } from "pinia";
import { useUrlStore } from "~/store/url.store";
const {url} = storeToRefs(useUrlStore())





// Form uchun sozlama
import { object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";

const schema = object({
  userName: string().required("Required"),
  password: string()
    .min(8, "Must be at least 8 characters")
    .required("Required"),
});

type Schema = InferType<typeof schema>;

const state = ref({
  userName: undefined,
  password: undefined,
});

const create = async () => {
	const res = await axios.post(`${url.value}/auth/login`, state.value)
	return res.data
}
const mutation = useMutation({
	mutationFn: create,
	onSuccess: (data) => {
		useToast().add({title: 'Muvaffaqiyatli'})
    console.log(data);
    cookie.value = data.accessToken
    router.push('/')
	},
	onError: (error) => {
		useToast().add({title: error.message})
	}
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
 event.preventDefault()
	mutation.mutate()
}
</script>

<template>
  <div class="p-4 bg-white dark:bg-black w-[350px] rounded-lg">
    <div class="pb-6 flex justify-center">
      <div>
        <div class="logo-title">Login</div>
      </div>
    </div>
    <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
      <UFormGroup label="login" name="userName" class="mb-8">
        <UInput v-model="state.userName" size="lg" />
      </UFormGroup>

      <UFormGroup label="password" name="password">
        <UInput v-model="state.password" type="password" size="lg" />
      </UFormGroup>

      <div class="pt-2">
        <UButton type="submit" size="lg"> Submit </UButton>
      </div>
    </UForm>
  </div>
</template>

<style lang="scss">
.logo {
  &-title {
    font-family: "Poppins", sans-serif;
    font-size: 24px;
    font-weight: 500;
  }
}
</style>
