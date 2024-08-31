<script setup lang="ts">
import { storeToRefs } from "pinia";
//store
import { useUrlStore } from "~/store/url.store";
import { useModalStore } from "~/store/modal.store";
import { useUsersStore } from "~/store/users.store";
const {url} = storeToRefs(useUrlStore())
const { isOpen } = storeToRefs(useModalStore());
const { setIsOpen } = useModalStore()
const {setUsers} = useUsersStore()
//store

const eye = ref(false);
const eyeToggle = () => {
  eye.value = !eye.value
};


// forma uchun sozlama
import { object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";
import axios from "axios";
import { useMutation } from "@tanstack/vue-query";
const roles = ref(["admin", "director", "manager"]);
const schema = object({
  fName: string().required("Invalid companyName").required("majburiy maydon"),
  lName: string().required("Invalid companyName").required("majburiy maydon"),
  userName: string()
    .required("Invalid companyName")
    .required("majburiy maydon"),
  role: string().required("Invalid companyName").required("majburiy maydon"),
  password: string()
    .min(8, "Kamida 8 ta belgi bo'lsin")
    .required("Majburiy maydon"),
});
type Schema = InferType<typeof schema>;

const state = ref({
  fName: "",
  lName: "",
  userName: "",
  password: "",
  role: "",
});

const handleClose = () => {
  state.value = {
    fName: "",
    lName: "",
    userName: "",
    password: "",
    role: "",
  };
};
// forma uchun sozlama





const create = async () => {
	const res = await axios.post(`${url.value}/auth/regis`, state.value)
	return res.data
}
const mutation = useMutation({
	mutationFn: create,
	onSuccess: (data) => {
		setUsers(data)
		useToast().add({title: 'Muvaffaqiyatli'})
    setIsOpen(false)
	},
	onError: (error) => {
		console.log(error);
	}
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
 event.preventDefault()

	mutation.mutate()
}
</script>

<template>
  <div>
    <UModal v-model="isOpen" @update:model-value="handleClose()">
      <div class="p-4">
        <div>Yangi admin qo'shish</div>
        <UForm
          :schema="schema"
          :state="state"
          class="space-y-4"
          @submit="onSubmit"
        >
          <UFormGroup label="Ismi" name="fName" class="mt-8">
            <UInput v-model="state.fName" size="lg" />
          </UFormGroup>

          <UFormGroup label="Familyasi" name="lName" class="mt-8">
            <UInput v-model="state.lName" size="lg" />
          </UFormGroup>

          <UFormGroup label="Username" name="userName" class="mt-8">
            <UInput v-model="state.userName" size="lg" />
          </UFormGroup>

          <UFormGroup label="Password" name="password" class="relative">
            <UInput v-model="state.password" :type="eye ? 'text' : 'password'" />
            <UIcon @click="eyeToggle()"
              :name="eye ? 'akar-icons:eye-closed' : 'akar-icons:eye-open' "
              class="w-5 h-5 absolute top-[7px] right-3"
            />
          </UFormGroup>

          <UFormGroup label="Role" name="role">
            <USelectMenu v-model="state.role" :options="roles" />
          </UFormGroup>

          <div class="pt-2">
            <UButton type="submit" size="lg"> Submit </UButton>
          </div>
        </UForm>
      </div>
    </UModal>
  </div>
</template>
