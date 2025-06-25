<template>
  <footer class="bg-gray-800 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Company Info -->
        <div>
          <h3 class="text-lg font-semibold mb-4">{{ $t('footer.company.title') }}</h3>
          <p class="text-gray-300 text-sm leading-relaxed">
            {{ $t('footer.company.description') }}
          </p>
        </div>
        
        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4">{{ $t('footer.quickLinks.title') }}</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink :to="localePath('/')" class="text-gray-300 hover:text-white transition-colors text-sm">
                {{ $t('footer.quickLinks.home') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/attractions')" class="text-gray-300 hover:text-white transition-colors text-sm">
                {{ $t('footer.quickLinks.attractions') }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        
        <!-- Contact Info -->
        <div>
          <h3 class="text-lg font-semibold mb-4">{{ $t('footer.contact.title') }}</h3>
          <div class="text-gray-300 text-sm space-y-1">
            <p>{{ $t('footer.contact.email') }}</p>
            <p>{{ $t('footer.contact.phone') }}</p>
          </div>
        </div>
      </div>
      
      <!-- Bottom Bar -->
      <div class="border-t border-gray-700 mt-8 pt-6 text-center">
        <p class="text-gray-400 text-sm">
          {{ $t('footer.copyright', { year: currentYear }) }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Get current year for copyright
const currentYear = new Date().getFullYear()

// Get i18n functions
const localePath = useLocalePath()
</script>