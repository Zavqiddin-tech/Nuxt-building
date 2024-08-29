<template>
  <div class="flex justify-between">
    <div class="flex items-center gap-5">
      <div
        class="w-14 h-14 flex justify-center items-center rounded-full bg-gray-300 dark:bg-white/20"
      >
        <UIcon name="i-lucide:thumbs-up" class="w-6 h-6" />
      </div>
      <div class="main">
        <div class="pb-2 text-lg font-medium">Finished</div>
        <div class="flex items-center">
          <div class="text-2xl font-medium">18</div>
          <div class="flex items-center text-green-500">
            <UIcon
              name="i-material-symbols:arrow-drop-up-rounded"
              class="w-10 h-10 translate-x-1"
            />
            <span>+8 tasks</span>
          </div>
        </div>
      </div>
    </div>
    <UDivider orientation="vertical" class="custom-divider" />
    <div class="flex items-center gap-5">
      <div
        class="w-14 h-14 flex justify-center items-center rounded-full bg-gray-300 dark:bg-white/20"
      >
			<UIcon name="i-streamline:graph-arrow-decrease" class="w-6 h-6" />
      </div>
      <div class="main">
        <div class="pb-2 text-lg font-medium">Tracked</div>
        <div class="flex items-center">
          <div class="text-2xl font-medium">31h</div>
          <div class="flex items-center text-red-500">
            <UIcon
              name="i-material-symbols:arrow-drop-down-rounded"
              class="w-10 h-10 translate-x-1"
            />
            <span>-6 hhours</span>
          </div>
        </div>
      </div>
    </div>
    <UDivider orientation="vertical" class="custom-divider" />
    <div class="flex items-center gap-5">
      <div
        class="w-14 h-14 flex justify-center items-center rounded-full bg-gray-300 dark:bg-white/20"
      >
			<UIcon name="i-solar:graph-up-linear" class="w-6 h-6" />
      </div>
      <div class="main">
        <div class="pb-2 text-lg font-medium">Efficiency</div>
        <div class="flex items-center">
          <div class="text-2xl font-medium">93%</div>
          <div class="flex items-center text-green-500">
            <UIcon
              name="i-material-symbols:arrow-drop-up-rounded"
              class="w-10 h-10 translate-x-1"
            />
            <span>12%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.custom-divider {
  div {
    border-color: rgb(151, 151, 151) !important;
  }
}
</style>
