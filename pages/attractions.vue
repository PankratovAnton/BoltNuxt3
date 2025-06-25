<template>
  <div>
    <!-- Page Header -->
    <section class="bg-white border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="text-center">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">
            {{ $t('attractions.header.title') }}
          </h1>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            {{ $t('attractions.header.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Attractions Grid -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <!-- Attraction Card 1 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div class="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <div class="text-white text-center">
                <svg class="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <p class="text-sm">{{ $t('common.imagePlaceholder') }}</p>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ $t('attractions.cards.nature.title') }}</h3>
              <p class="text-gray-600 mb-4">
                {{ $t('attractions.cards.nature.description') }}
              </p>
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-500">{{ $t('attractions.cards.nature.category') }}</span>
                <button class="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  {{ $t('attractions.learnMore') }} →
                </button>
              </div>
            </div>
          </div>

          <!-- Attraction Card 2 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div class="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
              <div class="text-white text-center">
                <svg class="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm0 5.5c-.83 0-1.5-.67-1.5-1.5S11.17 5.5 12 5.5s1.5.67 1.5 1.5S12.83 8.5 12 8.5z"/>
                </svg>
                <p class="text-sm">{{ $t('common.imagePlaceholder') }}</p>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ $t('attractions.cards.historic.title') }}</h3>
              <p class="text-gray-600 mb-4">
                {{ $t('attractions.cards.historic.description') }}
              </p>
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-500">{{ $t('attractions.cards.historic.category') }}</span>
                <button class="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  {{ $t('attractions.learnMore') }} →
                </button>
              </div>
            </div>
          </div>

          <!-- Attraction Card 3 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div class="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
              <div class="text-white text-center">
                <svg class="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                </svg>
                <p class="text-sm">{{ $t('common.imagePlaceholder') }}</p>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ $t('attractions.cards.entertainment.title') }}</h3>
              <p class="text-gray-600 mb-4">
                {{ $t('attractions.cards.entertainment.description') }}
              </p>
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-500">{{ $t('attractions.cards.entertainment.category') }}</span>
                <button class="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  {{ $t('attractions.learnMore') }} →
                </button>
              </div>
            </div>
          </div>

          <!-- Attraction Card 4 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div class="h-48 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
              <div class="text-white text-center">
                <svg class="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <p class="text-sm">{{ $t('common.imagePlaceholder') }}</p>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ $t('attractions.cards.scenic.title') }}</h3>
              <p class="text-gray-600 mb-4">
                {{ $t('attractions.cards.scenic.description') }}
              </p>
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-500">{{ $t('attractions.cards.scenic.category') }}</span>
                <button class="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  {{ $t('attractions.learnMore') }} →
                </button>
              </div>
            </div>
          </div>

          <!-- Attraction Card 5 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div class="h-48 bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
              <div class="text-white text-center">
                <svg class="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <p class="text-sm">{{ $t('common.imagePlaceholder') }}</p>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ $t('attractions.cards.coastal.title') }}</h3>
              <p class="text-gray-600 mb-4">
                {{ $t('attractions.cards.coastal.description') }}
              </p>
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-500">{{ $t('attractions.cards.coastal.category') }}</span>
                <button class="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  {{ $t('attractions.learnMore') }} →
                </button>
              </div>
            </div>
          </div>

          <!-- Attraction Card 6 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div class="h-48 bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
              <div class="text-white text-center">
                <svg class="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 11H7v9a2 2 0 002 2h8a2 2 0 002-2v-9h-2m-1-1V6a2 2 0 00-2-2h-4a2 2 0 00-2 2v4m-4-1h12l-1 9H6l-1-9z"/>
                </svg>
                <p class="text-sm">{{ $t('common.imagePlaceholder') }}</p>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ $t('attractions.cards.cultural.title') }}</h3>
              <p class="text-gray-600 mb-4">
                {{ $t('attractions.cards.cultural.description') }}
              </p>
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-500">{{ $t('attractions.cards.cultural.category') }}</span>
                <button class="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  {{ $t('attractions.learnMore') }} →
                </button>
              </div>
            </div>
          </div>

        </div>

        <!-- Load More Section -->
        <div class="text-center mt-12">
          <p class="text-gray-600 mb-4">{{ $t('attractions.loadMore.text') }}</p>
          <button class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled>
            {{ $t('attractions.loadMore.button') }}
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Get i18n functions
const { t } = useI18n()

// Set page meta
definePageMeta({
  title: 'Attractions - Attractions Hub',
  description: 'Explore our curated collection of amazing attractions from around the world'
})

// Set head tags with i18n
useHead({
  title: () => `${t('navigation.attractions')} - ${t('site.title')}`,
  meta: [
    {
      name: 'description',
      content: () => t('attractions.header.subtitle')
    }
  ]
})
</script>