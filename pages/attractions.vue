<template>
  <div>
    <!-- Hero Image Section with Parallax -->
    <div class="relative h-[500px] overflow-hidden">
      <div
        class="absolute inset-0 bg-fixed"
        style="background-image: url('/images/hadrians-gate-in-Antalya-Kaleici-Old-Town-Turkey-3.jpg'); background-size: cover; background-position: center; transform: translateY(var(--parallax-offset, 0));"
        ref="parallaxBg"
      ></div>
      <div class="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div>
      <div class="container mx-auto px-4 h-full relative">
        <div class="absolute top-2/3 -translate-y-1/2 max-w-2xl">
          <h1 class="text-4xl text-white md:text-5xl lg:text-6xl font-sans font-extrabold leading-tight drop-shadow-xl mb-2">
            {{ $t('attractions.title') }}
          </h1>
          <p class="text-white/90 text-lg md:text-xl font-sans max-w-2xl mx-auto mb-8 leading-relaxed italic">
            {{ $t('attractions.introduction') }}
          </p>
        </div>
      </div>
    </div>

    <div class="bg-[#f5ede1]">
      <div class="container mx-auto px-4 py-16 ">
        <!-- Attractions Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">


          <!-- Add Hadrians Gate Card -->
          <NuxtLink
            :to="localePath('/hadrians-gate')"
            class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
          >
            <div class="relative h-64">
              <InteractiveImage
                src="/images/hadrian-gate-in-Antalya-Kaleici-Old-Town-Turkey-1.jpg"
                :alt="$t('alt.hadrian-gate')"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-semibold text-center text-kaleici-800 mb-2">
                {{ $t('attractions.hadrians-gate.title') }}
              </h3>
              <p class="text-kaleici-600 line-clamp-3">
                {{ $t('attractions.hadrians-gate.description') }}
              </p>
            </div>
          </NuxtLink>


          <!-- Add Old Harbor Card -->
          <NuxtLink
            :to="localePath('/old-harbor')"
            class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
          >
            <div class="relative h-64">
              <InteractiveImage
                src="/images/old-harbor-in-Antalya-Kaleici-Old-Town-Turkey-6.jpg"
                :alt="$t('alt.streets')"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-semibold text-center text-kaleici-800 mb-2">
                {{ $t('attractions.old-harbor.title') }}
              </h3>
              <p class="text-kaleici-600 line-clamp-3">
                {{ $t('attractions.old-harbor.description') }}
              </p>
            </div>
          </NuxtLink>
          

          <!-- Add Karaalioglu Park Card -->
          <NuxtLink
            :to="localePath('/karaalioglu-park')"
            class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
          >
            <div class="relative h-64">
              <InteractiveImage
                src="/images/karaalioglu-park-in-Antalya-Kaleici-Old-Town-Turkey-1.jpg"
                :alt="$t('alt.karaalioglu-park')"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-semibold text-center text-kaleici-800 mb-2">
                {{ $t('attractions.karaalioglu-park.title') }}
              </h3>
              <p class="text-kaleici-600 line-clamp-3">
                {{ $t('attractions.karaalioglu-park.description') }}
              </p>
            </div>
          </NuxtLink>

          <!-- Add Hidirlik Tower Card -->
          <NuxtLink
            :to="localePath('/hidirlik-tower')"
            class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
          >
            <div class="relative h-64">
              <InteractiveImage
                src="/images/hidirlik-tower-detailed-upper-walls-in-antalya-kaleici-old-town-turkey.jpg"
                :alt="$t('alt.hidirlik-tower')"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-semibold text-center text-kaleici-800 mb-2">
                {{ $t('attractions.hidirlik-tower.title') }}
              </h3>
              <p class="text-kaleici-600 line-clamp-3">
                {{ $t('attractions.hidirlik-tower.description') }}
              </p>
            </div>
          </NuxtLink>

          <!-- Add Traditional Bazaars Card -->
          <NuxtLink
            :to="localePath('/traditional-bazaars')"
            class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
          >
            <div class="relative h-64">
              <InteractiveImage
                src="/images/traditional-bazaar-in-Antalya-Kaleici-Old-Town-Turkey-3.jpg"
                :alt="$t('alt.traditional-bazaar')"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-semibold text-center text-kaleici-800 mb-2">
                {{ $t('attractions.traditional-bazaars.title') }}
              </h3>
              <p class="text-kaleici-600 line-clamp-3">
                {{ $t('attractions.traditional-bazaars.description') }}
              </p>
            </div>
          </NuxtLink>

          <!-- Add Authentic Streets Card -->
          <NuxtLink
            :to="localePath('/authentic-streets')"
            class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
          >
            <div class="relative h-64">
              <InteractiveImage
                src="/images/street-scenes-in-Antalya-Kaleici-Old-Town-Turkey-1.jpg"
                :alt="$t('alt.authentic-streets')"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-semibold text-center text-kaleici-800 mb-2">
                {{ $t('attractions.authentic-streets.title') }}
              </h3>
              <p class="text-kaleici-600 line-clamp-3">
                {{ $t('attractions.authentic-streets.description') }}
              </p>
            </div>
          </NuxtLink>


        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Nuxt 3 адаптация
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import InteractiveImage from '~/components/InteractiveImage.vue'
const { t } = useI18n()
const localePath = useLocalePath?.() // если nuxt/i18n

const parallaxBg = ref(null)

// Parallax effect
const handleScroll = () => {
  if (!parallaxBg.value) return
  const scrolled = window.scrollY
  const rate = scrolled * 0.4
  parallaxBg.value.style.setProperty('--parallax-offset', `${rate}px`)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})


useSeoMeta({
  title: t('seo.attractions.title'),
  description: t('seo.attractions.description'),
  ogTitle: t('seo.attractions.ogTitle'),
  ogDescription: t('seo.attractions.ogDescription'),
  ogImage: t('seo.attractions.ogImage'),
  twitterCard: "summary_large_image"
})

// SEO Nuxt 3 (или см. useHead Nuxt 3)
useHead({
  link: [
    { rel: 'canonical', href: 'https://your-domain.com/hadrians-gate' },
    { rel: 'icon', type: 'image/png', href: '/favicon.png' }
  ],
  meta: [
    { name: 'robots', content: 'index, follow' }
  ]
})

</script>

<style scoped>
.bg-fixed {
  background-attachment: fixed;
  will-change: transform;
}
</style>
