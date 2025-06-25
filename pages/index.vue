<template>
  <div>
    <!-- Hero Section -->
<section class="relative h-screen">
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

  <div class="absolute inset-0 flex items-center justify-center text-center z-10 px-4">
    <div class="max-w-4xl">
      <h1 class="text-4xl text-white md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-xl mb-4">
        {{ $t('hero.title') }}
      </h1>
      <p class="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed italic">
        {{ $t('hero.subtitle') }}
      </p>
      <div class="inline-flex flex-wrap justify-center gap-4">
        <button @click="scrollToDiscover"
          class="border border-amber-400 text-white hover:bg-amber-500/80 hover:text-white px-6 py-2 rounded-lg transition font-medium backdrop-blur-sm">
          {{ $t('hero.exploreBtn') }}
        </button>
        <NuxtLink
          :to="localePath('/tours')"
          class="bg-white/90 text-kaleici-800 hover:bg-white font-semibold px-6 py-2 rounded-lg transition shadow">
          {{ $t('hero.toursBtn') }}
        </NuxtLink>
      </div>
    </div>
  </div>
</section>


<!-- Discover Section -->
<section ref="discoverSection" class="py-16 bg-white">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl md:text-4xl font-bold text-kaleici-800 text-center mb-14 tracking-tight leading-snug">
      {{ $t('discover.title') }}
    </h2>

    <div class="grid md:grid-cols-2 gap-14 items-center">
      <!-- Text Block -->
      <div class="prose max-w-none text-kaleici-700 prose-lg leading-relaxed">
        <p class="mb-6 text-[1.125rem] [text-indent:2em]">
          {{ $t('discover.description.part1') }}
        </p>
        <p class="mb-8 text-[1.125rem] [text-indent:2em]">
          {{ $t('discover.description.part2') }}
        </p>

        <div class="flex flex-wrap gap-4 mt-4">
          <NuxtLink
            v-for="link in discoverLinks"
            :key="link.name"
            :to="localePath(`/${link.name}`)"
            class="text-kaleici-800 font-medium underline underline-offset-4 decoration-amber-400/70 hover:decoration-amber-500 transition-colors"
          >
            {{ $t(`discover.links.${link.translationKey}`) }}
          </NuxtLink>
        </div>
      </div>

      <!-- Image Block -->
      <div class="relative">
        <InteractiveImage
          src="/images/street-scenes-in-antalya-kaleici-old-town-turkey-1.jpg"
          alt="Discover the charm of Kaleiçi's historic streets"
          class="rounded-xl shadow-xl w-full h-[640px] object-cover object-center"
        />
        <div class="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg max-w-xs">
          <div class="gyg-widget-container">
            <GetYourGuide
              widgetType="activities"
              partner="kaleici_guide"
              q="kaleici antalya"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<!-- Cat Section -->
