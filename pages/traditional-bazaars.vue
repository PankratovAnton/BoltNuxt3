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
              src="/images/traditional-bazaar-in-antalya-kaleici-old-town-turkey-6.jpg"
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
              src="/images/traditional-bazaar-in-antalya-kaleici-old-town-turkey-3.jpg"
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
              <img src="/images/old-harbor-in-antalya-kaleici-old-town-turkey-1.jpg" :alt="$t('alt.traditional-bazaar')" class="w-full h-full object-cover" />
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
      <section class="content-section mb-8">
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

<div class="container mx-auto px-4 py-12">

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
              src="/images/traditional-bazaar-in-antalya-kaleici-old-town-turkey-1.jpg"
              :alt="$t('alt.traditional-bazaar')"
              class="w-full object-cover h-[600px] rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>


      <!-- Tours Widget -->
      <section class="content-section mb-8 py-10 ">
  <div class="container mx-auto px-4">
        <div class="bg-white rounded-lg shadow-lg p-8">
          <h2 class="text-3xl font-bold text-center text-kaleici-800 mb-6">
            {{ $t('home.toursHome.title') }}
          </h2>
          <p class="text-center text-lg mb-8">{{ $t('home.toursHome.subtitle') }}</p>
          <!-- Add Widgets -->
          <div class="gyg-widget-container">
            <div class="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
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
  </div>
      </section>


      <!-- Shopping Tips -->
      <section class="content-section mb-16">
        <div class="grid md:grid-cols-2 gap-6 items-stretch">
          <!-- Image block -->
          <div class="relative h-full">
            <InteractiveImage
              src="/images/traditional-bazaar-in-antalya-kaleici-old-town-turkey-4.jpg"
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
        src="/images/traditional-bazaar-in-antalya-kaleici-old-town-turkey-5.jpg"
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
      <section class="content-section mb-8 py-10 ">
  <div class="container mx-auto px-4">
        <div class="bg-white rounded-lg shadow-lg p-8">
          <h2 class="text-3xl font-bold text-center text-kaleici-800 mb-6">
            {{ $t('home.toursHome.title') }}
          </h2>
          <p class="text-center text-lg mb-8">{{ $t('home.toursHome.subtitle') }}</p>
          <!-- Add Widgets -->
          <div class="gyg-widget-container">
            <div class="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
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
  </div>
      </section>

      
    </div>
  </article>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useSeoMeta, useHead } from '#imports'
import { useI18n } from 'vue-i18n'
import { useLocalePath } from 'vue-i18n-routing'
import InteractiveImage from '~/components/InteractiveImage.vue'
// gsap импортировать только в onMounted

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
          toggleActions: 'play none none reverse',
        },
      })
    }
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
    { rel: 'canonical', href: 'https://exploreantalyakaleici.com/en/traditional-bazaars' },
    { rel: 'alternate', hreflang: 'en', href: 'https://exploreantalyakaleici.com/traditional-bazaars' },
    { rel: 'alternate', hreflang: 'ru', href: 'https://exploreantalyakaleici.com/ru/traditional-bazaars' },
    { rel: 'alternate', hreflang: 'tr', href: 'https://exploreantalyakaleici.com/tr/traditional-bazaars' },
    { rel: 'alternate', hreflang: 'de', href: 'https://exploreantalyakaleici.com/de/traditional-bazaars' },
    { rel: 'alternate', hreflang: 'ua', href: 'https://exploreantalyakaleici.com/ua/traditional-bazaars' }, // исправлено!
    { rel: 'alternate', hreflang: 'es', href: 'https://exploreantalyakaleici.com/es/traditional-bazaars' },
    { rel: 'alternate', hreflang: 'pl', href: 'https://exploreantalyakaleici.com/pl/traditional-bazaars' },
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
        "name": "Traditional Bazaars",
        "description": "Stroll through lively markets where local artisans sell handcrafted goods, spices, textiles, and souvenirs.",
        "image": "/images/traditional-bazaar-handmade-carpets-souvenirs-in-antalya-kaleici-old-town-turkey.jpg",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Antalya",
          "addressCountry": "TR"
        },
        "url": "https://exploreantalyakaleici.com/en/traditional-bazaars",
        "inLanguage": ["en", "ru", "tr", "de", "uk", "es", "pl"]
      })
    }
  ]
})

</script>
