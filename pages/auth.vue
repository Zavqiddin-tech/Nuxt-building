<script lang="ts" setup>
useHead({
  title: "Authorization",
});
definePageMeta({
  layout: "auth",
  middleware: [function (to, from) {}, "auth"],
});

const nuxtCookie = useCookie('auth')

const get = () => {

  nuxtCookie.value = 'cnsdjc43nfoj3fwnc'
};

// Form uchun sozlama
import { object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";

const schema = object({
  email: string().email("Invalid email").required("Required"),
  password: string()
    .min(8, "Must be at least 8 characters")
    .required("Required"),
});

type Schema = InferType<typeof schema>;

const state = reactive({
  email: undefined,
  password: undefined,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  console.log(event.data);
}
</script>

<template>
  <div class="p-4 bg-white dark:bg-black w-[350px] rounded-lg">
    <div class="pb-6 flex justify-center">
      <div class="logo flex items-center gap-2">
        <div class="logo-title">Login</div>

        <UIcon
          name="i-material-symbols-light:stacked-line-chart-rounded"
          class="w-10 h-10 text-[#36bcba]"
        />
      </div>
    </div>
    <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
      <UFormGroup label="login" name="email" class="mb-8">
        <UInput v-model="state.email" size="lg" />
      </UFormGroup>

      <UFormGroup label="password" name="password">
        <UInput v-model="state.password" type="password" size="lg" />
      </UFormGroup>

      <div class="pt-2">
        <UButton @click="get()" type="submit" size="lg"> Submit </UButton>
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
