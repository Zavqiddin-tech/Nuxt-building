<script lang="ts" setup>
import { sidebarMenu } from "~/constants";

const toggle = ref(true);

const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
    toggle.value = !toggle.value;
  },
});
</script>

<template>
  <div>
    <NuxtLink to="/">
      <div class="logo mb-20 flex items-center gap-2 hover:animate-pulse">
        <UIcon
          name="i-material-symbols-light:stacked-line-chart-rounded"
          class="w-10 h-10 text-[#36bcba]"
        />
        <div class="logo-title">Gazify</div>
      </div>
    </NuxtLink>
  </div>
  <!-- Menues -->
  <ul>
    <li v-for="item of sidebarMenu">
      <NuxtLink
        :to="item.url"
        class="w-full mb-3 p-2 text-lg block rounded-xl"
        active-class=" bg-black/20 dark:text-[#36bcba]  dark:bg-[#252a31] "
      >
        <div class="flex items-center gap-2">
          <UIcon :name="item.icon" class="w-6 h-6" />
          <span>{{ item.name }}</span>
        </div>
      </NuxtLink>
    </li>
  </ul>

  <!-- Theming -->
  <div>
    <UButton
      :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
      color="gray"
      variant="ghost"
      aria-label="Theme"
      @click="isDark = !isDark"
    />
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