<section ref="CatSection" class="py-16 bg-[#f5ede1]">
  <div class="container mx-auto px-4">
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <!-- Фото -->
      <div class="relative">
        <InteractiveImage
          src="/images/traditional-bazaar-in-antalya-kaleici-old-town-turkey-2.jpg"
          alt="Discover the charm of Kaleiçi's historic streets"
          class="rounded-lg shadow-xl w-full h-[480px] object-cover object-center"
        />
      </div>
      <!-- Текст -->
      <div class="prose prose-lg max-w-none text-kaleici-800 leading-relaxed">
        <p class="mb-5 [text-indent:3em]">
          {{ $t('discover.description.part3') }}
        </p>
        <p class="mb-5 [text-indent:3em]">
          {{ $t('discover.description.part4') }}
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Nearby Attractions -->
<section class="content-section mb-18 py-10 bg-stone-50">
  <div class="container mx-auto px-4">
    <div class="bg-white/70 rounded-2xl p-10 shadow-xl">
      <h2 class="text-3xl font-bold text-kaleici-800 mb-4">
        {{ $t('nearbyAttractions.sectionTitle') }}
      </h2>
      <p class="text-lg text-kaleici-600 mb-8">
        {{ $t('nearbyAttractions.sectionDescription0') }}
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Old Harbor -->
        <NuxtLink :to="localePath('/old-harbor')" class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
          <div class="h-48 overflow-hidden">
            <InteractiveImage src="/images/old-harbor-in-antalya-kaleici-old-town-turkey-6.jpg" alt="Old Harbor in Antalya Kaleici, Turkey" class="w-full h-full object-cover"/>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-kaleici-800 mb-3">{{ $t('nearbyAttractions.oldHarbor.title') }}</h3>
            <p class="text-kaleici-600">{{ $t('nearbyAttractions.oldHarbor.description') }}</p>
          </div>
        </NuxtLink>

        <!-- Karaalioglu park -->
        <NuxtLink :to="localePath('/karaalioglu-park')" class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
          <div class="h-48 overflow-hidden">
            <InteractiveImage src="/images/karaalioglu-park-in-antalya-kaleici-old-town-turkey-1.jpg" alt="Karaalioglu Park in Antalya Kaleici, Turkey" class="w-full h-full object-cover"/>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-kaleici-800 mb-3">{{ $t('nearbyAttractions.karaaliogluPark.title') }}</h3>
            <p class="text-kaleici-600">{{ $t('nearbyAttractions.karaaliogluPark.description') }}</p>
          </div>
        </NuxtLink>

        <!-- Hadrians Gate -->
        <NuxtLink :to="localePath('/hadrians-gate')" class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
          <div class="h-48 overflow-hidden">
            <InteractiveImage src="/images/hadrian-gate-in-antalya-kaleici-old-town-turkey-1.jpg" alt="Hadrian's Gate in Antalya Kaleici, Turkey" class="w-full h-full object-cover"/>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-kaleici-800 mb-3">{{ $t('nearbyAttractions.hadriansGate.title') }}</h3>
            <p class="text-kaleici-600">{{ $t('nearbyAttractions.hadriansGate.description') }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</section>

<!-- Conclusion -->
<section class="py-16 bg-[#f5ede1]">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl md:text-4xl font-bold text-kaleici-800 mb-10">
      {{ $t('experiences.title') }}
    </h2>
    <div class="text-kaleici-800 leading-relaxed text-[1.075rem] space-y-5">
      <p class="[text-indent:2em]">
        {{ $t('experiences.part1') }}
      </p>
      <p class="[text-indent:2em]">
        {{ $t('experiences.part2') }}
      </p>
    </div>
  </div>
</section>

<!-- Where to Stay Section -->
<section ref="DoorSection" class="content-section">
  <section class="relative bg-white overflow-hidden" style="min-height: 600px;max-height: 600px;">
    <!-- BG IMAGE -->
    <InteractiveImage
      src="/images/text-decorations-in-antalya-kaleici-old-town-turkey-1.jpg"
      alt="Ottoman mansion door in Kaleiçi"
      class="absolute inset-0 w-full h-full object-cover object-[center_39.5%]  opacity-70 pointer-events-none select-none"
      aria-hidden="true"
      draggable="false"
    />
    <div class="relative z-10 container mx-auto px-4 flex flex-col md:flex-row-reverse items-center gap-8">
      <!-- Main (front) photo справа -->
      <div class="w-full md:w-1/3 lg:w-1/2 rounded-lg shadow-xl overflow-hidden flex justify-end -translate-x-8">
        <InteractiveImage
          src="/images/text-decorations-in-antalya-kaleici-old-town-turkey-1.jpg"
          alt="Ottoman mansion door in Kaleiçi"
          class="w-full h-[600px] max-h-[600px] w-[500px] object-cover object-[center_88%]"
        />
      </div>
      <!-- Text block слева -->
      <div class="w-full md:w-1/2 max-w-lg bg-white/90 rounded-xl shadow-lg p-8">
        <h2 class="text-2xl font-bold text-kaleici-800 mb-4">{{ $t('stay.title') }}</h2>
        <p class="text-kaleici-700 mb-3">{{ $t('stay.intro') }}</p>
        <p class="text-kaleici-700 mb-6">{{ $t('stay.details') }}</p>
        <NuxtLink
          :to="localePath('/attractions')"
          class="inline-block bg-kaleici-700 hover:bg-kaleici-800 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
        >
          {{ $t('stay.cta') }}
        </NuxtLink>
      </div>
    </div>
  </section>
</section>

<!-- Closing Section -->
<section class="bg-stone-100 py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl md:text-4xl font-bold text-kaleici-800 mb-10">
      {{ $t('experiences.title') }}
    </h2>
    <div class="text-kaleici-800 leading-relaxed text-[1.075rem] space-y-5">
      <p class="[text-indent:2em]">
        {{ $t('experiences.part1') }}
      </p>
      <p class="[text-indent:2em]">
        {{ $t('experiences.part2') }}
      </p>
    </div>
  </div>
</section>

<!-- FAQ Section -->
<section ref="FAGSection" class="content-section mb-18 py-10 bg-stone-100">
  <div class="container mx-auto px-4">
    <div class="grid md:grid-cols-2 gap-8">
      <div class="bg-[#f5ede1] p-8 rounded-xl shadow-lg">
        <h2 class="text-3xl font-bold text-kaleici-800 mb-6">{{ $t('faq.title') }}</h2>
        <div class="prose prose-lg">
          <template v-for="(faq, idx) in $t('faq.questions')" :key="idx">
            <h3 class="text-2xl text-kaleici-700 mt-8 mb-4">{{ faq.question }}</h3>
            <p class="text-l text-kaleici-700 mt-8 mb-4">{{ faq.answer }}</p>
          </template>
        </div>
      </div>
      <div class="relative h-full">
        <InteractiveImage 
          src="/images/other-in-antalya-kaleici-old-town-turkey-1.jpg"
          alt="Visiting Hadrian's Gate"
          class="w-full h-[800px] max-h-[1000px] w-[600px] object-cover rounded-xl"
        />
      </div>
    </div>
  </div>
</section>

<!-- Practical Information -->
<section class="content-section mb-18 py-10 bg-stone-100">
  <div class="container mx-auto px-4">
    <div class="grid md:grid-cols-2 gap-8 items-stretch">
      <div class="flex flex-col justify-between space-y-8 h-full">
        <h2 class="text-3xl font-bold text-kaleici-800 mb-6">{{ $t('visitingInfo.title') }}</h2>
        <InteractiveImage
          class="rounded-xl"
          src="/images/street-scenes-in-antalya-kaleici-old-town-turkey-4.jpg"
          alt="Visitor facilities near Hadrian's Gate"
        />
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d564.1336697113363!2d30.708982505630104!3d36.885038351263354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c39127a10a816b%3A0xb3281b73313e753a!2z0JLQvtGA0L7RgtCwINCQ0LTRgNC40LDQvdCw!5e0!3m2!1sru!2str!4v1749070044496!5m2!1sru!2str" width="100%" height="300" style="border: 0; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.05);" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div class="prose prose-lg h-full flex flex-col justify-between text-kaleici-700 leading-relaxed">
        <h3 class="text-2xl font-semibold mb-4">{{ $t('hadriansGate.h3Text6') }}</h3>
        <p class="[text-indent:2em]">{{ $t('visitingInfo.gettingThereText') }}</p>
        <h3 class="text-2xl font-semibold mt-8 mb-4">{{ $t('visitingInfo.gettingThereTitle') }}</h3>
        <div ref="IconMSection" class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <!-- Icons — смотри пути и названия SVG! -->
          <div class="bg-stone-50 rounded-lg p-4 text-center shadow-sm">
            <!-- Walking Icon -->
