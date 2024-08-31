<script setup>
import { useMutation } from "@tanstack/vue-query";
import axios from "axios";
import { storeToRefs } from "pinia";
import { useUrlStore } from "~/store/url.store";
import { useUsersStore } from "~/store/users.store";
const { url } = storeToRefs(useUrlStore());
const { users } = storeToRefs(useUsersStore());
const {setUsers} = useUsersStore()

const changeStatus = (id) => {};
const edit = (id) => {};

const { mutate } = useMutation({
  mutationKey: ["delete-user"],
  mutationFn: async () => {
    const { data } = await axios.delete(
      `${url.value}/auth/users/delete/${userId.value}`
    );
    return data
  },
  onSuccess: (data) => {
    console.log('ku');
    setUsers(data)
  },
});
const userId = ref("");
const del = (id) => {
  userId.value = id;
  mutate();
};
</script>

<template>
  <div class="wrapper">
    <table
      v-if="Array.isArray(users.users) && users.users.length > 0"
      class="table-auto w-full"
    >
      <thead class="border-b border-zinc-400 text-left">
        <tr>
          <th>#</th>
          <th class="py-4 font-medium">Ism familya</th>
          <th class="py-4 font-medium">username</th>
          <th class="py-4 font-medium">role</th>
          <th class="py-4 font-medium text-right">edit</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) of users.users"
          class="border-b border-zinc-300 hover:bg-black hover:bg-opacity-20"
        >
          <td class="min-w-8">
            {{ index + 1 }}
          </td>
          <td class="min-w-40 name">{{ item.fName }} {{ item.lName }}</td>

          <td class="min-w-28">
            <span class="text-sm font-medium text-sky-600 underline">{{
              item.userName
            }}</span>
          </td>
          <td class="min-w-28">
            <span
              class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-sm font-medium text-indigo-700 ring-1 ring-inset"
              >{{ item.role }}</span
            >
          </td>
          <!-- <td class="min-w-24">
            <span
              @click="changeStatus(item.id)"
              v-if="item.status == 1"
              class="inline-flex items-center rounded-md px-2 py-1 text-sm font-medium text-black ring-1 ring-inset ring-slate-600"
            >
              <span class="w-2 h-2 mr-1 rounded-full bg-green-500"></span>
              Active</span
            >
            <span
              @click="changeStatus(item.id)"
              v-if="item.status == 0"
              class="inline-flex items-center rounded-md px-2 py-1 text-sm font-medium text-black ring-1 ring-inset ring-slate-600"
            >
              <span class="w-2 h-2 mr-1 rounded-full bg-red-500"></span>
              Inactive</span
            >
          </td> -->
          <td class="text-center float-end">
            <div class="flex gap-2">
              <div class="w-6 h-6" @click="edit(item.id)">
                <UIcon name="i-material-symbols:edit" class="w-5 h-5" />
              </div>
              <UPopover>
                <div class="w-6 h-6">
                  <UIcon name="i-material-symbols:delete" class="w-5 h-5" />
                </div>

                <template #panel>
                  <div class="p-4" @click="del(item.id)">O'chirmoqchimiz ?</div>
                </template>
              </UPopover>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-else></div>
  </div>
</template>

<style lang="scss" scoped>

td {
  padding: 12px 0px;
}
tr:last-child {
  border: unset;
}
.name {
  text-transform: capitalize;
}
tr,
.bx {
  transition: 0.25s;
  cursor: pointer;
}
.bxs-pencil {
  font-size: 18px;
}
.bxs-trash-alt {
  font-size: 16px;
}
</style>
