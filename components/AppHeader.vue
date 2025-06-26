<template>
  <header
    ref="header"
    class="fixed top-0 left-0 right-0 h-16 transition-all duration-300 z-50 flex items-center"
    :class="[
      isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
    ]"
    @mouseenter="isHeaderHovered = true"
    @mouseleave="isHeaderHovered = false"
  >
    <div class="container mx-auto px-4 flex items-center justify-between relative">
      <!-- Logo / Home -->
      <NuxtLink
        :to="localePath('/')"
        class="text-2xl font-serif font-semibold tracking-tight italic transition-all duration-300 relative z-10 px-4 py-1.5 rounded-full bg-[#f5ede1]/95 text-[#3e2b1c] hover:text-amber-800"
      >
        Kaleiçi
      </NuxtLink>

      <!-- Navigation (center) -->
      <div class="absolute left-1/2 -translate-x-1/2 transition-all duration-300">
        <nav class="hidden md:flex bg-[#f5ede1]/95 rounded-full px-6 py-1.5">
          <NuxtLink
            v-for="item in navigation"
            :key="item.name"
            :to="localePath(item.path)"
            class="px-3 py-1 text-[#3e2b1c] hover:text-amber-800 transition-colors duration-300 font-sans font-medium"
            :class="isActive(item.path) ? 'text-amber-800' : ''"
          >
            {{ $t(`navigation.${item.name}`) }}
          </NuxtLink>
        </nav>
      </div>

      <!-- Language switcher and mobile menu -->
      <div class="flex items-center relative z-10">
        <div class="hidden md:block">
          <LanguageSwitcher :is-header-visible="isHeaderVisible" :is-at-top="isAtTop" />
        </div>
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="md:hidden ml-4 focus:outline-none transition-colors duration-300 text-[#3e2b1c]"
        >
          <span class="sr-only">Open menu</span>
          <div class="w-6 h-5 flex flex-col justify-between">
            <span :class="['w-full h-0.5 bg-current transform transition-transform', isMobileMenuOpen ? 'rotate-45 translate-y-2' : '']"></span>
            <span :class="['w-full h-0.5 bg-current transition-opacity', isMobileMenuOpen ? 'opacity-0' : '']"></span>
            <span :class="['w-full h-0.5 bg-current transform transition-transform', isMobileMenuOpen ? '-rotate-45 -translate-y-2' : '']"></span>
          </div>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-show="isMobileMenuOpen"
      class="md:hidden absolute top-full left-0 right-0 bg-[#f5ede1]/95 shadow-lg transition-all duration-300"
    >
      <div class="container mx-auto px-4 py-4">
        <nav class="flex flex-col space-y-4">
          <NuxtLink
            v-for="item in navigation"
            :key="item.name"
            :to="localePath(item.path)"
            class="text-[#3e2b1c] hover:text-amber-800 transition-colors py-2"
            @click="isMobileMenuOpen = false"
            :class="isActive(item.path) ? 'font-bold underline' : ''"
          >
            {{ $t(`navigation.${item.name}`) }}
          </NuxtLink>
          <div class="pt-2 border-t border-[#3e2b1c]/10">
            <LanguageSwitcher :is-header-visible="true" :is-at-top="false" />
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useWindowScroll } from '@vueuse/core'
import { useRoute } from 'vue-router'
import { useLocalePath } from '#imports'
import LanguageSwitcher from '~/components/LanguageSwitcher.vue'

// Три страницы по твоему пожеланию
const navigation = [
  { name: 'home', path: '/' },
  { name: 'attractions', path: '/attractions' },
  { name: 'tours', path: '/tours' }
]

const localePath = useLocalePath()
const route = useRoute()

// Scroll/visibility logic (анимация появления/скрытия)
const isHeaderVisible = ref(true)
const isHeaderHovered = ref(false)
const isMobileMenuOpen = ref(false)
const { y: scrollY } = useWindowScroll()
let lastScrollY = 0
let mouseAtTop = false

const isAtTop = computed(() => scrollY.value < 50)

const isActive = (path) => {
  // Простая проверка на активность (можешь заменить на более сложную, если нужны вложенные роуты)
  return route.path === localePath(path)
}

const handleScroll = () => {
  const currentScrollY = scrollY.value
  if (!mouseAtTop) {
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      isHeaderVisible.value = false
      isMobileMenuOpen.value = false
    } else {
      isHeaderVisible.value = true
    }
  }
  lastScrollY = currentScrollY
}

const handleMouseMove = (e) => {
  mouseAtTop = e.clientY <= 60
  if (mouseAtTop) {
    isHeaderVisible.value = true
  }
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('scroll', handleScroll, { passive: true })
})
onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('scroll', handleScroll)
})
</script>
