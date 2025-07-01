<template>
  <transition name="fade">
    <div v-if="open" class="fixed inset-0 z-[9999]">
      <!-- Sidebar -->
      <nav
  class="absolute top-4 right-4 w-[150px] max-h-[420px] font-sans rounded-2xl shadow-xl bg-[#f5ede1] flex flex-col py-4 px-4"
>
  <!-- Крестик -->
  <button
    @click="$emit('close')"
    class="absolute top-3 right-3 text-2xl px-1 hover:text-amber-800 transition"
    aria-label="Close menu"
  >
    &times;
  </button>
  <!-- Ссылки меню -->
  <div class="flex flex-col space-y-2 mt-2">
    <NuxtLink
      v-for="item in navigation"
      :key="item.name"
      :to="localePath(item.path)"
      class="text-[#3e2b1c] hover:text-amber-800 transition-colors py-2 w-full text-left font-medium"
      @click="$emit('close')"
      :class="isActive(item.path) ? 'font-bold underline' : ''"
    >
      {{ $t(`navigation.${item.name}`) }}
    </NuxtLink>
  </div>
  <hr class="my-3 border-[#e3d5c2]" />
  <!-- Языки -->
  <LanguageSwitcher :is-header-visible="true" :is-at-top="false" />
</nav>

    </div>
  </transition>
</template>




<script setup>
import { useLocalePath, useRoute } from '#imports'
import LanguageSwitcher from '~/components/LanguageSwitcher.vue'

const props = defineProps({
  open: Boolean,
  navigation: Array,
})

const emit = defineEmits(['close'])

const localePath = useLocalePath()
const route = useRoute()

const isActive = (path) => route.path === localePath(path)
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
