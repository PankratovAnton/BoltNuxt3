<template>
  <article class="attraction-page">
    <!-- Hero Section -->
    <section class="hero relative h-[60vh] min-h-[400px] overflow-hidden">
      <img src="/images/hidirlik-tower-seaside-perspective-olive-tree-in-antalya-kaleici-old-town-turkey.jpg" :alt="$t('alt.hidirlik-tower')" class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      <div class="absolute bottom-0 left-0 right-0 p-8 text-white">
        <div class="container mx-auto">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-xl mb-4">
            {{ $t('hidirlikTower.title') }}
          </h1>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="container mx-auto px-4 py-12">
      <!-- Introduction -->
      <section class="prose prose-lg max-w-none mb-16">
        <p class="text-xl leading-relaxed indent-6 text-kaleici-700 italic">
          {{ $t('hidirlikTower.introduction') }}
        </p>
      </section>

      <!-- History Section -->
      <section class="content-section mb-16">
        <div class="mx-auto">
          <div>
            <InteractiveImage
              src="/images/hidirlik-tower-historical-blackwhite-photo-in-antalya-kaleici-old-town-turkey.jpg"
              :alt="$t('alt.hidirlik-tower')"
              class="float-left mr-8 mb-4 rounded-lg shadow-lg max-w-[640px] min-w-[420px] w-full md:w-4/5"
            />
          </div>
          <div>
            <h2 class="text-3xl font-bold text-kaleici-800 mb-6">
              {{ $t('hidirlikTower.history_title') }}
            </h2>
            <div class="space-y-4 text-base leading-relaxed text-gray-700">
              <p class="space-y-4 indent-6 font-medium text-kaleici-700">
                {{ $t('hidirlikTower.history1') }}
              </p>
              <p class="font-medium text-kaleici-700">
                {{ $t('hidirlikTower.history2') }}
              </p>
              <p class="font-medium text-kaleici-700">
                {{ $t('hidirlikTower.history3') }}
              </p>
              <p class="font-medium text-kaleici-700">
                {{ $t('hidirlikTower.history4') }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Architectural Features -->
      <section ref="ArchSection" class="content-section mb-16 bg-[#f5ede1] p-8 rounded-xl shadow-lg">
        <h2 class="text-3xl font-bold text-kaleici-800 mb-6 tracking-tight leading-snug">
          {{ $t('hidirlikTower.modern_title') }}
        </h2>
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div class="prose prose-lg max-w-none text-kaleici-700">
            <p class="indent-6 mb-4">{{ $t('hidirlikTower.modern1') }}</p>
            <p class="mb-4">{{ $t('hidirlikTower.modern2') }}</p>
            <p class="mb-4">{{ $t('hidirlikTower.modern3') }}</p>
            <p class="">{{ $t('hidirlikTower.modern4') }}</p>
          </div>
          <div
            class="interactive-image-container overflow-hidden rounded-lg shadow-lg"
            @mousemove="handleMouseMove"
            @mouseleave="handleMouseLeave"
          >
            <img
              ref="interactiveImage"
              src="/images/hidirlik-tower-cliff-panorama-sea-in-antalya-kaleici-old-town-turkey.jpg"
              :alt="$t('alt.hidirlik-tower')"
              class="w-full max-w-[800px] h-[600px] object-cover transition-all duration-300 ease-out will-change-transform"
              :style="imageTransform"
            />
          </div>
        </div>
      </section>

      <!-- Nearby Attractions -->
      <section class="content-section mb-16 bg-[#fdedd8] p-8 rounded-xl shadow-lg">
        <h2 class="text-3xl font-bold font-sans text-center text-kaleici-800 mb-4 tracking-tight leading-snug">
          {{ $t('nearbyAttractions.sectionTitle') }}
        </h2>
        <p class="text-lg font-sans text-center text-kaleici-700 mb-8 leading-relaxed">
          {{ $t('nearbyAttractions.sectionDescription3') }}
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Karalioglu park -->
          <NuxtLink :to="localePath('/karaalioglu-park')" class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
            <div class="h-48 overflow-hidden">
              <img src="/images/karaalioglu-park-in-antalya-kaleici-old-town-turkey-1.jpg" :alt="$t('alt.hidirlik-tower')" class="w-full h-full object-cover">
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-center text-kaleici-800 mb-3">{{ $t('nearbyAttractions.karaaliogluPark.title') }}</h3>
              <p class="text-kaleici-600">{{ $t('nearbyAttractions.karaaliogluPark.description') }}</p>
            </div>
          </NuxtLink>
          <!-- Authentic Streets -->
          <NuxtLink :to="localePath('/authentic-streets')" class="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
            <div class="h-48 overflow-hidden">
              <img src="/images/street-scenes-in-antalya-kaleici-old-town-turkey-1.jpg" :alt="$t('alt.hidirlik-tower')" class="w-full h-full object-cover" />
            </div>
            <div class="p-5">
              <h3 class="text-xl text-center font-semibold text-kaleici-800 mb-2">
                {{ $t('hadriansGate.h3Text2') }}
              </h3>
              <p class="text-kaleici-700 text-base leading-relaxed">
                {{ $t('hadriansGate.pText11') }}
              </p>
            </div>
          </NuxtLink>
          <!-- Hadrians Gate -->
          <NuxtLink :to="localePath('/hadrians-gate')" class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
            <div class="h-48 overflow-hidden">
              <img src="/images/hadrian-gate-in-antalya-kaleici-old-town-turkey-1.jpg" :alt="$t('alt.hidirlik-tower')" class="w-full h-full object-cover">
            </div>
            <div class="p-6">
              <h3 class="text-xl text-center font-semibold text-kaleici-800 mb-3">{{ $t('nearbyAttractions.hadriansGate.title') }}</h3>
              <p class="text-kaleici-600">{{ $t('nearbyAttractions.hadriansGate.description') }}</p>
            </div>
          </NuxtLink>
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

      <!-- FAQ Section -->
      <section ref="FAQSection" class="content-section py-10">
        <div class="container mx-auto px-4">
          <div class="grid md:grid-cols-2 gap-8">
            <div class="relative h-full">
              <InteractiveImage 
                src="/images/hidirlik-tower-entrance-roman-architecture-in-antalya-kaleici-old-town-turkey.jpg"
                :alt="$t('alt.hidirlik-tower')"
                class=" w-full max-w-[800px] h-[850px] object-cover transition-all duration-300 ease-out will-change-transform rounded-xl shadow-lg"
              />
            </div>
            <div class="bg-[#f5ede1] p-8 rounded-xl shadow-lg">
              <h2 class="text-3xl font-bold text-kaleici-800 mb-6">{{ $t('hidirlikTower.facts_title') }}</h2>
              <div class="prose prose-lg">
                <h3 class="text-2xl text-kaleici-700 mt-8 mb-4">{{ $t('hidirlikTower.facts[0].fact_title') }}</h3>
                <p class="text-l text-kaleici-700 mt-8 mb-4">{{ $t('hidirlikTower.facts[0].fact_text') }}</p>
                <h3 class="text-2xl text-kaleici-700 mt-8 mb-4">{{ $t('hidirlikTower.facts[1].fact_title') }}</h3>
                <p class="text-l text-kaleici-700 mt-8 mb-4">{{ $t('hidirlikTower.facts[1].fact_text') }}</p>
                <h3 class="text-2xl text-kaleici-700 mt-8 mb-4">{{ $t('hidirlikTower.facts[2].fact_title') }}</h3>
                <p class="text-l text-kaleici-700 mt-8 mb-4">{{ $t('hidirlikTower.facts[2].fact_text') }}</p>
              </div>
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


      <!-- Conclusion -->
      <section class="content-section mb-16">
        <h2 class="text-3xl text-center font-bold text-kaleici-800 mb-4 tracking-tight leading-snug">
          {{ $t('hidirlikTower.magic_title') }}
        </h2>
        <div class="prose prose-lg max-w-none text-kaleici-700">
          <p class="indent-6 mb-4">{{ $t('hidirlikTower.magic_text') }}</p>
        </div>
      </section>

      <!-- Visiting Today Section -->
      <section class="content-section mb-16">
        <div class="grid md:grid-cols-2 gap-6 items-stretch">
          <!-- Text block -->
          <div
            ref="wSection"
            class="bg-[#f5ede1] p-6 rounded-xl font-sans shadow-lg flex flex-col justify-between"
          >
            <h2 class="text-2xl text-center font-semibold text-kaleici-800 mb-4">
              {{ $t('hidirlikTower.tips_title') }}
            </h2>
            <div class="prose prose-base text-kaleici-700 leading-relaxed">
              <h3 class="text-xl font-semibold mt-6 mb-2">
                {{ $t('hidirlikTower.bestTime_title') }}
              </h3>
            
                <p>{{ $t('hidirlikTower.bestTime_text') }}</p>
              
              <h3 class="text-xl font-semibold mt-6 mb-2">
                {{ $t('hidirlikTower.photographyTips_title') }}
              </h3>
              
                <p>{{ $t('hidirlikTower.photographyTips_text') }}</p>
              
              <h3 class="text-xl font-semibold mt-6 mb-2">
                {{ $t('hidirlikTower.refreshments_title') }}
              </h3>
              
                <p>{{ $t('hidirlikTower.refreshments_text') }}</p>
              
            </div>
          </div>
          <!-- Image block -->
          <div class="relative h-full">
            <InteractiveImage
              src="/images/hidirlik-tower-closeup-ancient-stone-structure-in-antalya-kaleici-old-town-turkey.jpg"
              :alt="$t('alt.hidirlik-tower')"
              class="w-full h-full object-cover max-h-[700px] rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      <!-- Tour Options -->
      <section class="content-section mb-16">
        <div class="grid md:grid-cols-2 gap-6 items-stretch">
          <div>
            <InteractiveImage
              src="/images/hidirlik-tower-in-antalya-kaleici-old-town-turkey-1.jpg"
              :alt="$t('alt.hidirlik-tower')"
              class="rounded-lg object-cover shadow-lg w-full"
            />
          </div>
          <div class="font-sans">
            <h2 class="text-3xl text-center font-bold text-kaleici-800 mb-6">
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
    <!-- Text block -->
    <div class="prose prose-lg font-sans h-full flex flex-col justify-between text-kaleici-700 leading-relaxed">
      <h3 class="text-2xl text-center font-semibold mb-4">{{ $t('hadriansGate.h3Text6') }}</h3>
      <p>{{ $t('hidirlikTower.gettingThere[0].route_text') }}</p>

      <h3 class="text-2xl text-center font-semibold mt-8 mb-4">{{ $t('hidirlikTower.gettingThere_title') }}</h3>
      <div class="flex flex-col gap-3 mb-8">
        <!-- Walking -->
        <div class="bg-stone-50 rounded-lg p-4 flex items-center shadow-sm">
          <img src="/icons/Walk.svg" :alt="$t('alt.hidirlik-tower')" class="w-7 h-7 mr-4 text-amber-600" />
          <p class="text-sm text-kaleici-800">{{ $t('hidirlikTower.gettingThere[0].route_title') }}</p>
          <p class="text-sm text-kaleici-800">{{ $t('hidirlikTower.gettingThere[1].route_title') }}</p>
          <p class="text-sm text-kaleici-800">{{ $t('hidirlikTower.gettingThere[2].route_title') }}</p>
        </div>
        <!-- Tram -->
        <div class="bg-stone-50 rounded-lg p-4 flex items-center shadow-sm">
          <img src="/icons/Tram.svg" :alt="$t('alt.hidirlik-tower')" class="w-7 h-7 mr-4 text-amber-600" />
          <p class="text-sm text-kaleici-800">{{ $t('hidirlikTower.publicTram') }}</p>
        </div>
        <!-- Bus -->
        <div class="bg-stone-50 rounded-lg p-4 flex items-center shadow-sm">
          <img src="/icons/Bus.svg" :alt="$t('alt.hidirlik-tower')" class="w-7 h-7 mr-4 text-amber-600" />
          <p class="text-sm text-kaleici-800">{{ $t('hidirlikTower.publicBus') }}</p>
        </div>
      </div>

      <h3 class="text-2xl text-center font-semibold mt-4 mb-4">{{ $t('hadriansGate.h3Text8') }}</h3>
      <p>{{ $t('hadriansGate.pText31') }}</p>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <!-- Cafe -->
        <div class="bg-stone-50 rounded-lg p-4 text-center shadow-sm aspect-square flex flex-col items-center justify-center">
          <img src="/icons/Cafe.svg" :alt="$t('alt.hidirlik-tower')" class="w-8 h-6 mx-auto text-amber-600 mb-2" />
          <p class="text-sm font-medium text-kaleici-800">{{ $t('hadriansGate.pText24') }}</p>
        </div>
        <!-- Souvenir -->
        <div class="bg-stone-50 rounded-lg p-4 text-center shadow-sm aspect-square flex flex-col items-center justify-center">
          <img src="/icons/Gift.svg" :alt="$t('alt.hidirlik-tower')" class="w-7 h-7 mx-auto text-amber-600 mb-2" />
          <p class="text-sm font-medium text-kaleici-800">{{ $t('hadriansGate.pText25') }}</p>
        </div>
        <!-- Restroom -->
        <div class="bg-stone-50 rounded-lg p-4 text-center shadow-sm aspect-square flex flex-col items-center justify-center">
          <img src="/icons/WC.svg" :alt="$t('alt.hidirlik-tower')" class="w-7 h-5 mx-auto text-amber-600 mb-2" />
          <p class="text-sm font-medium text-kaleici-800">{{ $t('hadriansGate.pText26') }}</p>
        </div>
        <!-- Park -->
        <div class="bg-stone-50 rounded-lg p-4 text-center shadow-sm aspect-square flex flex-col items-center justify-center">
          <img src="/icons/Nature.svg" :alt="$t('alt.hidirlik-tower')" class="w-7 h-7 mx-auto text-amber-600 mb-2" />
          <p class="text-sm font-medium text-kaleici-800">{{ $t('hadriansGate.pText27') }}</p>
        </div>
      </div>
    </div>

    <!-- Image block -->
    <div class="flex flex-col justify-between space-y-8 h-full">
      <h2 class="text-3xl text-center font-sans font-bold text-kaleici-800 mb-6">{{ $t('hadriansGate.h2Text6') }}</h2>
      <InteractiveImage
        src="/images/hidirlik-tower-detailed-upper-walls-in-antalya-kaleici-old-town-turkey.jpg"
        :alt="$t('alt.hidirlik-tower')"
        class="rounded-xl"
      />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d948.8048644639207!2d30.703561411957644!3d36.88110261687126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c3900f9e652a75%3A0xe86b106e812e8a0e!2sHidirlik%20Tower!5e0!3m2!1sru!2str!4v1751205768445!5m2!1sru!2str"
        width="100%" height="400" style="border: 0; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.05);" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
      </iframe>
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
import InteractiveImage from '~/components/InteractiveImage.vue'
// GSAP и ScrollTrigger импортируем только внутри onMounted!

const { t } = useI18n()
const localePath = useLocalePath()

const ArchSection = ref(null)
const FAQSection = ref(null)
const wSection = ref(null)
const eSection = ref(null)
const rSection = ref(null)

onMounted(async () => {
  const gsap = (await import('gsap')).default
  const ScrollTrigger = (await import('gsap/ScrollTrigger')).default
  gsap.registerPlugin(ScrollTrigger)
  ;[ArchSection, FAQSection, wSection, eSection, rSection].forEach(section => {
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

// SEO meta & head
useSeoMeta({
  title: t('seo.hidirlik-tower.title'),
  description: t('seo.hidirlik-tower.description'),
  ogTitle: t('seo.hidirlik-tower.ogTitle'),
  ogDescription: t('seo.hidirlik-tower.ogDescription'),
  ogImage: t('seo.hidirlik-tower.ogImage'),
  twitterCard: 'summary_large_image'
})
useHead({
  link: [
    { rel: 'canonical', href: 'https://exploreantalyakaleici.com/en/hidirlik-tower' },
    { rel: 'alternate', hreflang: 'en', href: 'https://exploreantalyakaleici.com/en/hidirlik-tower' },
    { rel: 'alternate', hreflang: 'ru', href: 'https://exploreantalyakaleici.com/ru/hidirlik-tower' },
    { rel: 'alternate', hreflang: 'tr', href: 'https://exploreantalyakaleici.com/tr/hidirlik-tower' },
    { rel: 'alternate', hreflang: 'de', href: 'https://exploreantalyakaleici.com/de/hidirlik-tower' },
    { rel: 'alternate', hreflang: 'ua', href: 'https://exploreantalyakaleici.com/ua/hidirlik-tower' }, // исправлено!
    { rel: 'alternate', hreflang: 'es', href: 'https://exploreantalyakaleici.com/es/hidirlik-tower' },
    { rel: 'alternate', hreflang: 'pl', href: 'https://exploreantalyakaleici.com/pl/hidirlik-tower' },
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
        "name": "Hidirlik Tower",
        "description": "A historic Roman tower offering panoramic views of the Mediterranean Sea and Antalya's old city walls.",
        "image": "/images/hidirlik-tower-seaside-perspective-olive-tree-in-antalya-kaleici-old-town-turkey.jpg",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Antalya",
          "addressCountry": "TR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 36.8822,
          "longitude": 30.6986
        },
        "url": "https://exploreantalyakaleici.com/en/hidirlik-tower",
        "inLanguage": ["en", "ru", "tr", "de", "uk", "es", "pl"]
      })
    }
  ]
})

</script>
