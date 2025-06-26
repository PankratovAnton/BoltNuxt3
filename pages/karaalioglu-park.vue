<template>
  <article class="attraction-page">
    <!-- Hero Section -->
    <section class="hero relative h-[60vh] min-h-[400px] overflow-hidden">
      <img src="/images/karaalioglu-park-in-Antalya-Kaleici-Old-Town-Turkey-1.jpg" alt="Karaalioglu Park in Antalya" class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      <div class="absolute bottom-0 left-0 right-0 p-8 text-white">
        <div class="container mx-auto">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-xl mb-4">
            {{ $t('karaaliogluPark.intro_title') }}
          </h1>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="container mx-auto px-4 py-12">
      <!-- Introduction -->
      <section class="prose prose-lg max-w-none mb-16">
        <p class="text-xl leading-relaxed indent-6 text-kaleici-700 italic">
          {{ $t('karaaliogluPark.intro_paragraph') }} {{ $t('karaaliogluPark.location_paragraph') }}
        </p>
      </section>

      <!-- History Section -->
      <section class="content-section mb-16">
        <div class="mx-auto">
          <div>
            <InteractiveImage
              src="/images/karaalioglu-park-in-Antalya-Kaleici-Old-Town-Turkey-1.jpg"
              alt="Karaalioglu Park Historic View"
              class="float-left mr-8 mb-4 rounded-lg shadow-lg max-w-[640px] min-w-[420px] w-full md:w-4/5"
            />
          </div>
          <div>
            <h2 class="text-3xl font-bold text-kaleici-800 mb-6">
              {{ $t('karaaliogluPark.history_title') }}
            </h2>
            <div class="space-y-4 text-base leading-relaxed text-gray-700">
              <p class="font-medium text-kaleici-700">{{ $t('karaaliogluPark.history_paragraph1') }}</p>
              <p class="font-medium text-kaleici-700">{{ $t('karaaliogluPark.history_paragraph2') }}</p>
              <p class="font-medium text-kaleici-700">{{ $t('karaaliogluPark.history_paragraph3') }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Панорама -->
      <iframe width="100%" height="400" src="//1panorama.ru/embed/13907?options=0|0|0|0|0" frameborder="0" scrolling="no" allowfullscreen></iframe>

      <!-- Features Section -->
      <section ref="archSection" class="content-section mb-16 mt-8 bg-[#f5ede1] p-8 rounded-xl shadow-lg">
        <h2 class="text-3xl font-bold text-kaleici-800 mb-6 tracking-tight leading-snug">
          {{ $t('karaaliogluPark.features_title') }}
        </h2>
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div class="prose prose-lg max-w-none text-kaleici-700">
            <p class="indent-6 mb-4">{{ $t('karaaliogluPark.features_paragraph1') }}</p>
            <p class="indent-6 mb-4">{{ $t('karaaliogluPark.features_paragraph2') }}</p>
            <p class="indent-6 mb-4">{{ $t('karaaliogluPark.features_paragraph3') }}</p>
          </div>
          <div
            class="interactive-image-container overflow-hidden rounded-lg shadow-lg"
            @mousemove="handleMouseMove"
            @mouseleave="handleMouseLeave"
          >
            <img
              ref="interactiveImage"
              src="/images/karaalioglu-park-in-Antalya-Kaleici-Old-Town-Turkey-1.jpg"
              alt="Park Panorama"
              class="w-full max-w-[800px] h-[500px] object-cover transition-all duration-300 ease-out will-change-transform"
              :style="imageTransform"
            />
          </div>
        </div>
      </section>

      <!-- Nearby Attractions -->
<section class="content-section mb-16 bg-stone-50 p-8 rounded-xl shadow-lg">
  <h2 class="text-3xl font-bold text-kaleici-800 mb-4 tracking-tight leading-snug">
    {{ $t('nearbyAttractions.sectionTitle') }}
  </h2>
  <p class="text-lg text-kaleici-700 mb-8 leading-relaxed">
    {{ $t('nearbyAttractions.sectionDescription4') }}
  </p>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <!-- Traditional Bazaars -->
    <NuxtLink :to="localePath('/traditional-bazaars')" class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
      <div class="h-48 overflow-hidden">
        <img src="/images/traditional-bazaar-handmade-carpets-souvenirs-in-antalya-kaleici-old-town-turkey.jpg" alt="Traditional Bazaars" class="w-full h-full object-cover">
      </div>
      <div class="p-6">
        <h3 class="text-xl font-semibold text-kaleici-800 mb-3">{{ $t('nearbyAttractions.traditionalBazaars.title') }}</h3>
        <p class="text-kaleici-600">{{ $t('nearbyAttractions.traditionalBazaars.description') }}</p>
      </div>
    </NuxtLink>
    <!-- Authentic Streets -->
    <NuxtLink :to="localePath('/authentic-streets')" class="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
      <div class="h-48 overflow-hidden">
        <img src="/images/street-scenes-in-Antalya-Kaleici-Old-Town-Turkey-1.jpg" alt="Authentic Streets" class="w-full h-full object-cover" />
      </div>
      <div class="p-5">
        <h3 class="text-xl font-semibold text-kaleici-800 mb-2">
          {{ $t('nearbyAttractions.authenticStreets.title') }}
        </h3>
        <p class="text-kaleici-700 text-base leading-relaxed">
          {{ $t('nearbyAttractions.authenticStreets.description') }}
        </p>
      </div>
    </NuxtLink>
    <!-- Hadrian's Gate -->
    <NuxtLink :to="localePath('/hadrians-gate')" class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
      <div class="h-48 overflow-hidden">
        <img src="/images/hadrian-gate-in-Antalya-Kaleici-Old-Town-Turkey-1.jpg" alt="Hadrian's Gate" class="w-full h-full object-cover">
      </div>
      <div class="p-6">
        <h3 class="text-xl font-semibold text-kaleici-800 mb-3">{{ $t('nearbyAttractions.hadriansGate.title') }}</h3>
        <p class="text-kaleici-600">{{ $t('nearbyAttractions.hadriansGate.description') }}</p>
      </div>
    </NuxtLink>
  </div>
</section>


      <!-- FAQ Section -->
      <section ref="faqSection" class="content-section mb-18 py-10">
        <div class="container mx-auto px-4">
          <div class="grid md:grid-cols-2 gap-8">
            <div class="relative h-full">
              <InteractiveImage 
                src="/images/karaalioglu-park-in-Antalya-Kaleici-Old-Town-Turkey-1.jpg"
                alt="Karaalioglu Park"
                class="w-full h-[800px] max-h-[1000px] w-[600px] object-cover rounded-xl "
              />
            </div>
            <div class="bg-[#f5ede1] p-8 rounded-xl shadow-lg">
              <h2 class="text-3xl font-bold text-kaleici-800 mb-6">{{ $t('karaaliogluPark.whatToSee_title') }}</h2>
              <div class="prose prose-lg">
                <h3 class="text-2xl text-kaleici-700 mt-8 mb-4">{{ $t('karaaliogluPark.hidrlikTower_title') }}</h3>
                <p class="text-l text-kaleici-700 mt-8 mb-4">{{ $t('karaaliogluPark.hidrlikTower_paragraph') }}</p>
                <h3 class="text-2xl text-kaleici-700 mt-8 mb-4">{{ $t('karaaliogluPark.art_monuments_title') }}</h3>
                <p class="text-l text-kaleici-700 mt-8 mb-4">{{ $t('karaaliogluPark.art_monuments_paragraph') }}</p>
                <h3 class="text-2xl text-kaleici-700 mt-8 mb-4">{{ $t('karaaliogluPark.dancingGirls_title') }}</h3>
                <p class="text-l text-kaleici-700 mt-8 mb-4">{{ $t('karaaliogluPark.dancingGirls_paragraph') }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Guided Tour -->
      <section class="content-section mb-16">
        <h2 class="text-3xl font-bold text-kaleici-800 mb-4 tracking-tight leading-snug">
          {{ $t('karaaliogluPark.guidedTour_title') }}
        </h2>
        <div class="prose prose-lg max-w-none text-kaleici-700">
          <p class="indent-6 mb-4">{{ $t('karaaliogluPark.guidedTour_paragraph') }}</p>
        </div>
      </section>

      <!-- Flora Fauna Section -->
      <section class="content-section mb-16">
        <div class="grid md:grid-cols-2 gap-6 items-stretch">
          <div ref="wSection" class="bg-[#f5ede1] p-6 rounded-xl shadow-lg flex flex-col justify-between">
            <h2 class="text-3xl font-bold text-kaleici-800 mb-6 tracking-tight leading-snug">
              {{ $t('karaaliogluPark.floraFauna_title') }}
            </h2>
            <div class="prose prose-lg max-w-none text-kaleici-700">
              <p class="indent-6 mb-4">{{ $t('karaaliogluPark.floraFauna_paragraph1') }}</p>
              <p class="indent-6 mb-4">{{ $t('karaaliogluPark.floraFauna_paragraph2') }}</p>
              <p class="indent-6 mb-4">{{ $t('karaaliogluPark.floraFauna_paragraph3') }}</p>
            </div>
          </div>
          <div class="relative h-full">
            <InteractiveImage
              src="/images/karaalioglu-park-in-Antalya-Kaleici-Old-Town-Turkey-1.jpg"
              alt="Flora Fauna"
              class="w-full h-full object-cover max-h-[700px] rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      <!-- Tour Options (reuse, as на Hidirlik Tower) -->
      <section class="content-section mb-16">
        <div class="grid md:grid-cols-2 gap-6 items-stretch">
          <div>
            <InteractiveImage
              src="/images/hidirlik-tower-in-Antalya-Kaleici-Old-Town-Turkey-1.jpg"
              alt="Hidirlik Tower"
              class="rounded-lg object-cover shadow-lg w-full"
            />
          </div>
          <div>
            <h2 class="text-3xl font-bold text-kaleici-800 mb-6">
              {{ $t('hidirlikTower.tourOptions_title') }}
            </h2>
            <div class="space-y-4 text-base leading-relaxed text-gray-700">
              <p class="space-y-4 font-medium text-kaleici-700">
                {{ $t('hidirlikTower.tourOptions_text') }}
              </p>
              <h3 class="text-xl font-medium text-kaleici-800 mt-6 mb-2">{{ $t('hidirlikTower.practicalInfo_title') }}</h3>
              <ul class="list-disc text-kaleici-700 pl-5">
                <li>{{ $t('hidirlikTower.practicalInfo_list[0]') }}</li>
                <li>{{ $t('hidirlikTower.practicalInfo_list[1]') }}</li>
                <li>{{ $t('hidirlikTower.practicalInfo_list[2]') }}</li>
                <li>{{ $t('hidirlikTower.practicalInfo_list[3]') }}</li>
                <li>{{ $t('hidirlikTower.practicalInfo_list[4]') }}</li>
                <li>{{ $t('hidirlikTower.practicalInfo_list[5]') }}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Practical Information -->
      <section class="content-section mb-16">
        <div class="grid md:grid-cols-2 gap-8 items-stretch">
          <div class="prose prose-lg h-full flex flex-col justify-between text-kaleici-700 leading-relaxed">
            <h3 class="text-2xl font-semibold mb-4">{{ $t('hadriansGate.h3Text6') }}</h3>
            <p>{{ $t('hidirlikTower.gettingThere[0].route_text') }}</p>
            <h3 class="text-2xl font-semibold mt-8 mb-4">{{ $t('hidirlikTower.gettingThere_title') }}</h3>
            <div class="flex flex-col gap-3 mb-8">
              <div class="bg-stone-50 rounded-lg p-4 flex items-center shadow-sm">
                <img src="/icons/Walk.svg" alt="Walking Icon" class="w-7 h-7 mr-4 text-amber-600" />
                <p class="text-sm text-kaleici-800">{{ $t('hidirlikTower.gettingThere[0].route_title') }}</p>
                <p class="text-sm text-kaleici-800">{{ $t('hidirlikTower.gettingThere[1].route_title') }}</p>
                <p class="text-sm text-kaleici-800">{{ $t('hidirlikTower.gettingThere[2].route_title') }}</p>
              </div>
              <div class="bg-stone-50 rounded-lg p-4 flex items-center shadow-sm">
                <img src="/icons/Tram.svg" alt="Tram Icon" class="w-7 h-7 mr-4 text-amber-600" />
                <p class="text-sm text-kaleici-800">{{ $t('hidirlikTower.publicTram') }}</p>
              </div>
              <div class="bg-stone-50 rounded-lg p-4 flex items-center shadow-sm">
                <img src="/icons/Bus.svg" alt="Bus Icon" class="w-7 h-7 mr-4 text-amber-600" />
                <p class="text-sm text-kaleici-800">{{ $t('hidirlikTower.publicBus') }}</p>
              </div>
            </div>
            <h3 class="text-2xl font-semibold mt-4 mb-4">{{ $t('hadriansGate.h3Text8') }}</h3>
            <p>{{ $t('hadriansGate.pText23') }}</p>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div class="bg-stone-50 rounded-lg p-4 text-center shadow-sm aspect-square flex flex-col items-center justify-center">
                <img src="/icons/Cafe.svg" alt="Cafe Icon" class="w-8 h-6 mx-auto text-amber-600 mb-2" />
                <p class="text-sm font-medium text-kaleici-800">{{ $t('hadriansGate.pText24') }}</p>
              </div>
              <div class="bg-stone-50 rounded-lg p-4 text-center shadow-sm aspect-square flex flex-col items-center justify-center">
                <img src="/icons/Gift.svg" alt="Souvenir Icon" class="w-7 h-7 mx-auto text-amber-600 mb-2" />
                <p class="text-sm font-medium text-kaleici-800">{{ $t('hadriansGate.pText25') }}</p>
              </div>
              <div class="bg-stone-50 rounded-lg p-4 text-center shadow-sm aspect-square flex flex-col items-center justify-center">
                <img src="/icons/WC.svg" alt="Restroom WC Icon" class="w-7 h-5 mx-auto text-amber-600 mb-2" />
                <p class="text-sm font-medium text-kaleici-800">{{ $t('hadriansGate.pText26') }}</p>
              </div>
              <div class="bg-stone-50 rounded-lg p-4 text-center shadow-sm aspect-square flex flex-col items-center justify-center">
                <img src="/icons/Nature.svg" alt="Areas to Rest Icon" class="w-7 h-7 mx-auto text-amber-600 mb-2" />
                <p class="text-sm font-medium text-kaleici-800">{{ $t('hadriansGate.pText27') }}</p>
              </div>
            </div>
          </div>
          <div class="flex flex-col justify-between space-y-8 h-full">
            <h2 class="text-3xl font-bold text-kaleici-800 mb-6">{{ $t('hadriansGate.h2Text6') }}</h2>
            <InteractiveImage
              src="/images/hidirlik-tower-detailed-upper-walls-in-antalya-kaleici-old-town-turkey.jpg"
              alt="Visitor facilities near Hadrian's Gate"
              class="rounded-xl"
            />
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.6725431851424!2d30.703145776279144!3d36.88272447210611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c39009259f7e4f%3A0x8b1817aa2e5f733a!2sH%C4%B1d%C4%B1rl%C4%B1k%20Tower!5e0!3m2!1sen!2sus!4v1699453523018!5m2!1sen!2sus" width="100%" height="300" style="border: 0; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.05);" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>

      <!-- Tours Widget -->
      <section class="content-section">
        <div class="bg-white rounded-lg shadow-lg p-8">
          <h2 class="text-3xl font-bold text-kaleici-800 mb-6">{{ $t('hidirlikTower.discoverMore_title') }}</h2>
          <p class="text-lg text-kaleici-700 mb-8">{{ $t('hidirlikTower.discoverMore_text') }}</p>
          <div class="gyg-widget-container">
            <GetYourGuide widgettype="activities" partner="kaleici_guide" q="hadrians gate antalya" />
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
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const { locale } = useI18n()

const archSection = ref(null)
const faqSection = ref(null)
const wSection = ref(null)

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

onMounted(() => {
  [archSection, faqSection, wSection].forEach(section => {
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
  title: "Karaalioglu Park | Kaleiçi Guide",
  description: "Explore Karaalioglu Park in Antalya: history, features, best spots, nearby attractions, and practical visitor info.",
  ogTitle: "Karaalioglu Park in Antalya — Complete Guide",
  ogDescription: "Discover Antalya's famous Karaalioglu Park. History, walking tips, map, and more.",
  ogImage: "/images/karaalioglu-park-in-Antalya-Kaleici-Old-Town-Turkey-1.jpg",
  twitterCard: 'summary_large_image'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://your-domain.com/karaalioglu-park' },
    { rel: 'icon', type: 'image/png', href: '/favicon.png' }
  ],
  meta: [
    { name: 'robots', content: 'index, follow' }
  ]
})
</script>
