<template>
  <article class="tours-page">
    <!-- Hero Section -->
    <section class="hero relative h-[60vh] min-h-[400px] overflow-hidden">
      <img
        src="/images/kaleici-cafe-blue-shutters-streetside-restaurant-in-antalya-kaleici-old-town-turkey.jpg"
        alt="Tours & Excursions in Kaleiçi"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      <div class="absolute bottom-0 left-0 right-0 p-8 text-white">
        <div class="container mx-auto">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-xl mb-4">
            {{ $t('tours.title') }}
          </h1>
          <p class="text-2xl font-light mb-2">
            {{ $t('tours.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="container mx-auto px-4 py-12">
      <!-- Intro Section -->
      <section class="prose prose-lg max-w-none mb-12">
        <p class="text-xl leading-relaxed text-kaleici-700 italic">
          {{ $t('tours.intro') }}
        </p>
      </section>

      <!-- GetYourGuide Block 1 -->
      <section class="content-section mb-16">
        <div class="bg-white rounded-lg shadow-lg p-8">
          <h2 class="text-3xl font-bold text-kaleici-800 mb-6">
            {{ $t('tours.section1_title') }}
          </h2>
          <p class="text-lg text-kaleici-700 mb-8">
            {{ $t('tours.section1_subtitle') }}
          </p>
          <div class="gyg-widget-container">
            <GetYourGuide
              widgetType="activities"
              partner="kaleici_guide"
              q="antalya tours"
            />
          </div>
        </div>
      </section>

      <!-- GetYourGuide Block 2 (optional, more widgets as needed) -->
      <section class="content-section mb-16">
        <div class="bg-white rounded-lg shadow-lg p-8">
          <h2 class="text-2xl font-semibold text-kaleici-800 mb-4">
            {{ $t('tours.section2_title') }}
          </h2>
          <div class="gyg-widget-container">
            <GetYourGuide
              widgetType="tours"
              partner="kaleici_guide"
              q="kaleici excursions"
            />
          </div>
        </div>
      </section>

      <!-- Placeholder for additional content (add your blocks/text here) -->
      <section class="content-section mb-16">
        <div class="bg-stone-50 rounded-lg shadow-lg p-8 text-center">
          <h2 class="text-xl font-semibold text-kaleici-800 mb-2">
            {{ $t('tours.moreComing') }}
          </h2>
          <p class="text-kaleici-700">{{ $t('tours.moreComing_sub') }}</p>
        </div>
      </section>
    </div>
  </article>
</template>

<script setup>
import { useSeoMeta, useHead } from '#imports'
import { useI18n } from 'vue-i18n'
import { ref, computed } from 'vue'
import GetYourGuide from '../../components/GetYourGuide.vue'

// i18n
const { t } = useI18n()
const localePath = useLocalePath()

useSeoMeta({
  title: t('seo.tours.title'),
  description: t('seo.tours.description'),
  ogTitle: t('seo.tours.ogTitle'),
  ogDescription: t('seo.tours.ogDescription'),
  ogImage: t('seo.tours.ogImage'),
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


