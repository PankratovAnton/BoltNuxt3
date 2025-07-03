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
      <h1 class=" font-sans text-4xl text-white md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-xl mb-4">
        {{ $t('home.hero.title') }}
      </h1>
      <p class="font-sans text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed italic">
        {{ $t('home.hero.subtitle') }}
      </p>
      <div class="inline-flex flex-wrap justify-center gap-4">
        <button @click="scrollToDiscover"
          class=" font-sans border border-amber-400 text-white hover:bg-amber-500/80 hover:text-white px-6 py-2 rounded-lg transition font-medium backdrop-blur-sm">
          {{ $t('home.hero.exploreBtn') }}
        </button>
        <NuxtLink
          :to="localePath('/tours')"
          class="font-sans bg-white/90 text-kaleici-800 hover:bg-white font-semibold px-6 py-2 rounded-lg transition shadow">
          {{ $t('home.hero.toursBtn') }}
        </NuxtLink>
      </div>
    </div>
  </div>
</section>


<!-- Discover Section -->
<section ref="discoverSection" class="py-16 ">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl md:text-4xl font-bold text-kaleici-800 text-center mb-14 tracking-tight leading-snug">
      {{ $t('home.discover.title') }}
    </h2>

    <div class="grid md:grid-cols-2 gap-14 items-center">
      <!-- Text Block -->
      <div class="prose max-w-none text-kaleici-700 prose-lg leading-relaxed">
        <p class="mb-6 text-[1.125rem] [text-indent:2em]">
          {{ $t('home.discover.description.part1') }}
        </p>
        <p class="mb-8 text-[1.125rem] [text-indent:2em]">
          {{ $t('home.discover.description.part2') }}
        </p>

        <div class="flex flex-wrap gap-4 mt-4">
          <NuxtLink
            v-for="link in discoverLinks"
            :key="link.name"
            :to="localePath(`/${link.name}`)"
            class="text-kaleici-800 font-sans font-medium underline underline-offset-4 decoration-amber-400/70 hover:decoration-amber-500 transition-colors"
          >
            {{ $t(`home.discover.links.${link.translationKey}`) }}
          </NuxtLink>
        </div>
      </div>

      <!-- Image Block -->
      <div class="relative">
        <InteractiveImage
          src="/images/street-scenes-in-antalya-kaleici-old-town-turkey-1.jpg"
          :alt="$t('alt.hadrian-gate')"
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
<section ref="CatSection" class=" container mx-auto mb-16 bg-[#f5ede1] p-8 rounded-xl shadow-lg">
  <div class="content-section max-w-none  px-4">
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <!-- Фото -->
      <div class="relative">
        <img
          src="/images/traditional-bazaar-in-antalya-kaleici-old-town-turkey-2.jpg"
          :alt="$t('alt.hadrian-gate')"
          class="rounded-lg shadow-xl w-full h-[480px] object-cover sm:object-center"
          style="object-position: 70% center;"
        />
      </div>
      <!-- Текст -->
      <div class="prose prose-lg max-w-none text-kaleici-800 leading-relaxed">
        <p class="mb-5 [text-indent:3em]">
          {{ $t('home.discover.description.part3') }}
        </p>
        <p class="mb-5 [text-indent:3em]">
          {{ $t('home.discover.description.part4') }}
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Nearby Attractions -->
<section class="content-section mb-0 py-10 ">
  <div class="container mx-auto px-4">
    <div class="bg-[#fdedd8] rounded-2xl p-10 shadow-xl">
      <h2 class="text-3xl font-sans font-bold text-kaleici-800 text-center mb-4">
        {{ $t('nearbyAttractions.sectionTitle') }}
      </h2>
      <p class="text-lg font-sans text-kaleici-600 mb-8">
        {{ $t('nearbyAttractions.sectionDescription0') }}
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Old Harbor -->
        <NuxtLink :to="localePath('/old-harbor')" class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
          <div class="h-48 overflow-hidden">
            <InteractiveImage src="/images/old-harbor-in-antalya-kaleici-old-town-turkey-6.jpg" :alt="$t('alt.hadrian-gate')" class="w-full h-full object-cover"/>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-center text-kaleici-800 mb-3">{{ $t('nearbyAttractions.oldHarbor.title') }}</h3>
            <p class="text-kaleici-600">{{ $t('nearbyAttractions.oldHarbor.description') }}</p>
          </div>
        </NuxtLink>

        <!-- Karaalioglu park -->
        <NuxtLink :to="localePath('/karaalioglu-park')" class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
          <div class="h-48 overflow-hidden">
            <InteractiveImage src="/images/karaalioglu-park-in-antalya-kaleici-old-town-turkey-1.jpg" :alt="$t('alt.hadrian-gate')" class="w-full h-full object-cover"/>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-center text-kaleici-800 mb-3">{{ $t('nearbyAttractions.karaaliogluPark.title') }}</h3>
            <p class="text-kaleici-600">{{ $t('nearbyAttractions.karaaliogluPark.description') }}</p>
          </div>
        </NuxtLink>

        <!-- Hadrians Gate -->
        <NuxtLink :to="localePath('/hadrians-gate')" class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
          <div class="h-48 overflow-hidden">
            <InteractiveImage src="/images/hadrian-gate-in-antalya-kaleici-old-town-turkey-1.jpg" :alt="$t('alt.hadrian-gate')" class="w-full h-full object-cover"/>
          </div>
          <div class="p-6">
            <h3 class="text-xl text-center font-semibold text-kaleici-800 mb-3">{{ $t('nearbyAttractions.hadriansGate.title') }}</h3>
            <p class="text-kaleici-600">{{ $t('nearbyAttractions.hadriansGate.description') }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</section>

<!-- Conclusion -->
<section class="py-10 ">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl md:text-4xl text-center font-bold text-kaleici-800 mb-10">
      {{ $t('home.experiences.title') }}
    </h2>
    <div class="text-kaleici-800 leading-relaxed text-[1.075rem] space-y-5">
      <p class="[text-indent:2em]">
        {{ $t('home.experiences.part1') }}
      </p>
      <p class="[text-indent:2em]">
        {{ $t('home.experiences.part2') }}
      </p>
    </div>
  </div>
</section>

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



<!-- Closing Section -->
<section class="bg-stone-100 py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl md:text-4xl font-bold text-center text-kaleici-800 mb-10">
      {{ $t('home.closing.title') }}
    </h2>
    <div class="text-kaleici-800 leading-relaxed text-[1.075rem] space-y-5">
      <p class="[text-indent:2em]">
        {{ $t('home.closing.paragraph1') }}
      </p>
      <p class="[text-indent:2em]">
        {{ $t('home.closing.paragraph2') }}
      </p>
    </div>

    <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <InteractiveImage src="/images/street-scenes-in-antalya-kaleici-old-town-turkey-3.jpg" :alt="$t('alt.hadrian-gate')" class="w-full h-80 object-cover rounded-2xl shadow-md" />
      </div>
      <div>
        <InteractiveImage src="/images/text-decorations-in-antalya-kaleici-old-town-turkey-2.jpg" :alt="$t('alt.hadrian-gate')" class="w-full h-80 object-cover rounded-2xl shadow-md" />
      </div>
      <div>
        <InteractiveImage src="/images/street-scenes-in-antalya-kaleici-old-town-turkey-5.jpg" :alt="$t('alt.hadrian-gate')" class="w-full h-80 object-cover rounded-2xl shadow-md" />
      </div>
    </div>
    <!-- конец блока с фото -->
  </div>

</section>

<!-- Tours Widget -->
      <section class="content-section mb-0 py-5 bg-stone-100">
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

<!-- FAQ Section -->
<section class="content-section mb-18 py-10 bg-stone-100">
  <div class="container mx-auto px-4">
    <div  class="grid md:grid-cols-2 gap-8" >
      <div ref="FAGSection" class="bg-[#f5ede1] p-8 rounded-xl shadow-lg">
        <h2 class="text-3xl font-bold text-center font-sans text-kaleici-800 mb-6">{{ $t('home.faq.title') }}</h2>
        <div class="prose prose-lg">
      
      <h3 class="text-2xl font-sans text-kaleici-700 mt-8 mb-4">{{ $t('home.faq.questions[0].question') }}</h3>
      <p class="text-l font-sans text-kaleici-700 mt-8 mb-4">{{ $t('home.faq.questions[0].answer') }}</p>

      <h3 class="text-2xl font-sans text-kaleici-700 mt-8 mb-4">{{ $t('home.faq.questions[1].question') }}</h3>
      <p class="text-l font-sans text-kaleici-700 mt-8 mb-4">{{ $t('home.faq.questions[1].answer') }}</p>

      <h3 class="text-2xl font-sans text-kaleici-700 mt-8 mb-4">{{ $t('home.faq.questions[2].question') }}</h3>
      <p class="text-l font-sans text-kaleici-700 mt-8 mb-4">{{ $t('home.faq.questions[2].answer') }}</p>

    </div>
      </div>
      <div class="relative h-full">
        <InteractiveImage 
          src="/images/other-in-antalya-kaleici-old-town-turkey-1.jpg"
          :alt="$t('alt.hadrian-gate')"
          class=" w-full max-w-[800px] h-[900px] object-cover transition-all duration-300 ease-out will-change-transform rounded-xl shadow-lg"
        />
      </div>
    </div>
  </div>
</section>

<!-- Practical Information --> 
<section class="content-section mb-0 py-10 bg-stone-100">
  <div class="container mx-auto px-4">
    <div class="grid md:grid-cols-2 gap-8 items-stretch">
      <div class="flex flex-col justify-between space-y-8 h-full">
        <h2 class="text-3xl font-sans font-bold text-kaleici-800 ">{{ $t('home.visitingInfo.title') }}</h2>
        <InteractiveImage
          class="rounded-xl"
          src="/images/street-scenes-in-antalya-kaleici-old-town-turkey-4.jpg"
          :alt="$t('alt.hadrian-gate')"
        />
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.7127613660177!2d30.702752776113237!3d36.88327847210452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c39009be0e3b47%3A0x3cb5088367f69e0e!2sKalei%C3%A7i%2C%20Antalya%2C%20Turkey!5e0!3m2!1sen!2sus!4v1708893144902!5m2!1sen!2sus" width="100%" height="400" style="border: 0; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.05);" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div class="prose prose-lg h-full flex flex-col justify-between text-kaleici-700 leading-relaxed">
        <h3 class="text-2xl font-sans text-center font-semibold mb-4">{{ $t('hadriansGate.h3Text6') }}</h3>
        <p class="font-sans [text-indent:2em]">{{ $t('home.visitingInfo.gettingThereText') }}</p>
        <h3 class="text-2xl font-sans  text-center font-semibold mt-8 mb-4">{{ $t('home.visitingInfo.gettingThereTitle') }}</h3>
        <div ref="IconMSection" class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <!-- Icons — смотри пути и названия SVG! -->
          <div class="bg-stone-50 rounded-lg p-4 text-center shadow-sm">
            <img src="/icons/Walk.svg" :alt="$t('alt.hadrian-gate')" class="w-10 h-10 mx-auto text-amber-600 mb-2" />
            <p class="text-sm text-left font-sans text-kaleici-800">{{ $t('home.gettingThereCards.walking') }}</p>
          </div>
          <div class="bg-stone-50 rounded-lg p-4 text-center shadow-sm">
            <img src="/icons/Tram.svg" :alt="$t('alt.hadrian-gate')" class="w-10 h-10 mx-auto text-amber-600 mb-2" />
            <p class="text-sm text-left font-sans text-kaleici-800">{{ $t('home.gettingThereCards.tram') }}</p>
          </div>
          <div class="bg-stone-50 rounded-lg p-4 text-center shadow-sm">
            <img src="/icons/Bus.svg" :alt="$t('alt.hadrian-gate')" class="w-10 h-10 mx-auto text-amber-600 mb-2" />
            <p class="text-sm text-left font-sans text-kaleici-800">{{ $t('home.gettingThereCards.bus') }}</p>
          </div>
          <div class="bg-stone-50 rounded-lg p-4 text-center shadow-sm">
            <img src="/icons/Taxi.svg" :alt="$t('alt.hadrian-gate')" class="w-10 h-10 mx-auto text-amber-600 mb-2" />
            <p class="text-sm text-left font-sans text-kaleici-800">{{ $t('home.gettingThereCards.taxi') }}</p>
          </div>
        </div>
        <h3 class="text-2xl font-sans text-center font-semibold mt-4 mb-4">{{ $t('home.visitingInfo.bestTimeTitle') }}</h3>
        <p class="[text-indent:2em] font-sans">{{ $t('home.visitingInfo.bestTimeText') }}</p>
        <div ref="IconSSection" class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="bg-stone-50 rounded-lg p-4 text-center shadow-sm aspect-square flex flex-col items-center justify-center">
            <img src="/icons/Cafe.svg" :alt="$t('alt.hadrian-gate')" class="w-10 h-10 mx-auto text-amber-600 mb-2" />
            <p class="text-sm font-sans font-medium text-kaleici-800">{{ $t('hadriansGate.pText24') }}</p>
          </div>
          <div class="bg-stone-50 rounded-lg p-4 text-center shadow-sm aspect-square flex flex-col items-center justify-center">
            <img src="/icons/Gift.svg" :alt="$t('alt.hadrian-gate')" class="w-10 h-10 mx-auto text-amber-600 mb-2" />
            <p class="text-sm font-sans font-medium text-kaleici-800">{{ $t('hadriansGate.pText25') }}</p>
          </div>
          <div class="bg-stone-50 rounded-lg p-4 text-center shadow-sm aspect-square flex flex-col items-center justify-center">
            <img src="/icons/WC.svg" :alt="$t('alt.hadrian-gate')" class="w-10 h-10 mx-auto text-amber-600 mb-2" />
            <p class="text-sm font-sans font-medium text-kaleici-800">{{ $t('hadriansGate.pText26') }}</p>
          </div>
          <div class="bg-stone-50 rounded-lg p-4 text-center shadow-sm aspect-square flex flex-col items-center justify-center">
            <img src="/icons/Nature.svg" :alt="$t('alt.hadrian-gate')" class="w-10 h-10 mx-auto text-amber-600 mb-2" />
            <p class="text-sm font-sans font-medium text-kaleici-800">{{ $t('hadriansGate.pText27') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Tours Widget -->
      <section class="content-section mb-18 py-10 bg-stone-100">
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
</template>

<script setup>
// Nuxt 3 — Локализация и роутинг
const { t } = useI18n()
const localePath = useLocalePath()

import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import InteractiveImage from '~/components/InteractiveImage.vue'

// --- GSAP: не импортируй здесь! ---
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// gsap.registerPlugin(ScrollTrigger)

// Анимационные секции
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
    url: '/images/viewpoints-in-antalya-kaleici-old-town-turkey-1.jpg',
    altKey: 'alt.old-harbor'
  },
  {
    url: '/images/old-harbor-in-antalya-kaleici-old-town-turkey-1.jpg',
    altKey: 'alt.old-harbor'
  },
  {
    url: '/images/hadrians-gate-in-antalya-kaleici-old-town-turkey-1.jpg',
    altKey: 'alt.old-harbor'
  }
]

