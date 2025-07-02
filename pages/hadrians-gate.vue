<template>
  <article class="attraction-page">
    <!-- Hero Section -->
    <section class="hero relative h-[60vh] min-h-[400px] overflow-hidden">
      <img src="/images/hadrians-gate-in-Antalya-Kaleici-Old-Town-Turkey-1.jpg" :alt="$t('alt.hadrian-gate')" class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      <div class="absolute bottom-0 left-0 right-0 p-8 text-white">
        <div class="container mx-auto">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-xl mb-4">
            {{ $t('hadriansGate.h1Text1') }}
          </h1>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="container mx-auto px-4  py-12">
      <!-- Introduction -->
      <section class="prose prose-lg max-w-none mb-16">
        <p class="text-xl leading-relaxed indent-6 text-kaleici-700 italic">
          {{ $t('hadriansGate.pText1') }}
        </p>
      </section>

      <!-- History Section -->
      <section class="content-section mb-16" >
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <InteractiveImage
              src="/images/hadrians-gate-in-Antalya-Kaleici-Old-Town-Turkey-3.jpg"
              :alt="$t('alt.hadrian-gate')"
              class="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 class="text-3xl text-center font-bold text-kaleici-800 mb-6">
              {{ $t('hadriansGate.h2Text1') }}
            </h2>
            <div class="space-y-4 text-base leading-relaxed text-gray-700">
              <p>
                <span class="font-medium text-kaleici-800">
                  {{ $t('hadriansGate.pText2').split('.')[0] }}.
                </span>
                {{ $t('hadriansGate.pText2').slice($t('hadriansGate.pText2').indexOf('.') + 1) }}
              </p>
              <p class="italic text-kaleici-700 border-l-4 pl-4 border-amber-300 bg-stone-50 rounded-md">
                {{ $t('hadriansGate.pText3') }}
              </p>
              <p>
                {{ $t('hadriansGate.pText4') }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Architectural Features -->
      <section ref="archSection2" class="content-section mb-16 bg-[#f5ede1] p-8 rounded-xl shadow-lg">
        <h2 class="text-3xl font-bold text-center text-kaleici-800 mb-6 tracking-tight leading-snug">
          {{ $t('hadriansGate.h2Text2') }}
        </h2>
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div class="prose prose-lg max-w-none text-kaleici-700">
            <p class="indent-6 mb-4">{{ $t('hadriansGate.pText5') }}</p>
            <p class=" mb-4">{{ $t('hadriansGate.pText6') }}</p>
            <p class=" mb-4">{{ $t('hadriansGate.pText7') }}</p>
            <p class="">{{ $t('hadriansGate.pText8') }}</p>
          </div>
          <div
            class="interactive-image-container overflow-hidden rounded-lg shadow-lg"
            @mousemove="handleMouseMove"
            @mouseleave="handleMouseLeave"
          >
            <img
              ref="interactiveImage"
              src="/images/hadrians-gate-detailed-arches-ceiling-in-antalya-kaleici-old-town-turkey.jpg"
              :alt="$t('alt.hadrian-gate')"
              class="w-full max-h-[600px] transition-all duration-300 ease-out will-change-transform"
              :style="imageTransform"
            />
          </div>
        </div>
      </section>

      <!-- Nearby Attractions -->
<section class="content-section mb-16 bg-[#fdedd8] p-8 rounded-xl shadow-lg">
  <h2 class="text-3xl font-sans font-bold text-kaleici-800 text-center mb-4">
    {{ $t('nearbyAttractions.sectionTitle') }}
  </h2>
  <p class="text-lg font-sans text-center text-kaleici-600 mb-8">
    {{ $t('nearbyAttractions.sectionDescription1') }}
  </p>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <!-- Old Harbor -->
    <NuxtLink :to="localePath('/old-harbor')" class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
      <div class="h-48 overflow-hidden">
        <img src="/images/old-harbor-in-Antalya-Kaleici-Old-Town-Turkey-6.jpg" :alt="$t('alt.hadrian-gate')" class="w-full h-full object-cover">
      </div>
      <div class="p-6">
        <h3 class="text-xl font-semibold text-center text-kaleici-800 mb-3">{{ $t('nearbyAttractions.oldHarbor.title') }}</h3>
        <p class="text-kaleici-600">{{ $t('nearbyAttractions.oldHarbor.description') }}</p>
      </div>
    </NuxtLink>
    <!-- Authentic Streets -->
    <NuxtLink :to="localePath('/authentic-streets')" class="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
      <div class="h-48 overflow-hidden">
        <img src="/images/street-scenes-in-Antalya-Kaleici-Old-Town-Turkey-1.jpg" :alt="$t('alt.hadrian-gate')" class="w-full h-full object-cover" />
      </div>
      <div class="p-5">
        <h3 class="text-xl text-center font-semibold text-kaleici-800 mb-2">
          {{ $t('nearbyAttractions.authenticStreets.title') }}
        </h3>
        <p class="text-kaleici-700 text-base leading-relaxed">
          {{ $t('nearbyAttractions.authenticStreets.description') }}
        </p>
      </div>
    </NuxtLink>
    <!-- Hıdırlık Tower -->
    <NuxtLink :to="localePath('/hidirlik-tower')" class="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
      <div class="h-48 overflow-hidden">
        <img src="/images/hidirlik-tower-in-Antalya-Kaleici-Old-Town-Turkey-1.jpg" :alt="$t('alt.hadrian-gate')" class="w-full h-full object-cover" />
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
  </div>
</section>

<!-- Tours Widget -->
      <section class="content-section mb-0 py-5 bg-stone-100">
  <div class="container mx-auto px-4">
        <div class="bg-white rounded-lg shadow-lg p-8">
          <h2 class="text-3xl font-bold text-center text-kaleici-800 mb-6">
            {{ $t('hadriansGate.h2Text8') }}
          </h2>
          <p class="text-center text-lg mb-8">{{ $t('hadriansGate.pText30') }}</p>
          <div class="gyg-widget-container">
            <GetYourGuide
              widgettype="activities"
              partner="kaleici_guide"
              q="hadrians gate antalya"
            />
          </div>
        </div>
  </div>
      </section>
      
      <!-- Conclusion -->
      <section class="content-section mb-16">
        <h2 class="text-3xl font-bold text-center text-kaleici-800 mb-4 tracking-tight leading-snug">
          {{ $t('hadriansGate.h2Text7') }}
        </h2>
        <div class="prose prose-lg max-w-none text-kaleici-700">
          <p class="indent-6 mb-4">{{ $t('hadriansGate.pText28') }}</p>
          <p class="indent-6">{{ $t('hadriansGate.pText29') }}</p>
        </div>
      </section>
      <!-- ... -->


      <!-- Legends Section -->
      <section class="content-section mb-8">
        <div class="mb-8 rounded-lg overflow-hidden shadow-lg">
          <InteractiveImage 
            src="/images/hadrians-gate-roman-arch-landmark-in-antalya-kaleici-old-town-turkey.jpg"
            :alt="$t('alt.hadrian-gate')"
            class="w-full h-64 object-cover"
          />
        </div>
        <h2 class="text-3xl font-bold text-center text-kaleici-800 mb-4 tracking-tight leading-snug">
          {{ $t('hadriansGate.h2Text4') }}
        </h2>
        <div class="prose prose-lg max-w-none text-kaleici-700">
          <p class="indent-6 mb-4">{{ $t('hadriansGate.pText13') }}</p>
          <p>{{ $t('hadriansGate.pText14') }}</p>
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
      <section ref="archSection3" class="content-section mb-16">
        <div class="grid md:grid-cols-2 gap-8 items-stretch">
          <!-- Text block -->
          <div class="bg-[#f5ede1] p-6 rounded-xl shadow-lg flex flex-col justify-between">
            <h2 class="text-3xl font-bold text-center font-sans text-kaleici-800 mb-6">{{ $t('hadriansGate.h2Text5') }}</h2>
            <div class="prose prose-base font-sans text-kaleici-700 leading-relaxed">
              <p>{{ $t('hadriansGate.pText15') }}</p>
              <h3 class="text-xl font-sans mt-6 mb-2">{{ $t('hadriansGate.h3Text4') }}</h3>
              <p>{{ $t('hadriansGate.pText16') }}</p>
              <p>{{ $t('hadriansGate.pText17') }}</p>
              <h3 class="text-xl font-sans mt-6 mb-2">{{ $t('hadriansGate.h3Text5') }}</h3>
              <ul class="list-disc pl-5">
                <li>{{ $t('hadriansGate.liText1') }}</li>
                <li>{{ $t('hadriansGate.liText2') }}</li>
                <li>{{ $t('hadriansGate.liText3') }}</li>
                <li>{{ $t('hadriansGate.liText4') }}</li>
                <li>{{ $t('hadriansGate.liText5') }}</li>
              </ul>
            </div>
          </div>
          <!-- Image block -->
          <div class="relative h-full">
            <InteractiveImage 
              src="/images/hadrians-gate-in-Antalya-Kaleici-Old-Town-Turkey-2.webp"
              :alt="$t('alt.hadrian-gate')"
              class="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      <!-- Practical Information -->
      <section ref="archSection7" class="content-section mb-16">
        <div class="grid md:grid-cols-2 gap-8 items-stretch">
          <div class="flex flex-col justify-between space-y-8 h-full">
            <h2 class="text-3xl font-sans text-center font-bold text-kaleici-800 mb-6">{{ $t('hadriansGate.h2Text6') }}</h2>
            <InteractiveImage 
              src="/images/hadrians-gate-in-Antalya-Kaleici-Old-Town-Turkey-4.jpg"
              :alt="$t('alt.hadrian-gate')"
            />
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d564.1336697113363!2d30.708982505630104!3d36.885038351263354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c39127a10a816b%3A0xb3281b73313e753a!2z0JLQvtGA0L7RgtCwINCQ0LTRgNC40LDQvdCw!5e0!3m2!1sru!2str!4v1749070044496!5m2!1sru!2str" 
              width="100%" height="400" style="border: 0; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.05);" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          <div class="prose prose-lg h-full flex flex-col justify-between text-kaleici-700 leading-relaxed">
            <h3 class="text-2xl text-center font-sans mb-4">{{ $t('hadriansGate.h3Text6') }}</h3>
            <p class="font-sans [text-indent:2em]">{{ $t('hadriansGate.pText18') }}</p>
            <h3 class="text-2xl text-center font-sans mt-8 mb-4">{{ $t('hadriansGate.h3Text7') }}</h3>
            <div ref="archSection" class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div class="bg-stone-50 rounded-lg p-4 text-center shadow-sm">
                <img src="/icons/Walk.svg" :alt="$t('alt.hadrian-gate')" class="w-10 h-10 mx-auto text-amber-600 mb-2" />
                <p class="text-sm text-left font-sans text-kaleici-800">{{ $t('hadriansGate.pText19') }}</p>
              </div>
              <div class="bg-stone-50 rounded-lg p-4 text-center shadow-sm">
                <img src="/icons/Tram.svg" :alt="$t('alt.hadrian-gate')" class="w-10 h-10 mx-auto text-amber-600 mb-2" />
                <p class="text-sm text-left font-sans text-kaleici-800">{{ $t('hadriansGate.pText20') }}</p>
              </div>
              <div class="bg-stone-50 rounded-lg p-4 text-center shadow-sm">
                <img src="/icons/Bus.svg" :alt="$t('alt.hadrian-gate')" class="w-10 h-10 mx-auto text-amber-600 mb-2" />
                <p class="text-sm text-left font-sans text-kaleici-800">{{ $t('hadriansGate.pText21') }}</p>
              </div>
              <div class="bg-stone-50 rounded-lg p-4 text-center shadow-sm">
                <img src="/icons/Taxi.svg" :alt="$t('alt.hadrian-gate')" class="w-10 h-10 mx-auto text-amber-600 mb-2" />
                <p class="text-sm text-left font-sans text-kaleici-800">{{ $t('hadriansGate.pText22') }}</p>
              </div>
            </div>
            <h3 class="text-2xl text-center font-sans mt-4 mb-4">{{ $t('hadriansGate.h3Text8') }}</h3>
            <p class="font-sans [text-indent:2em]">{{ $t('hadriansGate.pText23') }}</p>
            <div ref="archSection5" class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div class="bg-stone-50 rounded-lg p-4 text-center shadow-sm aspect-square flex flex-col items-center justify-center">
                <img src="/icons/Cafe.svg" :alt="$t('alt.hadrian-gate')" class="w-10 h-10 mx-auto text-amber-600 mb-2" />
                <p class="text-sm font-medium font-sans text-kaleici-800">{{ $t('hadriansGate.pText24') }}</p>
              </div>
              <div class="bg-stone-50 rounded-lg p-4 text-center shadow-sm aspect-square flex flex-col items-center justify-center">
                <img src="/icons/Gift.svg" :alt="$t('alt.hadrian-gate')" class="w-10 h-10 mx-auto text-amber-600 mb-2" />
                <p class="text-sm font-medium font-sans text-kaleici-800">{{ $t('hadriansGate.pText25') }}</p>
              </div>
              <div class="bg-stone-50 rounded-lg p-4 text-center shadow-sm aspect-square flex flex-col items-center justify-center">
                <img src="/icons/WC.svg" :alt="$t('alt.hadrian-gate')" class="w-10 h-10 mx-auto text-amber-600 mb-2" />
                <p class="text-sm font-medium font-sans text-kaleici-800">{{ $t('hadriansGate.pText26') }}</p>
              </div>
              <div class="bg-stone-50 rounded-lg p-4 text-center shadow-sm aspect-square flex flex-col items-center justify-center">
                <img src="/icons/Nature.svg" :alt="$t('alt.hadrian-gate')" class="w-10 h-10 mx-auto text-amber-600 mb-2" />
                <p class="text-sm font-medium font-sans text-kaleici-800">{{ $t('hadriansGate.pText27') }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Tours Widget -->
      <section class="content-section mb-0 py-5 bg-stone-100">
  <div class="container mx-auto px-4">
        <div class="bg-white rounded-lg shadow-lg p-8">
          <h2 class="text-3xl font-bold text-center text-kaleici-800 mb-6">
            {{ $t('hadriansGate.h2Text8') }}
          </h2>
          <p class="text-center text-lg mb-8">{{ $t('hadriansGate.pText30') }}</p>
          <div class="gyg-widget-container">
            <GetYourGuide
              widgettype="activities"
              partner="kaleici_guide"
              q="hadrians gate antalya"
            />
          </div>
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
// gsap импортировать только внутри onMounted!

const { t } = useI18n()
const localePath = useLocalePath()

// Список секций для анимаций
const archSection = ref(null)
const archSection2 = ref(null)
const archSection3 = ref(null)
const archSection4 = ref(null)
const archSection5 = ref(null)

onMounted(async () => {
  const gsap = (await import('gsap')).default
  const ScrollTrigger = (await import('gsap/ScrollTrigger')).default
  gsap.registerPlugin(ScrollTrigger)
  ;[archSection, archSection2, archSection3, archSection4].forEach(section => {
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

// SEO
useSeoMeta({
  title: t('seo.hadrian-gate.title'),
  description: t('seo.hadrian-gate.description'),
  ogTitle: t('seo.hadrian-gate.ogTitle'),
  ogDescription: t('seo.hadrian-gate.ogDescription'),
  ogImage: t('seo.hadrian-gate.ogImage'),
  twitterCard: 'summary_large_image'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://example.com/hadrians-gate' },
    { rel: 'alternate', hreflang: 'en', href: 'https://example.com/hadrians-gate' },
    { rel: 'alternate', hreflang: 'ru', href: 'https://example.com/ru/hadrians-gate' },
    { rel: 'alternate', hreflang: 'tr', href: 'https://example.com/tr/hadrians-gate' },
    { rel: 'alternate', hreflang: 'de', href: 'https://example.com/de/hadrians-gate' },
    { rel: 'alternate', hreflang: 'ua', href: 'https://example.com/ua/hadrians-gate' }, // исправлено!
    { rel: 'alternate', hreflang: 'es', href: 'https://example.com/es/hadrians-gate' },
    { rel: 'alternate', hreflang: 'pl', href: 'https://example.com/pl/hadrians-gate' },
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
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "TouristAttraction",
        "name": "Hadrian's Gate",
        "description": "A triumphal arch built in honor of the Roman Emperor Hadrian, one of the city's most iconic historical landmarks.",
        "image": "https://example.com/images/hadrians-gate.jpg",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Antalya",
          "addressCountry": "TR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 36.8862,
          "longitude": 30.7057
        },
        "url": "https://example.com/hadrians-gate"
      })
    }
  ]
})

</script>
