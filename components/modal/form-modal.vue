<script setup lang="ts">
import { useModalStore } from "~/store/modal.store";
const { isOpen } = storeToRefs(useModalStore());

// forma uchun sozlama
import { object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";

const schema = object({
  companyName: string()
    .required("Invalid companyName")
    .required("majburiy maydon"),
  companyCeo: string()
    .required("Invalid companyName")
    .required("majburiy maydon"),
  companyPhone: string()
  .min(9, "9 tadan kam bo'lmasin")
  .max(16,"16 tadan oshib ketmasin")
  .required("majburiy maydon"),
});

type Schema = InferType<typeof schema>;

const state = ref({
  companyName: "",
  companyCeo: "",
  companyPhone: undefined,
});

const handleClose = () => {
  state.value = {
    companyName: "",
    companyCeo: "",
    companyPhone: undefined,
  };
};

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  console.log(event.data);
}
</script>

<template>
  <div>
    <UModal v-model="isOpen" @update:model-value="handleClose()">
      <div class="p-4">
        <div>Yangi korxona qo'shish</div>
        <UForm
          :schema="schema"
          :state="state"
          class="space-y-4"
          @submit="onSubmit"
        >
          <UFormGroup label="korxona nomi" name="companyName" class="mt-8">
            <UInput v-model="state.companyName" size="lg" />
          </UFormGroup>

          <UFormGroup label="direktori" name="companyCeo">
            <UInput v-model="state.companyCeo" size="lg" />
          </UFormGroup>

          <UFormGroup label="Telefon raqam" name="companyPhone">
            <UInput v-model="state.companyPhone" type="number" size="lg" />
          </UFormGroup>

          <UFormGroup label="Rasm tanlang">
            <UInput type="file" size="md" icon="i-ph:image" />
          </UFormGroup>
          <div class="pt-2">
            <UButton  type="submit" size="lg"> Submit </UButton>
          </div>
        </UForm>
      </div>
    </UModal>
  </div>
</template>