<svg xmlns="http://www.w3.org/2000/svg" class="mx-auto mb-2" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="orange" stroke-width="2">
  <path d="M13 4.01V4a1 1 0 1 1 2 0v.01A1 1 0 0 1 13 4zm2 6h-2l-2 6l-1-2l-2.5 1M7 21l1-3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16 13v-2a4 4 0 0 0-8 0v2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            <p class="text-sm text-left text-kaleici-800">{{ $t('gettingThereCards.walking') }}</p>
          </div>
          <div class="bg-stone-50 rounded-lg p-4 text-center shadow-sm">
            <!-- Tram Icon -->
<svg xmlns="http://www.w3.org/2000/svg" class="mx-auto mb-2" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="orange" stroke-width="1.5">
  <rect x="6" y="4" width="12" height="12" rx="3" stroke-width="1.5" stroke="orange" fill="none"/>
  <circle cx="8.5" cy="16.5" r="1.5" stroke-width="1.5" stroke="orange" fill="none"/>
  <circle cx="15.5" cy="16.5" r="1.5" stroke-width="1.5" stroke="orange" fill="none"/>
  <path d="M12 2v2m0 0h6m-6 0H6" stroke-width="1.5" stroke="orange"/>
</svg>

            <p class="text-sm text-left text-kaleici-800">{{ $t('gettingThereCards.tram') }}</p>
          </div>
          <div class="bg-stone-50 rounded-lg p-4 text-center shadow-sm">
            <!-- Bus Icon -->
