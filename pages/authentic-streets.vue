<template>
  <article class="attraction-page">
    <!-- Hero Section -->
    <section class="hero relative h-[60vh] min-h-[400px] overflow-hidden">
      <img
        src="/images/street-scenes-in-antalya-kaleici-old-town-turkey-5.jpg"
        :alt="$t('alt.streets')"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      <div class="absolute bottom-0 left-0 right-0 p-8 text-white">
        <div class="container mx-auto">
          <h1
            class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-xl mb-4"
          >
            {{ $t('authentic-streets.title') }}
          </h1>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="container mx-auto px-4 py-12">
      <!-- Introduction -->
      <section class="prose prose-lg max-w-none mb-16">
        <p class="text-xl leading-relaxed indent-6 text-kaleici-700 italic">
          {{ $t('authentic-streets.intro') }}
        </p>
      </section>

      <!-- History Section -->
      <section class="content-section mx-auto mb-8">
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <InteractiveImage
              src="/images/street-scenes-in-antalya-kaleici-old-town-turkey-6.jpg"
              :alt="$t('alt.streets')"
              class="rounded-lg max-h-[800px] full-h object-cover object-center shadow-lg"
            />
          </div>
          <div>
            <h2 class="text-3xl font-bold text-center text-kaleici-800 mb-6">
              {{ $t('authentic-streets.historyTitle') }}
            </h2>
            <div class="space-y-4 text-base leading-relaxed text-gray-700">
              <p>
                <span class="font-medium text-kaleici-800">
                  {{ $t('authentic-streets.history.p') }}
                </span>
              </p>
              <p>
                <span class="font-medium text-kaleici-800">
                  {{ $t('authentic-streets.history.p1') }}
                </span>
              </p>
              <p>
                <span class="font-medium text-kaleici-800">
                  {{ $t('authentic-streets.history.p2') }}
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>

       <!-- Where to Stay Section Nuxt3 — адаптив и центрирование -->
<section class="relative bg-white overflow-hidden min-h-[500px] md:min-h-[600px] max-h-[900px]">
  <!-- BG IMAGE -->
  <img
    src="/images/text-decorations-in-antalya-kaleici-old-town-turkey-1.jpg"
    :alt="$t('alt.hadrian-gate')"
    class="absolute inset-0 w-full h-full object-cover object-center opacity-70 pointer-events-none select-none"
    aria-hidden="true"
    draggable="false"
  />
  <!-- Затемнение для мобильных -->
  <div class="md:hidden absolute inset-0 bg-black/50 z-0"></div>

  <!-- Контент: строго по центру, на всех экранах -->
  <div class="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-center gap-8 py-8 min-h-[500px] md:min-h-[600px]">
    <!-- Фото -->
    <div class="w-full md:w-[44%] flex justify-center items-center">
      <InteractiveImage
        src="/images/text-decorations-in-antalya-kaleici-old-town-turkey-1.jpg"
        :alt="$t('alt.hadrian-gate')"
        class="w-full h-[300px] md:h-[520px] max-h-[600px] md:w-[420px] object-cover object-center rounded-xl shadow-xl md:my-6"
      />
    </div>
    <!-- Текстовый блок -->
    <div
      class="w-full md:w-[44%] max-w-lg bg-white/90 rounded-xl shadow-lg p-6 md:p-8 mb-6 md:mb-10 flex flex-col items-center"
      style="backdrop-filter: blur(2px);"
    >
      <h2 class="text-2xl font-sans font-bold text-kaleici-800 mb-4 text-center">{{ $t('home.stay.title') }}</h2>
      <p class="text-kaleici-700 font-sans mb-3 ">{{ $t('home.stay.intro') }}</p>
      <p class="text-kaleici-700 font-sans mb-6 ">{{ $t('home.stay.details') }}</p>
      <NuxtLink
        :to="localePath('/attractions')"
        class="inline-block bg-amber-600 hover:bg-amber-700 text-white font-sans font-semibold px-6 py-3 rounded-lg shadow transition text-base"
      >
        {{ $t('home.stay.cta') }}
      </NuxtLink>
    </div>
  </div>
</section>

