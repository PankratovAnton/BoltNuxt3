<template>
  <article class="tours">
    <!-- Hero Section -->
<section class="relative h-[500px] overflow-hidden">
  <swiper
    :modules="[Autoplay, EffectFade]"
    :autoplay="{ delay: 5000, disableOnInteraction: false }"
    :effect="'fade'"
    :loop="true"
    class="absolute inset-0 w-full h-full"
    @slideChange="handleSlideChange"
  >
    <swiper-slide v-for="(image, index) in heroImages" :key="index">
      <div class="relative w-full h-full overflow-hidden">
        <img 
          :src="image.url" 
          :alt="$t(image.altKey)" 
          class="w-full h-full object-cover transition-transform duration-[5000ms]"
          :class="{ 'scale-105': isActiveSlide[index] }"
        />
        <div class="absolute inset-0 bg-black/30"></div>
      </div>
    </swiper-slide>
  </swiper>

     <div class="absolute inset-0 z-10 flex items-center px-4">
  <div class="w-full max-w-7xl mx-auto lg:ml-5 lg:pl-40"> 
    <div class="absolute top-2/3 -translate-y-1/2">
      <h1 class="font-sans text-4xl text-white md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-xl mb-4">
        {{ $t('tours.title') }}
      </h1>
      <p class="font-sans text-white/90 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed italic">
        {{ $t('tours.description') }}
      </p>
    </div>
  </div>
</div>
</section>

<section>
<div class="bg-[#f5ede1]">
      <div class="container mx-auto px-4 py-16 ">
        <!-- Attractions Grid -->
        <div class="grid md:grid-cols-1 lg:grid-cols-3 gap-8">


          <!-- Add Card -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
data-gyg-href="https://widget.getyourguide.com/default/activities.frame" 
data-gyg-locale-code="en-US" 
data-gyg-widget="activities" 
data-gyg-number-of-items="1" 
data-gyg-cmp="Kaleici" 
data-gyg-partner-id="RO6AILQ" 
data-gyg-q="Kaleici Old Town"><span>Powered by
   <a 
   target="_blank" 
   rel="sponsored" 
   href="https://www.getyourguide.com/-t759113">GetYourGuide</a>
  </span>
</div>


          <!-- Add Old Harbor Card -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
data-gyg-href="https://widget.getyourguide.com/default/activities.frame" 
data-gyg-locale-code="en-US" 
data-gyg-widget="activities" 
data-gyg-number-of-items="1" 
data-gyg-cmp="Kaleici" 
data-gyg-partner-id="RO6AILQ" 
data-gyg-q="Kaleici Old Town"><span>Powered by
   <a 
   target="_blank" 
   rel="sponsored" 
   href="https://www.getyourguide.com/-t759113">GetYourGuide</a>
  </span>
</div>
          

          <!-- Add Karaalioglu Park Card -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
data-gyg-href="https://widget.getyourguide.com/default/activities.frame" 
data-gyg-locale-code="en-US" 
data-gyg-widget="activities" 
data-gyg-number-of-items="1" 
data-gyg-cmp="Kaleici" 
data-gyg-partner-id="RO6AILQ" 
data-gyg-q="Kaleici Old Town"><span>Powered by
   <a 
   target="_blank" 
   rel="sponsored" 
   href="https://www.getyourguide.com/-t759113">GetYourGuide</a>
  </span>
</div>

        </div>
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
      <a
  href="https://www.booking.com/index.en-gb.html"
  target="_blank"
  rel="nofollow noopener"
  class="inline-block bg-amber-600 hover:bg-amber-700 text-white font-sans font-semibold px-6 py-3 rounded-lg shadow-lg transition"
>
  {{ $t('home.stay.cta') }}
</a>
    </div>
  </div>
</section>


        <div class="container mx-auto px-4 py-16 ">
        <!-- Attractions Grid -->
        <div class="grid md:grid-cols-1 lg:grid-cols-3 gap-8">


          <!-- Add Hidirlik Tower Card -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
data-gyg-href="https://widget.getyourguide.com/default/activities.frame" 
data-gyg-locale-code="en-US" 
data-gyg-widget="activities" 
data-gyg-number-of-items="1" 
data-gyg-cmp="Kaleici" 
data-gyg-partner-id="RO6AILQ" 
data-gyg-q="Kaleici Old Town"><span>Powered by
   <a 
   target="_blank" 
   rel="sponsored" 
   href="https://www.getyourguide.com/-t759113">GetYourGuide</a>
  </span>
</div>

          <!-- Add Traditional Bazaars Card -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
data-gyg-href="https://widget.getyourguide.com/default/activities.frame" 
data-gyg-locale-code="en-US" 
data-gyg-widget="activities" 
data-gyg-number-of-items="1" 
data-gyg-cmp="Kaleici" 
data-gyg-partner-id="RO6AILQ" 
data-gyg-q="Kaleici Old Town"><span>Powered by
   <a 
   target="_blank" 
   rel="sponsored" 
   href="https://www.getyourguide.com/-t759113">GetYourGuide</a>
  </span>
