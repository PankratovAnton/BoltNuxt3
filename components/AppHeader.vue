<template>
  <header class="bg-white shadow-sm border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo/Brand -->
        <div class="flex-shrink-0">
          <NuxtLink :to="localePath('/')" class="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
            {{ $t('site.title') }}
          </NuxtLink>
        </div>
        
        <!-- Navigation Links -->
        <nav class="hidden md:flex space-x-1">
          <NuxtLink 
            :to="localePath('/')" 
            class="nav-link"
            :class="$route.name === 'index___' + $i18n.locale || $route.name === 'index' ? 'nav-link-active' : 'nav-link-inactive'"
          >
            {{ $t('navigation.home') }}
          </NuxtLink>
          <NuxtLink 
            :to="localePath('/attractions')" 
            class="nav-link"
            :class="$route.name === 'attractions___' + $i18n.locale || $route.name === 'attractions' ? 'nav-link-active' : 'nav-link-inactive'"
          >
            {{ $t('navigation.attractions') }}
          </NuxtLink>
        </nav>

        <!-- Language Switcher & Mobile Menu Button -->
        <div class="flex items-center space-x-4">
          <!-- Language Switcher -->
          <div class="relative">
            <button 
              @click="toggleLanguageMenu"
              class="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition-colors"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
              </svg>
              <span>{{ getCurrentLanguageName() }}</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            
            <!-- Language Dropdown -->
            <div v-if="showLanguageMenu" class="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
              <div class="py-1">
                <button
                  v-for="locale in availableLocales"
                  :key="locale.code"
                  @click="switchLanguage(locale.code)"
                  class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                  :class="{ 'bg-blue-50 text-blue-600': $i18n.locale === locale.code }"
                >
                  {{ locale.name }}
                </button>
              </div>
            </div>
          </div>

          <!-- Mobile Menu Button -->
          <div class="md:hidden">
            <button 
              @click="toggleMobileMenu"
              class="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition-colors"
            >
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <!-- Mobile Navigation Menu -->
      <div v-if="showMobileMenu" class="md:hidden border-t border-gray-200 pt-2 pb-3">
        <NuxtLink 
          :to="localePath('/')" 
          class="block px-3 py-2 text-base font-medium transition-colors"
          :class="$route.name === 'index___' + $i18n.locale || $route.name === 'index' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'"
          @click="closeMobileMenu"
        >
          {{ $t('navigation.home') }}
        </NuxtLink>
        <NuxtLink 
          :to="localePath('/attractions')" 
          class="block px-3 py-2 text-base font-medium transition-colors"
          :class="$route.name === 'attractions___' + $i18n.locale || $route.name === 'attractions' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'"
          @click="closeMobileMenu"
        >
          {{ $t('navigation.attractions') }}
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup>
// Mobile menu state management
const showMobileMenu = ref(false)
const showLanguageMenu = ref(false)

// Get i18n instance
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath()

// Get available locales
const availableLocales = computed(() => locales.value)

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
  // Close language menu when opening mobile menu
  showLanguageMenu.value = false
}

const closeMobileMenu = () => {
  showMobileMenu.value = false
}

const toggleLanguageMenu = () => {
  showLanguageMenu.value = !showLanguageMenu.value
}

const switchLanguage = async (newLocale) => {
  await navigateTo(switchLocalePath(newLocale))
  showLanguageMenu.value = false
}

const getCurrentLanguageName = () => {
  const currentLocale = availableLocales.value.find(l => l.code === locale.value)
  return currentLocale ? currentLocale.name : 'Language'
}

// Close mobile menu when route changes
const route = useRoute()
watch(() => route.path, () => {
  showMobileMenu.value = false
  showLanguageMenu.value = false
})

// Close dropdowns when clicking outside
onMounted(() => {
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.relative')) {
      showLanguageMenu.value = false
    }
  })
})
</script>