<svg xmlns="http://www.w3.org/2000/svg" class="mx-auto mb-2" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="orange" stroke-width="2">
  <rect x="3" y="5" width="18" height="12" rx="3" stroke-width="2" stroke="orange" fill="none"/>
  <circle cx="7.5" cy="17.5" r="1.5" stroke-width="2" stroke="orange" fill="none"/>
  <circle cx="16.5" cy="17.5" r="1.5" stroke-width="2" stroke="orange" fill="none"/>
  <path d="M3 10h18M3 14h18" stroke-width="2" stroke="orange"/>
</svg>

            <p class="text-sm text-left text-kaleici-800">{{ $t('gettingThereCards.bus') }}</p>
          </div>
          <div class="bg-stone-50 rounded-lg p-4 text-center shadow-sm">
            <!-- Taxi Icon -->
<svg xmlns="http://www.w3.org/2000/svg" class="mx-auto mb-2" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="orange" stroke-width="2">
  <rect x="3" y="11" width="18" height="7" rx="2" stroke-width="2" stroke="orange" fill="none"/>
  <path d="M8 11V7a4 4 0 0 1 8 0v4" stroke-width="2" stroke="orange"/>
  <circle cx="7" cy="18" r="1" stroke-width="2" stroke="orange" fill="none"/>
  <circle cx="17" cy="18" r="1" stroke-width="2" stroke="orange" fill="none"/>
</svg>

            <p class="text-sm text-left text-kaleici-800">{{ $t('gettingThereCards.taxi') }}</p>
          </div>
        </div>
        <h3 class="text-2xl font-semibold mt-4 mb-4">{{ $t('visitingInfo.bestTimeTitle') }}</h3>
        <p class="[text-indent:2em]">{{ $t('visitingInfo.bestTimeText') }}</p>
        <div ref="IconSSection" class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="bg-stone-50 rounded-lg p-4 text-center shadow-sm aspect-square flex flex-col items-center justify-center">
            <!-- Cafe Icon -->
<svg xmlns="http://www.w3.org/2000/svg" class="mx-auto mb-2" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="orange" stroke-width="2">
  <path d="M3 19h18" stroke-linecap="round"/>
  <path d="M8 17v-6a4 4 0 1 1 8 0v6" stroke-linecap="round"/>
  <rect x="4" y="17" width="16" height="2" rx="1"/>
  <path d="M5 11h14" stroke-linecap="round"/>
</svg>

            <p class="text-sm font-medium text-kaleici-800">{{ $t('hadriansGate.pText24') }}</p>
          </div>
          <div class="bg-stone-50 rounded-lg p-4 text-center shadow-sm aspect-square flex flex-col items-center justify-center">
            <!-- Souvenir Icon -->
<svg xmlns="http://www.w3.org/2000/svg" class="mx-auto mb-2" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="orange" stroke-width="2">
  <rect x="3" y="8" width="18" height="13" rx="2"/>
  <path d="M3 8l9 6l9-6"/>
  <path d="M12 15V3"/>
  <path d="M8.5 7.5L12 3l3.5 4.5"/>
</svg>

            <p class="text-sm font-medium text-kaleici-800">{{ $t('hadriansGate.pText25') }}</p>
          </div>
          <div class="bg-stone-50 rounded-lg p-4 text-center shadow-sm aspect-square flex flex-col items-center justify-center">
            <!-- WC Icon -->
<svg xmlns="http://www.w3.org/2000/svg" class="mx-auto mb-2" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="orange" stroke-width="2">
  <circle cx="7" cy="8" r="2"/>
  <circle cx="17" cy="8" r="2"/>
  <rect x="5" y="12" width="4" height="7" rx="2"/>
  <rect x="15" y="12" width="4" height="7" rx="2"/>