<div class="container mx-auto px-4 py-12">

      <!-- Visiting Today Section -->
      <section class="content-section mb-16">
        <div class="grid md:grid-cols-2 gap-8 items-start min-h-[600px]">
          <!-- Text block -->
          <div
            ref="qSection"
            class="bg-[#f5ede1] p-6 rounded-xl shadow-lg flex flex-col justify-between"
          >
            <h2 class="text-2xl text-center font-semibold text-kaleici-800 mb-4">
              {{ $t('authentic-streets.title') }}
            </h2>
            <div class="prose prose-base font-medium text-kaleici-800 leading-relaxed">
              <p>{{ $t('authentic-streets.intro') }} </p>
              <h3 class=" text-base font-semibold mt-6 mb-2">
                {{ $t('authentic-streets.streets.hesapci.title') }}
              </h3>
              <p>{{ $t('authentic-streets.streets.hesapci.text') }}</p>
              <h3 class="text-base font-semibold mt-6 mb-2">
                {{ $t('authentic-streets.streets.uzun-carsi.title') }}
              </h3>
              <p>{{ $t('authentic-streets.streets.uzun-carsi.text') }}</p>
              <h3 class="text-base font-semibold mt-6 mb-2">
                {{ $t('authentic-streets.streets.mermerli.title') }}
              </h3>
              <p>{{ $t('authentic-streets.streets.mermerli.text') }}</p>
              
            </div>
          </div>
          <!-- Image block -->
          <div class="relative h-full">
            <InteractiveImage
              src="/images/street-scenes-in-antalya-kaleici-old-town-turkey-8.jpg"
              :alt="$t('alt.old-harbor')"
              class="w-full object-cover max-h-[1000px] rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>


      <!-- Nearby Attractions -->
      <section class="content-section mb-16 bg-[#fdedd8] p-8 rounded-xl shadow-lg">
        <h2
          class="text-3xl font-bold font-sans text-center text-kaleici-800 mb-4 tracking-tight leading-snug"
        >
          {{ $t('authentic-streets.nearbyTitle') }}
        </h2>
        <p class="text-lg font-sans text-center text-kaleici-700 mb-8 leading-relaxed">
          {{ $t('authentic-streets.nearbyText') }}
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Old Harbor -->
          <NuxtLink
            :to="localePath('/old-harbor')"
            class="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-[1.02] transition-all duration-300"
          >
            <div class="h-48 overflow-hidden">
              <img
                src="/images/old-harbor-in-antalya-kaleici-old-town-turkey-3.jpg"
                :alt="$t('alt.old-harbor')"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-5">
              <h3 class="text-xl text-center font-semibold text-kaleici-800 mb-2">
                {{ $t('nearbyAttractions.oldHarbor.title') }}
              </h3>
              <p class="text-kaleici-700 text-base leading-relaxed">
                {{ $t('nearbyAttractions.oldHarbor.description') }}
              </p>
            </div>
          </NuxtLink>
          <!-- Hidirlik Tower -->
          <NuxtLink
            :to="localePath('/hidirlik-tower')"
            class="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-[1.02] transition-all duration-300"
          >
            <div class="h-48 overflow-hidden">
              <img
                src="/images/hidirlik-tower-detailed-upper-walls-in-antalya-kaleici-old-town-turkey.jpg"
                :alt="$t('alt.hidirlik-tower')"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-5">
              <h3 class="text-xl text-center font-semibold text-kaleici-800 mb-2">
                {{ $t('nearbyAttractions.hidirlikTower.title') }}
              </h3>
              <p class="text-kaleici-700 text-base leading-relaxed">
                {{ $t('nearbyAttractions.hidirlikTower.description') }}
              </p>
            </div>
          </NuxtLink>
          <!-- Hadrians Gate -->
          <NuxtLink
            :to="localePath('/hadrians-gate')"
            class="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-[1.02] transition-all duration-300"
          >
            <div class="h-48 overflow-hidden">
              <img
                src="/images/hadrian-gate-in-antalya-kaleici-old-town-turkey-1.jpg"
                :alt="$t('alt.old-harbor')"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-5">
              <h3 class="text-xl text-center font-semibold text-kaleici-800 mb-2">
                {{ $t('nearbyAttractions.hadriansGate.title') }}
              </h3>
              <p class="text-kaleici-700 text-base leading-relaxed">
                {{ $t('nearbyAttractions.hadriansGate.description') }}
              </p>
            </div>
          </NuxtLink>
        </div>
      </section>


      <!-- Tours Widget -->
      <section class="content-section">
        <div class="bg-white rounded-lg shadow-lg p-8">
          <h2 class="text-3xl font-bold text-center text-kaleici-800 mb-6">
            {{ $t('authentic-streets.toursTitle') }}
          </h2>
          <p class="text-lg mb-8">{{ $t('authentic-streets.toursText') }}</p>
          <div class="gyg-widget-container">
            <GetYourGuide
              widgettype="activities"
              partner="kaleici_guide"
              q="hadrians gate antalya"
            />
          </div>
        </div>
      </section>
    </div>
  </article>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useSeoMeta, useHead } from '#imports'
