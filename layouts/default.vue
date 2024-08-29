<template>
  <div class="dark:bg-gradient-to-l from-[#060e0e] to-[#1a1f1f]">
    <div class="max-w-[1920px] m-auto flex">
      <section class="sidebar w-[250px] pt-8 px-5 h-screen dark:bg-[#1a1f1f]">
        <LayoutsSidebar />
      </section>
      <section class="slot pt-8 px-10 dark:bg-[#060e0e]">
        <LayoutsHero class="pb-12" />
        <slot />
      </section>
    </div>
  </div>
</template>

<style lang="scss">
.slot {
  width: calc(100% - 250px);
}
</style>
