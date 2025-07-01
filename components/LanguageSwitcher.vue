<template>
  <div 
    class="relative"
    @mouseenter="showDropdown = true"
    @mouseleave="startHideTimer"
  >
    <button 
      class="flex items-center text-center space-x-5 px-4 py-1.5 rounded-full transition-all duration-300 bg-[#f5ede1]/95 text-[#3e2b1c] hover:text-amber-800"
      @focus="showDropdown = true"
      type="button"
    >
      <span class="font-sans">{{ currentLanguage.code.toUpperCase() }}</span>
      <span class="text-xs">▼</span>
    </button>
    <div 
      v-show="showDropdown"
      class="absolute right-0 mt-6 w-36 bg-[#f5ede1] rounded-xl shadow-lg py-2 transition-opacity duration-200 z-50"
      @mouseenter="clearHideTimer"
      @mouseleave="startHideTimer"
    >
      <button
  v-for="lang in languages"
  :key="lang.code"
  @click="changeLanguage(lang.code)"
  class="block w-full text-left px-4 py-2 text-sm text-[#3e2b1c] focus:bg-[#f5ede1]"
  :class="{ 'font-sans': lang.code === locale }"
>
  <img :src="lang.flag" alt="" class="inline-block mr-2 w-5 h-5 align-middle" />
  {{ lang.name }}
</button>


    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useSwitchLocalePath } from '#imports'

// Props для красоты, можешь убрать если не используются
defineProps({
  isHeaderVisible: {
    type: Boolean,
    default: true
  },
  isAtTop: {
    type: Boolean,
    default: false
  }
})

const { locale } = useI18n()
const route = useRoute()
const switchLocalePath = useSwitchLocalePath()

const languages = [
  { code: 'en', name: 'English',    flag: '/icons/flags/gb.png' },
  { code: 'ru', name: 'Русский',    flag: '/icons/flags/ru.png' },
  { code: 'tr', name: 'Türkçe',     flag: '/icons/flags/tr.png' },
  { code: 'de', name: 'Deutsch',    flag: '/icons/flags/de.png' },
  { code: 'ua', name: 'Українська', flag: '/icons/flags/ua.png' },
  { code: 'es', name: 'Español',    flag: '/icons/flags/es.png' },
  { code: 'pl', name: 'Polski',     flag: '/icons/flags/pl.png' }
]


const showDropdown = ref(false)
let hideTimer = null

const currentLanguage = computed(() => 
  languages.find(lang => lang.code === locale.value) || languages[0]
)

const changeLanguage = async (code) => {
  const path = switchLocalePath(code)
  window.location.href = path // или navigateTo(path) если хочешь SPA-переход
  showDropdown.value = false
}

const startHideTimer = () => {
  hideTimer = setTimeout(() => {
    showDropdown.value = false
  }, 200)
}

const clearHideTimer = () => {
  if (hideTimer) {
    clearTimeout(hideTimer)
    hideTimer = null
  }
}
</script>
