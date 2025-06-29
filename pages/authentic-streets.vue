<template>
  <article class="attraction-page">
    <!-- Hero Section -->
    <section class="hero relative h-[60vh] min-h-[400px] overflow-hidden">
      <img
        src="/images/street-scenes-in-Antalya-Kaleici-Old-Town-Turkey-1.jpg"
        :alt="$t('alt.streets')"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      <div class="absolute bottom-0 left-0 right-0 p-8 text-white">
        <div class="container mx-auto">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-xl mb-4">
            {{ $t('authenticStreets.title') }}
          </h1>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="container mx-auto px-4 py-12">
      <!-- Introduction -->
      <section class="prose prose-lg max-w-none mb-16">
        <p class="text-xl leading-relaxed indent-6 text-kaleici-700 italic">
          {{ $t('authenticStreets.intro1') }}
        </p>
        <p class="text-xl leading-relaxed indent-6 text-kaleici-700">
          {{ $t('authenticStreets.intro2') }}
        </p>
        <p class="text-xl leading-relaxed indent-6 text-kaleici-700">
          {{ $t('authenticStreets.intro3') }}
        </p>
      </section>

      <!-- Image Gallery -->
      <section class="mb-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <img
            src="/images/street-scenes-in-Antalya-Kaleici-Old-Town-Turkey-2.jpg"
            :alt="$t('alt.streets')"
            class="w-full h-64 object-cover rounded-lg shadow-lg"
          />
          <img
            src="/images/street-scenes-in-Antalya-Kaleici-Old-Town-Turkey-3.jpg"
            :alt="$t('alt.streets')"
            class="w-full h-64 object-cover rounded-lg shadow-lg"
          />
          <img
            src="/images/street-scenes-in-Antalya-Kaleici-Old-Town-Turkey-4.jpg"
            :alt="$t('alt.streets')"
            class="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      <!-- Nearby Attractions -->
<section class="content-section mb-16 bg-stone-50 p-8 rounded-xl shadow-lg">
  <h2 class="text-3xl font-bold text-kaleici-800 mb-4 tracking-tight leading-snug">
    {{ $t('nearbyAttractions.sectionTitle') }}
  </h2>
  <p class="text-lg text-kaleici-700 mb-8 leading-relaxed">
    {{ $t('nearbyAttractions.sectionDescription5') }}
  </p>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <!-- Hadrian's Gate -->
    <NuxtLink
      to="/hadrians-gate"
      class="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition-all duration-300"
    >
      <div class="h-48 overflow-hidden">
        <img
          src="/images/hadrian-gate-in-Antalya-Kaleici-Old-Town-Turkey-1.jpg"
          :alt="$t('alt.streets')"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="p-5">
        <h3 class="text-xl font-semibold text-kaleici-800 mb-2">
          {{ $t('nearbyAttractions.hadriansGate.title') }}
        </h3>
        <p class="text-kaleici-700 text-base leading-relaxed">
          {{ $t('nearbyAttractions.hadriansGate.description') }}
        </p>
      </div>
    </NuxtLink>

    <!-- Old Harbor -->
    <NuxtLink
      to="/old-harbor"
      class="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition-all duration-300"
    >
      <div class="h-48 overflow-hidden">
        <img
          src="/images/old-harbor-in-Antalya-Kaleici-Old-Town-Turkey-1.jpg"
          :alt="$t('alt.streets')"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="p-5">
        <h3 class="text-xl font-semibold text-kaleici-800 mb-2">
          {{ $t('nearbyAttractions.oldHarbor.title') }}
        </h3>
        <p class="text-kaleici-700 text-base leading-relaxed">
          {{ $t('nearbyAttractions.oldHarbor.description') }}
        </p>
      </div>
    </NuxtLink>

    <!-- Hıdırlık Tower -->
    <NuxtLink
      to="/hidirlik-tower"
      class="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition-all duration-300"
    >
      <div class="h-48 overflow-hidden">
        <img
          src="/images/hidirlik-tower-seaside-perspective-olive-tree-in-antalya-kaleici-old-town-turkey.jpg"
          :alt="$t('alt.streets')"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="p-5">
        <h3 class="text-xl font-semibold text-kaleici-800 mb-2">
          {{ $t('nearbyAttractions.hidirlikTower.title') }}
        </h3>
        <p class="text-kaleici-700 text-base leading-relaxed">
          {{ $t('nearbyAttractions.hidirlikTower.description') }}
        </p>
      </div>
    </NuxtLink>
  </div>
</section>


      <!-- Tours Widget -->
      <section class="content-section">
        <div class="bg-white rounded-lg shadow-lg p-8">
          <h2 class="text-3xl font-bold text-kaleici-800 mb-6">
            {{ $t('authenticStreets.tourWidgetTitle') }}
          </h2>
          <p class="text-lg mb-8">
            {{ $t('authenticStreets.tourWidgetDesc') }}
          </p>
          <div class="gyg-widget-container">
            <GetYourGuide
              widgetType="activities"
              partner="kaleici_guide"
              q="kaleici walking tour"
            />
          </div>
        </div>
      </section>
    </div>
  </article>
</template>

<script setup>
import { useSeoMeta, useHead } from '#imports'
import { useI18n } from 'vue-i18n'
import GetYourGuide from '../../components/GetYourGuide.vue'

const { t} = useI18n()
const localePath = useLocalePath()

useSeoMeta({
  title: t('seo.streets.title'),
  description: t('seo.streets.description'),
  ogTitle: t('seo.streets.ogTitle'),
  ogDescription: t('seo.streets.ogDescription'),
  ogImage: t('seo.streets.ogImage'),
  twitterCard: "summary_large_image"
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://your-domain.com/hadrians-gate' },
    { rel: 'icon', type: 'image/ico', href: 'icons/favicon.ico' }
  ],
  meta: [
    { name: 'robots', content: 'index, follow' }
  ]
})

</script>