import { useI18n } from 'vue-i18n'
import GetYourGuide from '~/components/GetYourGuide.vue'
import InteractiveImage from '~/components/InteractiveImage.vue'
// gsap и ScrollTrigger импортировать только внутри onMounted

const { t } = useI18n()
const localePath = useLocalePath()

const ArchSection = ref(null)
const ArchSection2 = ref(null)
const ArchSection3 = ref(null)
const ArchSection4 = ref(null)
const wSection = ref(null)
const eSection = ref(null)
const rSection = ref(null)

// --- GSAP: только внутри onMounted! ---
onMounted(async () => {
  const gsap = (await import('gsap')).default
  const ScrollTrigger = (await import('gsap/ScrollTrigger')).default
  gsap.registerPlugin(ScrollTrigger)
  ;[ArchSection, ArchSection2, ArchSection3, ArchSection4, wSection, eSection, rSection].forEach(section => {
    if (section.value) {
      gsap.from(section.value, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: section.value,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse'
        }
      })
    }
  })
})

// Анимация для интерактивного изображения
const interactiveImage = ref(null)
const imageTransform = ref('transform: scale(1) translate(0px, 0px)')

const handleMouseMove = (e) => {
  const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
  const x = (e.clientX - left) / width
  const y = (e.clientY - top) / height
  const translateX = (x - 0.5) * 20
  const translateY = (y - 0.5) * 20
  imageTransform.value = `transform: scale(1.1) translate(${translateX}px, ${translateY}px)`
}
const handleMouseLeave = () => {
  imageTransform.value = 'transform: scale(1) translate(0px, 0px)'
}

// SEO: тайтл, дескрипшн, canonical
useSeoMeta({
  title: t('seo.streets.title'),
  description: t('seo.streets.description'),
  ogTitle: t('seo.streets.ogTitle'),
  ogDescription: t('seo.streets.ogDescription'),
  ogImage: t('seo.streets.ogImage'),
  twitterCard: 'summary_large_image'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://example.com/authentic-streets' },
    { rel: 'alternate', hreflang: 'en', href: 'https://example.com/authentic-streets' },
    { rel: 'alternate', hreflang: 'ru', href: 'https://example.com/ru/authentic-streets' },
    { rel: 'alternate', hreflang: 'tr', href: 'https://example.com/tr/authentic-streets' },
    { rel: 'alternate', hreflang: 'de', href: 'https://example.com/de/authentic-streets' },
    { rel: 'alternate', hreflang: 'ua', href: 'https://example.com/ua/authentic-streets' }, // <-- исправлено!
    { rel: 'alternate', hreflang: 'es', href: 'https://example.com/es/authentic-streets' },
    { rel: 'alternate', hreflang: 'pl', href: 'https://example.com/pl/authentic-streets' },
    { rel: 'icon', type: 'image/ico', href: '/icons/favicon.ico' }
  ],
  meta: [
    { name: 'robots', content: 'index, follow' }
  ]
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "TouristAttraction",
        "name": "Authentic Streets of Kaleiçi",
        "description": "Explore the charming narrow lanes and historic architecture of Kaleiçi's most picturesque streets in Antalya.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Antalya",
          "addressCountry": "TR"
        },
        "url": "https://example.com/authentic-streets"
      })
    }
  ]
})

</script>