const discoverLinks = [
  { name: 'attractions', translationKey: 'attractions' },
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

// --- GSAP анимация только на клиенте ---
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

// SEO
useSeoMeta({
  title: t('seo.home.title'),
  description: t('seo.home.description'),
  ogTitle: t('seo.home.ogTitle'),
  ogDescription: t('seo.home.ogDescription'),
  ogImage: t('seo.home.ogImage'),
  twitterCard: 'summary_large_image'
})

// Hreflang + canonical + favicon
useHead({
  link: [
    { rel: 'canonical', href: 'https://https://exploreantalyakaleici/en' },
    { rel: 'alternate', hreflang: 'en', href: 'https://https://exploreantalyakaleici/en' },
    { rel: 'alternate', hreflang: 'ru', href: 'https://https://exploreantalyakaleici/ru/' },
    { rel: 'alternate', hreflang: 'tr', href: 'https://https://exploreantalyakaleici/tr/' },
    { rel: 'alternate', hreflang: 'de', href: 'https://https://exploreantalyakaleici/de/' },
    { rel: 'alternate', hreflang: 'ua', href: 'https://https://exploreantalyakaleici/ua/' },
    { rel: 'alternate', hreflang: 'es', href: 'https://https://exploreantalyakaleici/es/' },
    { rel: 'alternate', hreflang: 'pl', href: 'https://https://exploreantalyakaleici/pl/' },
    { rel: 'icon', type: 'image/ico', href: '/icons/favicon.ico' }
  ],
  meta: [
    { name: 'robots', content: 'index, follow' }
  ]
})

// Schema.org
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Kaleiçi Guide",
        "url": "https://https://exploreantalyakaleici/en",
        "description": "Discover Antalya's Kaleiçi Old Town — attractions, history, travel tips, and the best places to visit in the heart of Antalya.",
        "image": "viewpoints-in-antalya-kaleici-old-town-turkey-1.jpg",
        "inLanguage": ["en", "ru", "tr", "de", "uk", "es", "pl"]
      })
    }
  ]
})

</script>
