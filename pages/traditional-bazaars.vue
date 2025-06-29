<template>
  <article class="attraction-page">
    <!-- Hero Section -->
    <section class="hero relative h-[60vh] min-h-[400px] overflow-hidden">
      <img
        src="/images/traditional-bazaar-handmade-carpets-souvenirs-in-antalya-kaleici-old-town-turkey.jpg"
        :alt="$t('alt.traditional-bazaar')"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      <div class="absolute bottom-0 left-0 right-0 p-8 text-white">
        <div class="container mx-auto">
          <h1
            class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-xl mb-4"
          >
            {{ $t('traditionalBazaar.title') }}
          </h1>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="container mx-auto px-4 py-12">
      <!-- Introduction -->
      <section class="prose prose-lg max-w-none mb-16">
        <p class="text-xl leading-relaxed indent-6 text-kaleici-700 italic">
          {{ $t('traditionalBazaar.intro') }}
        </p>
      </section>

      <!-- History Section -->
      <section class="content-section mb-16">
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <InteractiveImage
              src="/images/traditional-bazaar-in-Antalya-Kaleici-Old-Town-Turkey-6.jpg"
              :alt="$t('alt.traditional-bazaar')"
              class="rounded-lg h-[650px] object-cover object-center shadow-lg"
            />
          </div>
          <div>
            <h2 class="text-3xl text-center font-bold text-kaleici-800 mb-6">
              {{ $t('traditionalBazaar.historyTitle') }}
            </h2>
            <div class="space-y-4 text-base leading-relaxed text-gray-700">
              <p class="indent-4 font-medium text-kaleici-700">
                {{ $t('traditionalBazaar.historyParagraph1') }}
              </p>
              <p class="indent-4 italic text-kaleici-700 border-l-4 pl-4 border-amber-300 bg-stone-50 rounded-md">
                {{ $t('traditionalBazaar.historyParagraph2') }}
              </p>
              <p class="indent-4 font-medium text-kaleici-700">
                {{ $t('traditionalBazaar.historyParagraph3') }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Unique Atmosphere -->
      <section ref="ArchSection" class="content-section mb-16 bg-[#f5ede1] p-8 rounded-xl shadow-lg">
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div class="prose prose-lg max-w-none">
            <p class="text-3xl text-center font-bold text-kaleici-800 mb-6">
              {{ $t('traditionalBazaar.atmosphereTitle') }}
            </p>
            <p class="indent-4 text-kaleici-700">
              {{ $t('traditionalBazaar.atmosphereParagraph1') }}
            </p>
            <p class="indent-4 text-kaleici-700">
              {{ $t('traditionalBazaar.atmosphereParagraph2') }}
            </p>
          </div>
          <div
            class="interactive-image-container overflow-hidden rounded-lg shadow-lg"
            @mousemove="handleMouseMove"
            @mouseleave="handleMouseLeave"
          >
            <img
              ref="interactiveImage"
              src="/images/traditional-bazaar-in-Antalya-Kaleici-Old-Town-Turkey-3.jpg"
              :alt="$t('alt.traditional-bazaar')"
              class="w-full h-full object-cover max-h-[500px] transition-all duration-300 ease-out will-change-transform"
              :style="imageTransform"
            />
          </div>
        </div>
      </section>

      <!-- Nearby Attractions -->
      <section class="content-section mb-16 bg-[#fdedd8] p-8 rounded-xl shadow-lg">
        <h2 class="text-3xl font-sans text-center font-bold text-kaleici-800 mb-4 tracking-tight leading-snug">
          {{ $t('nearbyAttractions.sectionTitle') }}
        </h2>
        <p class="text-lg font-sans text-center text-kaleici-700 mb-8 leading-relaxed">
          {{ $t('nearbyAttractions.sectionDescription4') }}
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Hadrian's Gate -->
          <NuxtLink :to="localePath('/hadrians-gate')" class="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
            <div class="h-48 overflow-hidden">
              <img src="/images/hadrians-gate-roman-arch-landmark-in-antalya-kaleici-old-town-turkey.jpg" :alt="$t('alt.traditional-bazaar')" class="w-full h-full object-cover" />
            </div>
            <div class="p-5">
              <h3 class="text-xl font-semibold text-center text-kaleici-800 mb-2">
                {{ $t('nearbyAttractions.hadriansGate.title') }}
              </h3>
              <p class="text-kaleici-700 text-base leading-relaxed">
                {{ $t('nearbyAttractions.hadriansGate.description') }}
              </p>
            </div>
          </NuxtLink>
          <!-- Old Harbor -->
          <NuxtLink :to="localePath('/old-harbor')" class="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
            <div class="h-48 overflow-hidden">
              <img src="/images/old-harbor-in-Antalya-Kaleici-Old-Town-Turkey-1.jpg" :alt="$t('alt.traditional-bazaar')" class="w-full h-full object-cover" />
            </div>
            <div class="p-5">
              <h3 class="text-xl font-semibold text-center text-kaleici-800 mb-2">
                {{ $t('nearbyAttractions.oldHarbor.title') }}
              </h3>
              <p class="text-kaleici-700 text-base leading-relaxed">
                {{ $t('nearbyAttractions.oldHarbor.description') }}
              </p>
            </div>
          </NuxtLink>
          <!-- Hıdırlık Tower -->
          <NuxtLink :to="localePath('/hidirlik-tower')" class="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
            <div class="h-48 overflow-hidden">
              <img src="/images/hidirlik-tower-seaside-perspective-olive-tree-in-antalya-kaleici-old-town-turkey.jpg" :alt="$t('alt.traditional-bazaar')" class="w-full h-full object-cover" />
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

      <!-- Conclusion -->
      <section class="content-section mb-16">
        <h2 class="text-3xl font-bold text-center text-kaleici-800 mb-4 tracking-tight leading-snug">
          {{ $t('traditionalBazaar.conclusionTitle') }}
        </h2>
        <div class="prose prose-lg max-w-none text-kaleici-700">
          <p class="indent-4 font-medium mb-4">
            {{ $t('traditionalBazaar.conclusionParagraph1') }}
          </p>
          <p class=" font-medium">
            {{ $t('traditionalBazaar.conclusionParagraph2') }}
          </p>
        </div>
      </section>

      <!-- Legends Section -->
      <section class="content-section mb-16">
        <div class="mb-8 rounded-lg overflow-hidden shadow-lg">
          <InteractiveImage
            src="/images/traditional-bazaar-handmade-carpets-souvenirs-in-antalya-kaleici-old-town-turkey.jpg"
            :alt="$t('alt.traditional-bazaar')"
            class="w-full h-64 object-cover"
          />
        </div>
        <div class="prose prose-lg max-w-none text-kaleici-700">
          <p class="indent-0 mb-2">
            {{ $t('traditionalBazaar.conclusionParagraph3') }}
          </p>
        </div>
      </section>


            <!-- Visiting Today Section -->
      <section class="content-section mb-16">
        <div class="grid md:grid-cols-2 gap-8 items-stretch">
          <!-- Text block -->
          <div
            ref="qSection"
            class="bg-[#f5ede1] p-6 rounded-xl shadow-lg flex flex-col justify-between"
          >
            <h2 class="text-2xl text-center font-semibold text-kaleici-800 mb-2">
              {{ $t('traditionalBazaar.faqTitle') }}
            </h2>
            <div class="prose prose-base text-kaleici-700 leading-relaxed">
              <h3 class="text-xl font-semibold mt-6 mb-4">
                {{ $t('traditionalBazaar.faq1Question') }}
              </h3>
              <p>{{ $t('traditionalBazaar.faq1Answer') }}</p>
              <h3 class="text-xl font-semibold mt-6 mb-4">
                {{ $t('traditionalBazaar.faq2Question') }}
              </h3>
              <p>{{ $t('traditionalBazaar.faq2Answer') }}</p>
              <h3 class="text-xl font-semibold mt-6 mb-4">
                {{ $t('traditionalBazaar.faq3Question') }}
              </h3>
              <p>{{ $t('traditionalBazaar.faq3Answer') }}</p>
            </div>
          </div>
          <!-- Image block -->
          <div class="relative h-full">
            <InteractiveImage
              src="/images/traditional-bazaar-in-Antalya-Kaleici-Old-Town-Turkey-1.jpg"
              :alt="$t('alt.traditional-bazaar')"
              class="w-full object-cover h-[600px] rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      <!-- Shopping Tips -->
      <section class="content-section mb-16">
        <div class="grid md:grid-cols-2 gap-6 items-stretch">
          <!-- Image block -->
          <div class="relative h-full">
            <InteractiveImage
              src="/images/traditional-bazaar-in-Antalya-Kaleici-Old-Town-Turkey-4.jpg"
              :alt="$t('alt.traditional-bazaar')"
              class="w-full h-full object-cover max-h-[650px] rounded-xl shadow-lg"
            />
          </div>
          <!-- Text block -->
          <div
            ref="wSection"
            class="bg-[#f5ede1] p-6 rounded-xl shadow-lg flex flex-col justify-between"
          >
            <h2 class="text-2xl font-semibold text-center text-kaleici-800 mb-4">
              {{ $t('traditionalBazaar.shoppingTipsTitle') }}
            </h2>
            <div class="prose prose-base text-kaleici-700 leading-relaxed">
              <p class="indent-6 mb-4">
                {{ $t('traditionalBazaar.shoppingTipsParagraph1') }}
              </p>
              <p class=" mb-4">
                {{ $t('traditionalBazaar.shoppingTipsParagraph2') }}
              </p>
              <p class=" mb-4">
                {{ $t('traditionalBazaar.shoppingTipsParagraph3') }}
              </p>
            </div>
          </div>
        </div>
      </section>

 <!-- Practical Information -->
<section class="content-section mb-16">
  <div class="grid md:grid-cols-2 gap-8 items-stretch">
    <div class="prose prose-lg h-full flex flex-col justify-between font-sans text-kaleici-700 leading-relaxed">
      <h3 class="text-2xl text-center font-semibold mb-4">
        {{ $t('hadriansGate.h3Text6') }}
      </h3>
      <p>{{ $t('traditionalBazaar.practicalInfoParagraph1') }}</p>
      <p>{{ $t('traditionalBazaar.practicalInfoParagraph3') }}</p>
      <h3 class="text-2xl text-center font-semibold mt-4 mb-4">
        {{ $t('oldHarbor.oldHarbor.gettingThere_publicTransportTitle') }}
      </h3>
      <div ref="eSection" class="flex flex-col gap-3 mb-8">
        <div class="bg-stone-50 rounded-lg p-4 flex items-center shadow-sm">
          <img src="/icons/Walk.svg" :alt="$t('alt.traditional-bazaar')" class="w-7 h-7 mr-4 text-amber-600" />
          <p class="text-sm text-kaleici-800">
            {{ $t('traditionalBazaar.practicalInfoParagraph2') }}
          </p>
        </div>
      </div>
      <h3 class="text-2xl text-center font-semibold mt-0 mb-2">
        {{ $t('hadriansGate.h3Text8') }}
      </h3>
      <p>{{ $t('hadriansGate.pText32') }}</p>
      <div ref="rSection" class="grid grid-cols-2 md:grid-cols-4 gap-2">
        <div class="bg-stone-50 rounded-lg p-4 text-center shadow-sm aspect-square flex flex-col items-center justify-center">
          <img src="/icons/Cafe.svg" :alt="$t('alt.traditional-bazaar')" class="w-8 h-6 mx-auto text-amber-600 mb-2" />
          <p class="text-sm font-medium text-kaleici-800">
            {{ $t('hadriansGate.pText24') }}
          </p>
        </div>
        <div class="bg-stone-50 rounded-lg p-4 text-center shadow-sm aspect-square flex flex-col items-center justify-center">
          <img src="/icons/Gift.svg" :alt="$t('alt.traditional-bazaar')" class="w-7 h-7 mx-auto text-amber-600 mb-2" />
          <p class="text-sm font-medium text-kaleici-800">
            {{ $t('hadriansGate.pText25') }}
          </p>
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-between space-y-8 h-full">
      <h2 class="text-3xl font-sans text-center font-bold text-kaleici-800 mb-6">
        {{ $t('traditionalBazaar.practicalInfoTitle') }}
      </h2>
      <InteractiveImage
        src="/images/traditional-bazaar-in-Antalya-Kaleici-Old-Town-Turkey-5.jpg"
        class="rounded-xl"
        :alt="$t('alt.traditional-bazaar')"
      />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.09207152887!2d30.70276844458454!3d36.8881456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c3919ea7b73439%3A0xc335f2d00727417b!2sOld%20Bazaar!5e0!3m2!1sru!2str!4v1751207376227!5m2!1sru!2str"
        width=100%
        height="400"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</section>


      <!-- Tours Widget -->
      <section class="content-section">
        <div class="bg-white rounded-lg shadow-lg p-8">
          <h2 class="text-3xl font-bold text-center text-kaleici-800 mb-6">
            {{ $t('hadriansGate.h2Text8') }}
          </h2>
          <p class="text-lg mb-8">{{ $t('hadriansGate.pText30') }}</p>
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
import { ref, onMounted, computed } from 'vue'
import { useSeoMeta, useHead } from '#imports'
import { useI18n } from 'vue-i18n'
import { useLocalePath } from 'vue-i18n-routing'
import GetYourGuide from '~/components/GetYourGuide.vue'
import InteractiveImage from '~/components/InteractiveImage.vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const { t } = useI18n()
const localePath = useLocalePath()


const animatedSections = [
  ref(null), // ArchSection
  ref(null), // qSection
  ref(null), // wSection
  ref(null), // eSection
  ref(null), // rSection
  ref(null), // tSection
]
const ArchSection = animatedSections[0]
const qSection = animatedSections[1]
const wSection = animatedSections[2]
const eSection = animatedSections[3]
const rSection = animatedSections[4]
const tSection = animatedSections[5]

onMounted(() => {
  animatedSections.forEach(section => {
    gsap.from(section.value, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: section.value,
        start: 'top 80%',
        end: 'top 20%',
        toggleActions: 'play none none reverse',
      },
    })
  })
})

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

useSeoMeta({
  title: t('seo.traditional-bazaar.title'),
  description: t('seo.traditional-bazaar.description'),
  ogTitle: t('seo.traditional-bazaar.ogTitle'),
  ogDescription: t('seo.traditional-bazaar.ogDescription'),
  ogImage: t('seo.traditional-bazaar.ogImage'),
  twitterCard: "summary_large_image"
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://your-domain.com/traditional-bazaar' },
    { rel: 'icon', type: 'image/ico', href: 'icons/favicon.ico' }
  ],
  meta: [
    { name: 'robots', content: 'index, follow' }
  ]
})
</script>