</div>

          <!-- Add Authentic Streets Card -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
data-gyg-href="https://widget.getyourguide.com/default/activities.frame" 
data-gyg-locale-code="en-US" 
data-gyg-widget="activities" 
data-gyg-number-of-items="1" 
data-gyg-cmp="Kaleici" 
data-gyg-partner-id="RO6AILQ" 
data-gyg-q="Kaleici Old Town"><span>Powered by
   <a 
   target="_blank" 
   rel="sponsored" 
   href="https://www.getyourguide.com/-t759113">GetYourGuide</a>
  </span>
</div>

        </div>
      </div>
    </div>




<div  class="bg-[#f5ede1] rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
      data-gyg-href="https://widget.getyourguide.com/default/activities.frame" 
      data-gyg-locale-code="en-US" 
      data-gyg-widget="activities" 
      data-gyg-number-of-items="3" 
      data-gyg-cmp="Kaleici Old Town" 
      data-gyg-partner-id="RO6AILQ" 
      data-gyg-q="Kaleici Old Town"><span>Powered by 
        <a target="_blank" 
        rel="sponsored" 
        href="https://www.getyourguide.com/-t759113">GetYourGuide</a>
      </span>
    </div>





    </section>







  </article>
</template>

<script setup>
const { t } = useI18n()
const localePath = useLocalePath()

import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import InteractiveImage from '~/components/InteractiveImage.vue'
// import GetYourGuide from '../components/GetYourGuide.vue'

const animatedSections = [
  ref(null), // discoverSection
  ref(null), // CatSection
  ref(null), // DoorSection
  ref(null), // FAGSection
  ref(null), // IconSSection
  ref(null), // IconMSection
  ref(null), // Section
  ref(null), // Section
]

const discoverSection = animatedSections[0]
const CatSection = animatedSections[1]
const DoorSection = animatedSections[2]
const FAGSection = animatedSections[3]
const IconSSection = animatedSections[4]
const IconMSection = animatedSections[5]

const isActiveSlide = ref({})
const heroImages = [
  {
    url: '/images/street-scenes-in-antalya-kaleici-old-town-turkey-9.jpg',
    altKey: 'alt.streets'
  },
  {
    url: '/images/old-harbor-in-antalya-kaleici-old-town-turkey-3.jpg',
    altKey: 'alt.old-harbor'
  },
  {
    url: '/images/old-harbor-in-antalya-kaleici-old-town-turkey-10.jpg',
    altKey: 'alt.old-harbor'
  }
]

const discoverLinks = [
  { name: 'attractions', translationKey: 'attractions' },
  { name: '', translationKey: 'tips' },
  { name: 'tours', translationKey: 'tours' }
]

const handleSlideChange = (swiper) => {
  Object.keys(isActiveSlide.value).forEach(key => {
    isActiveSlide.value[key] = false
  })
  isActiveSlide.value[swiper.realIndex] = true
}

const scrollToDiscover = () => {
  discoverSection.value.scrollIntoView({ behavior: 'smooth' })
}

// --- GSAP анимация только на клиенте! ---
onMounted(async () => {
  const gsap = (await import('gsap')).default
  const ScrollTrigger = (await import('gsap/ScrollTrigger')).default
  gsap.registerPlugin(ScrollTrigger)
  animatedSections.forEach(section => {
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
    { rel: 'canonical', href: 'https://https://exploreantalyakaleici.com/en/tours' },
    { rel: 'alternate', hreflang: 'en', href: 'https://https://exploreantalyakaleici.com/en/tours' },
    { rel: 'alternate', hreflang: 'ru', href: 'https://https://exploreantalyakaleici.com/ru/tours' },
    { rel: 'alternate', hreflang: 'tr', href: 'https://https://exploreantalyakaleici.com/tr/tours' },
    { rel: 'alternate', hreflang: 'de', href: 'https://https://exploreantalyakaleici.com/de/tours' },
    { rel: 'alternate', hreflang: 'ua', href: 'https://https://exploreantalyakaleici.com/ua/tours' }, // <-- исправлено!
    { rel: 'alternate', hreflang: 'es', href: 'https://https://exploreantalyakaleici.com/es/tours' },
    { rel: 'alternate', hreflang: 'pl', href: 'https://https://exploreantalyakaleici.com/pl/tours' },
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
        "@type": "Service",
        "serviceType": "Tours & Guides",
        "name": "Tours in Kaleiçi",
        "provider": {
          "@type": "Organization",
          "name": "Kaleiçi Guide"
        },
        "url": "https://https://exploreantalyakaleici.com/en/tours",
        "description": "Book local tours and guided experiences in Kaleiçi, Antalya.",
        "image": "/images/street-scenes-in-antalya-kaleici-old-town-turkey-9.jpg",
        "areaServed": {
          "@type": "Place",
          "name": "Kaleiçi, Antalya, Turkey"
        },
        "inLanguage": ["en", "ru", "tr", "de", "uk", "es", "pl"]
      })
    }
  ]
})

</script>


