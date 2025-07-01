<template>
  <header
    ref="header"
    class="fixed top-0 left-0 right-0 h-16 transition-all duration-300 z-50 flex items-center bg-transparent"
    :class="[{ 'translate-y-0': isHeaderVisible, '-translate-y-full': !isHeaderVisible }]"
    @mouseenter="isHeaderHovered = true"
    @mouseleave="isHeaderHovered = false"
  >
    <div class="container mx-auto px-4 flex items-center justify-between relative">
      <!-- Logo -->
      <NuxtLink
        :to="localePath('/')"
        class="text-2xl font-serif font-semibold tracking-tight italic transition-all duration-300 relative z-10 px-4 py-1.5 rounded-full bg-[#f5ede1]/95 text-[#3e2b1c] hover:text-amber-800"
      >
        Kaleiçi
      </NuxtLink>

      <!-- Desktop Navigation -->
      <nav class="absolute left-1/2 -translate-x-1/2 transition-all duration-300 hidden md:flex bg-[#f5ede1]/95 rounded-full px-6 py-1.5">
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

      <!-- Language Switcher and Hamburger -->
      <div class="flex items-center relative z-10">
        <div class="hidden md:block">
          <LanguageSwitcher />
        </div>
        <!-- Мобильный бургер -->
        <button
          @click="isMobileMenuOpen = true"
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

    <!-- Мобильное меню через отдельный компонент -->
    <MobileSideBar
      :open="isMobileMenuOpen"
      :navigation="navigation"
      @close="isMobileMenuOpen = false"
    />
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useWindowScroll } from '@vueuse/core'
import { useRoute } from 'vue-router'
import { useLocalePath } from '#imports'
import LanguageSwitcher from '~/components/LanguageSwitcher.vue'
import MobileSideBar from '~/components/MobileSidebar.vue' // путь укажи свой, если лежит в другом месте

const navigation = [
  { name: 'home', path: '/' },
  { name: 'attractions', path: '/attractions' },
  { name: 'tours', path: '/tours' }
]

const localePath = useLocalePath()
const route = useRoute()
const isHeaderVisible = ref(true)
const isHeaderHovered = ref(false)
const isMobileMenuOpen = ref(false)
const { y: scrollY } = useWindowScroll()
let lastScrollY = 0
let mouseAtTop = false

const isActive = (path) => route.path === localePath(path)

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
  if (mouseAtTop) isHeaderVisible.value = true
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

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
