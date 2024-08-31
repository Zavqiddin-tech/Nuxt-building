<script setup lang="ts">
import { storeToRefs } from "pinia";
//store
import { useUrlStore } from "~/store/url.store";
import { useModalStore } from "~/store/modal.store";
import { useUsersStore } from "~/store/users.store";
const {url} = storeToRefs(useUrlStore())
const { isOpen } = storeToRefs(useModalStore());
const { setIsOpen } = useModalStore()
//store



// forma uchun sozlama
import { object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";
import axios from "axios";
import { useMutation } from "@tanstack/vue-query";
const roles = ref(["admin", "director", "manager"]);
const schema = object({
  fName: string().required("Invalid companyName").required("majburiy maydon"),
  lName: string().required("Invalid companyName").required("majburiy maydon"),
  phone: string()
    .required("Invalid companyName")
    .required("majburiy maydon"),
 
});
type Schema = InferType<typeof schema>;

const state = ref({
  fName: "",
  lName: "",
	phone: ""
});

const handleClose = () => {
  state.value = {
    fName: "",
    lName: "",
		phone: ""
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
        <div>Yangi ishchi qo'shish</div>
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
         
          <UFormGroup label="Telefon raqam" name="phone" class="mt-8">
            <UInput v-model="state.phone" size="lg" />
          </UFormGroup>
         

          <div class="pt-2">
            <UButton type="submit" size="lg"> Submit </UButton>
          </div>
        </UForm>
      </div>
    </UModal>
  </div>
</template>
