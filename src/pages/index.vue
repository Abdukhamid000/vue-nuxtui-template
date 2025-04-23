<script setup lang="ts">
const hi = ref("HELLO WORLD");
const toggleMessage = () => {
  hi.value = hi.value === "HELLO WORLD" ? "WELCOME TO NUXT UI!" : "HELLO WORLD";
};
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 dark:from-gray-950 dark:via-black dark:to-gray-900 flex items-center justify-center p-4 transition-colors duration-300"
  >
    <UCard class="max-w-md w-full text-center shadow-xl bg-white dark:bg-gray-800">
      <div class="space-y-4">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-2">
          <UIcon name="i-heroicons-sparkles" class="w-8 h-8 text-yellow-400" />
          Welcome
        </h1>
        <p class="text-gray-600 dark:text-gray-300">Explore Nuxt UI with Vue.js and Vite!</p>
        <div class="flex justify-center gap-4">
          <UButton
            color="primary"
            size="lg"
            @click="toggleMessage"
            class="animate-pulse hover:animate-none"
          >
            {{ hi }}
          </UButton>

        </div>
      </div>
    </UCard>
  </div>
</template>

<style scoped></style>