</svg>

            <p class="text-sm font-medium text-kaleici-800">{{ $t('hadriansGate.pText26') }}</p>
          </div>
          <div class="bg-stone-50 rounded-lg p-4 text-center shadow-sm aspect-square flex flex-col items-center justify-center">
            <!-- Rest Icon -->
<svg xmlns="http://www.w3.org/2000/svg" class="mx-auto mb-2" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="orange" stroke-width="1.5">
  <rect x="2" y="14" width="20" height="3" rx="1"/>
  <rect x="5" y="9" width="14" height="5" rx="2"/>
  <rect x="3" y="18" width="2" height="2" rx="1"/>
  <rect x="19" y="18" width="2" height="2" rx="1"/>
</svg>

            <p class="text-sm font-medium text-kaleici-800">{{ $t('hadriansGate.pText27') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Tour Recommendation Section -->
<section class="bg-stone-200/40 py-16">
  <div class="container mx-auto px-6 text-center max-w-4xl">
    <h2 class="text-3xl md:text-4xl font-bold text-kaleici-800 mb-6">
      {{ $t('tours.title') }}
    </h2>
    <p class="text-lg md:text-xl text-kaleici-700 leading-relaxed mb-4">
      {{ $t('tours.subtitle') }}
    </p>
    <p class="text-base text-kaleici-600 mb-8">
      {{ $t('tours.description') }}
    </p>
    <NuxtLink
      :to="localePath('/tours')"
      class="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-300"
    >
      {{ $t('tours.button') }}
    </NuxtLink>
  </div>
</section>



    <!-- Features Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            {{ $t('features.title') }}
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            {{ $t('features.subtitle') }}
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div class="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ $t('features.discover.title') }}</h3>
            <p class="text-gray-600">{{ $t('features.discover.description') }}</p>
          </div>
          
          <!-- Feature 2 -->
          <div class="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ $t('features.information.title') }}</h3>
            <p class="text-gray-600">{{ $t('features.information.description') }}</p>
          </div>
          
          <!-- Feature 3 -->
          <div class="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ $t('features.favorites.title') }}</h3>
            <p class="text-gray-600">{{ $t('features.favorites.description') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gray-50 py-16">
      <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">
          {{ $t('cta.title') }}
        </h2>
        <p class="text-lg text-gray-600 mb-8">
          {{ $t('cta.subtitle') }}
        </p>
        <NuxtLink 
          :to="localePath('/attractions')" 
          class="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
        >
          {{ $t('cta.button') }}
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
// Nuxt 3 — Локализация и роутинг
const { t } = useI18n()
const localePath = useLocalePath()

// Nuxt 3 — SEO мета-теги
definePageMeta({
  title: 'Home - Attractions Hub',
  description: 'Welcome to Attractions Hub - Your gateway to discovering amazing attractions worldwide'
})

useHead({
  title: () => `${t('navigation.home')} - ${t('site.title')}`,
  meta: [
    {
      name: 'description',
      content: () => t('site.description')
    }
  ]
})

// ---- Старый функционал (swiper, gsap, hero) ----
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// Если нужны компоненты — раскомментируй:
// import GetYourGuide from '../components/GetYourGuide.vue'
// import InteractiveImage from '../components/InteractiveImage.vue'

gsap.registerPlugin(ScrollTrigger)

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
    url: '/images/viewpoints-in-Antalya-Kaleici-Old-Town-Turkey-1.jpg',
    altKey: 'images.viewpoints_in_antalya_kaleici_old_town_turkey_1jpg'
  },
  {
    url: '/images/old-harbor-in-Antalya-Kaleici-Old-Town-Turkey-1.jpg',
    altKey: 'images.old_harbor_in_antalya_kaleici_old_town_turkey_1jpg'
  },
  {
    url: '/images/hadrians-gate-in-Antalya-Kaleici-Old-Town-Turkey-1.jpg',
    altKey: 'images.hadrians_gate_in_antalya_kaleici_old_town_turkey_1jpg'
  }
]

const discoverLinks = [
  { name: 'attractions', translationKey: 'attractions' },
  { name: 'travel-tips', translationKey: 'tips' },
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
        toggleActions: 'play none none reverse'
      }
    })
  })
})
</script>
