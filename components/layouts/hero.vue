<template>
  <div class="flex justify-between items-center">
    <div>
      <div class="pb-3 text-3xl font-semibold">Manage your projects</div>
      <div class="text-base font-normal dark:text-gray-400">
        Track your projects, tasks & team activity here
      </div>
    </div>
    <div class="right">
      <UAvatar
        chip-color="primary"
        chip-text=""
        chip-position="top-right"
        size="lg"
        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGZhY2V8ZW58MHx8MHx8fDA%3D"
        alt="Avatar"
      />
    </div>
  </div>
</template>

<style lang="scss">
.right {
  span img {
    object-fit: cover;
  }
}
</style>
