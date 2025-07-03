<template>
  <article class="attraction-page">
    <!-- Hero Section -->
    <section class="hero relative h-[60vh] min-h-[400px] overflow-hidden">
      <img src="/images/karaalioglu-park-in-antalya-kaleici-old-town-turkey-1.jpg" :alt="$t('alt.karaalioglu-park')" class="w-full h-full object-cover">
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
      <section class="content-section mb-16 mt-8">
        <div class="mx-auto">
          <div>
            <InteractiveImage
              src="/images/karaalioglu-park-hand-sculpture-in-antalya-kaleici-old-town-turkey-4.jpg"
              :alt="$t('alt.karaalioglu-park')"
              class="float-left mr-8 mb-4 rounded-lg shadow-lg max-w-[640px] min-w-[420px] h-[400] md:w-4/5"
            />
          </div>
          <div>
            <h2 class="text-3xl font-bold text-center text-kaleici-800 mb-6">
              {{ $t('karaaliogluPark.history_title') }}
            </h2>
            <div class="space-y-4 text-base leading-relaxed text-gray-700">
              <p class="font-medium text-kaleici-700 [text-indent:2em]">{{ $t('karaaliogluPark.history_paragraph1') }}</p>
              <p class="font-medium text-kaleici-700">{{ $t('karaaliogluPark.history_paragraph2') }}</p>
              <p class="font-medium text-kaleici-700">{{ $t('karaaliogluPark.history_paragraph3') }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Панорама -->
      

      <!-- Features Section -->
      <section ref="archSection" class="content-section mb-16 mt-8 bg-[#f5ede1] p-8 rounded-xl shadow-lg">
        
        <h2 class="text-3xl font-bold text-center text-kaleici-800 mb-6 ">
          {{ $t('karaaliogluPark.features_title') }}
        </h2>
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div class="prose prose-lg max-w-none text-kaleici-700">
            
            <p class="indent-6 mb-4">{{ $t('karaaliogluPark.features_paragraph1') }}</p>
            <p class=" mb-4">{{ $t('karaaliogluPark.features_paragraph2') }}</p>
            <p class=" mb-4">{{ $t('karaaliogluPark.features_paragraph3') }}</p>
          </div>
          <div
            class="interactive-image-container overflow-hidden rounded-lg shadow-lg"
            @mousemove="handleMouseMove"
            @mouseleave="handleMouseLeave"
          >
            <img
              ref="interactiveImage"
              src="/images/karaalioglu-park-panorama-in-antalya-kaleici-old-town-turkey-5.jpg"
              :alt="$t('alt.karaalioglu-park')"
              class="w-full max-w-[800px] h-[500px] object-cover transition-all duration-300 ease-out will-change-transform"
              :style="imageTransform"
            />
          </div>
        </div>
      </section>

      <!-- Nearby Attractions -->
<section class="content-section mb-16 bg-[#fdedd8] p-8 rounded-xl shadow-lg">
  <h2 class="text-3xl font-bold text-center font-sans text-kaleici-800 mb-4 tracking-tight leading-snug">
    {{ $t('nearbyAttractions.sectionTitle') }}
  </h2>
  <p class="text-lg font-sans text-center text-kaleici-700 mb-8 leading-relaxed">
    {{ $t('nearbyAttractions.sectionDescription4') }}
  </p>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <!-- Traditional Bazaars -->
    <NuxtLink :to="localePath('/traditional-bazaars')" class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
      <div class="h-48 overflow-hidden">
        <img src="/images/traditional-bazaar-handmade-carpets-souvenirs-in-antalya-kaleici-old-town-turkey.jpg" :alt="$t('alt.karaalioglu-park')" class="w-full h-full object-cover">
      </div>
      <div class="p-6">
        <h3 class="text-xl font-semibold text-center text-kaleici-800 mb-3">{{ $t('nearbyAttractions.traditionalBazaars.title') }}</h3>
        <p class="text-kaleici-600">{{ $t('nearbyAttractions.traditionalBazaars.description') }}</p>
      </div>
    </NuxtLink>
    <!-- Authentic Streets -->
    <NuxtLink :to="localePath('/authentic-streets')" class="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
      <div class="h-48 overflow-hidden">
        <img src="/images/street-scenes-in-antalya-kaleici-old-town-turkey-1.jpg" :alt="$t('alt.karaalioglu-park')" class="w-full h-full object-cover" />
      </div>
      <div class="p-5">
        <h3 class="text-xl font-semibold text-center text-kaleici-800 mb-2">
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
        <img src="/images/hadrian-gate-in-antalya-kaleici-old-town-turkey-1.jpg" :alt="$t('alt.karaalioglu-park')" class="w-full h-full object-cover">
      </div>
      <div class="p-6">
        <h3 class="text-xl font-semibold text-center text-kaleici-800 mb-3">{{ $t('nearbyAttractions.hadriansGate.title') }}</h3>
        <p class="text-kaleici-600">{{ $t('nearbyAttractions.hadriansGate.description') }}</p>
      </div>
    </NuxtLink>
  </div>
</section>


      <!-- FAQ Section -->
      <section  class="content-section mb-16 ">
        <div class="container mx-auto px-4">
          <div class="grid md:grid-cols-2 gap-8">
            <div class="relative h-full">
              <InteractiveImage 
                src="/images/karaalioglu-park-in-antalya-kaleici-old-town-turkey-6.webp"
                :alt="$t('alt.karaalioglu-park')"
                class=" w-full max-w-[800px] h-[850px] object-cover transition-all duration-300 ease-out will-change-transform rounded-xl shadow-lg"
              />
            </div>
            <div ref="faqSection" class="bg-[#f5ede1] p-8 rounded-xl shadow-lg">
              <h2 class="text-3xl font-bold text-center text-kaleici-800 mb-6">{{ $t('karaaliogluPark.whatToSee_title') }}</h2>
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

      <!-- Flora Fauna Section -->
      <section class="content-section mb-8">
        <div class="grid md:grid-cols-2 gap-6 items-stretch">
          <div ref="eSection" class="bg-[#f5ede1] p-6 rounded-xl shadow-lg flex flex-col justify-between">
            <h2 class="text-3xl font-bold text-center text-kaleici-800 mb-6 tracking-tight leading-snug">
              {{ $t('karaaliogluPark.floraFauna_title') }}
            </h2>
            <div class="prose prose-lg max-w-none text-kaleici-700">
              <p class="indent-6 mb-4">{{ $t('karaaliogluPark.floraFauna_paragraph1') }}</p>
              <p class=" mb-4">{{ $t('karaaliogluPark.floraFauna_paragraph2') }}</p>
              <p class=" mb-4">{{ $t('karaaliogluPark.floraFauna_paragraph3') }}</p>
            </div>
          </div>
          <div class="relative h-full">
            <InteractiveImage
              src="/images/karaalioglu-park-cat-in-antalya-kaleici-old-town-turkey-3.jpg"
              :alt="$t('alt.karaalioglu-park')"
              class="w-full h-full object-cover max-h-[700px] rounded-xl shadow-lg"
            />
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


          <!-- Text block -->
        <section class="content-section mb-16">

<div class="grid md:grid-cols-2 gap-8 items-start">

  <div class="flex flex-col items-center prose prose-lg">
              
                <h3 class="text-xl font-sans mt-6 mb-2">
                {{ $t('karaaliogluPark.tips_title') }}
              </h3>
              <ul class="list-disc font-sans pl-5">
                <li>{{ $t('karaaliogluPark.tips_paragraph1') }}</li>
                <li>{{ $t('karaaliogluPark.tips_paragraph2') }}</li>
                <li>{{ $t('karaaliogluPark.tips_paragraph3') }}</li>
        
              </ul>
              
            </div>

<div class="flex flex-col items-center prose prose-lg">
              
                <h3 class="text-xl font-sans mt-6 mb-2">
                {{ $t('karaaliogluPark.photoSpots_title') }}
              </h3>
              <ul class="list-disc font-sans pl-5">
                <li>{{ $t('karaaliogluPark.photoSpots_paragraph1') }}</li>
                <li>{{ $t('karaaliogluPark.photoSpots_paragraph2') }}</li>
                <li>{{ $t('karaaliogluPark.photoSpots_paragraph3') }}</li>
        
              </ul>
              
            </div>
</div>
        </section>





<!-- Visiting Today Section -->
      <section class="content-section mb-16">
        <div class="grid md:grid-cols-2 gap-6 items-stretch">
          <!-- Image block -->
          <div class="relative h-full">
            <InteractiveImage
              src="/images/karaalioglu-park-in-antalya-kaleici-old-town-turkey-4.jpg"
              :alt="$t('alt.karaalioglu-park')"
              class="w-full h-full object-cover max-h-[700px] rounded-xl shadow-lg"
            />
          </div>
          <!-- Text block -->
          <div
            ref="wSection"
            class="bg-[#f5ede1] p-6 rounded-xl shadow-lg flex flex-col justify-between"
          >
            <h2 class="text-3xl font-bold text-center font-sans text-kaleici-800 mb-6">
              {{ $t('karaaliogluPark.activities_title') }}
            </h2>
            <div class="prose prose-base font-sans text-kaleici-700 leading-relaxed">
              <p>{{ $t('karaaliogluPark.activities_paragraph1') }}</p>

              <h3 class="text-xl font-sans mt-6 mb-2">
                {{ $t('karaaliogluPark.morningActivities_title') }}
              </h3>
              <ul class="list-disc font-sans pl-5">
                <li>{{ $t('karaaliogluPark.morningActivities_item1') }}</li>
                <li>{{ $t('karaaliogluPark.morningActivities_item2') }}</li>
                <li>{{ $t('karaaliogluPark.morningActivities_item3') }}</li>
                <li>{{ $t('karaaliogluPark.morningActivities_item4') }}</li>
              </ul>

              <h3 class="text-xl font-sans mt-6 mb-2">
                {{ $t('karaaliogluPark.eveningActivities_title') }}
              </h3>
              <ul class="list-disc font-sans pl-5">
                <li>{{ $t('karaaliogluPark.eveningActivities_item1') }}</li>
                <li>{{ $t('karaaliogluPark.eveningActivities_item2') }}</li>
                <li>{{ $t('karaaliogluPark.eveningActivities_item3') }}</li>
                <li>{{ $t('karaaliogluPark.eveningActivities_item4') }}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      <!-- Practical Information -->
      <section class="content-section mb-16">
        <div class="grid md:grid-cols-2 gap-8 items-stretch font-sans">
          <div class="prose prose-lg h-full flex flex-col justify-between text-kaleici-700 leading-relaxed">
            <h3 class="text-2xl text-center font-semibold mb-4">{{ $t('hadriansGate.h3Text6') }}</h3>
            <p>{{ $t('karaaliogluPark.accessibility_paragraph') }}</p>
            <h3 class="text-2xl text-center font-semibold mt-8 mb-4">{{ $t('karaaliogluPark.access_title') }}</h3>
            <div class="flex flex-col gap-3 mb-8">
              <div class="bg-stone-50 rounded-lg p-4 flex items-center shadow-sm">
                <img src="/icons/Walk.svg" :alt="$t('alt.karaalioglu-park')" class="w-7 h-7 mr-4 text-amber-600" />
                <p class="text-sm text-kaleici-800">{{ $t('karaaliogluPark.access_paragraph1') }}</p>
                
              </div>
              <div class="bg-stone-50 rounded-lg p-4 flex items-center shadow-sm">
                <img src="/icons/Tram.svg" :alt="$t('alt.karaalioglu-park')" class="w-7 h-7 mr-4 text-amber-600" />
                <p class="text-sm text-kaleici-800">{{ $t('karaaliogluPark.access_paragraph2') }}</p>
              </div>
            </div>
            <h3 class="text-2xl text-center font-semibold mt-4 mb-4">{{ $t('hadriansGate.h3Text8') }}</h3>
            <p>{{ $t('karaaliogluPark.accessibility_paragraph2') }}</p>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div class="bg-stone-50 rounded-lg p-4 text-center shadow-sm aspect-square flex flex-col items-center justify-center">
                <img src="/icons/Cafe.svg" :alt="$t('alt.karaalioglu-park')" class="w-8 h-6 mx-auto text-amber-600 mb-2" />
                <p class="text-sm font-medium text-kaleici-800">{{ $t('hadriansGate.pText24') }}</p>
              </div>
              <div class="bg-stone-50 rounded-lg p-4 text-center shadow-sm aspect-square flex flex-col items-center justify-center">
                <img src="/icons/WC.svg" :alt="$t('alt.karaalioglu-park')" class="w-7 h-5 mx-auto text-amber-600 mb-2" />
                <p class="text-sm font-medium text-kaleici-800">{{ $t('hadriansGate.pText26') }}</p>
              </div>
              <div class="bg-stone-50 rounded-lg p-4 text-center shadow-sm aspect-square flex flex-col items-center justify-center">
                <img src="/icons/Nature.svg" :alt="$t('alt.karaalioglu-park')" class="w-7 h-7 mx-auto text-amber-600 mb-2" />
                <p class="text-sm font-medium text-kaleici-800">{{ $t('hadriansGate.pText27') }}</p>
              </div>
            </div>
          </div>
          <div class="flex flex-col justify-between space-y-8 h-full">
            <h2 class="text-3xl font-bold text-kaleici-800 mb-6">{{ $t('hadriansGate.h2Text6') }}</h2>
            <InteractiveImage
              src="/images/karaalioglu-park-in-antalya-kaleici-old-town-turkey-1.jpg"
              :alt="$t('alt.karaalioglu-park')"
              class="rounded-xl"
            />
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.447220963181!2d30.702305276272497!3d36.879648163216324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c3900f46848d4f%3A0x329e0281ef97aba1!2z0J_QsNGA0Log0JrQsNGA0LDQsNC70LjQvtCz0LvRgw!5e0!3m2!1sru!2str!4v1751374183940!5m2!1sru!2str" width="100%" height="400" style="border: 0; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.05);" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
// GSAP импортировать только внутри onMounted!

const { t } = useI18n()
const localePath = useLocalePath()

const archSection = ref(null)
const faqSection = ref(null)
const qSection = ref(null)
const wSection = ref(null)
const eSection = ref(null)
const rSection = ref(null)

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

onMounted(async () => {
  const gsap = (await import('gsap')).default
  const ScrollTrigger = (await import('gsap/ScrollTrigger')).default
  gsap.registerPlugin(ScrollTrigger)
  ;[archSection, faqSection, wSection].forEach(section => {
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
  title: t('seo.karaalioglu-park.title'),
  description: t('seo.karaalioglu-park.description'),
  ogTitle: t('seo.karaalioglu-park.ogTitle'),
  ogDescription: t('seo.karaalioglu-park.ogDescription'),
  ogImage: t('seo.karaalioglu-park.ogImage'),
  twitterCard: 'summary_large_image'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://exploreantalyakaleici.com/en/karaalioglu-park' },
    { rel: 'alternate', hreflang: 'en', href: 'https://exploreantalyakaleici.com/karaalioglu-park' },
    { rel: 'alternate', hreflang: 'ru', href: 'https://exploreantalyakaleici.com/ru/karaalioglu-park' },
    { rel: 'alternate', hreflang: 'tr', href: 'https://exploreantalyakaleici.com/tr/karaalioglu-park' },
    { rel: 'alternate', hreflang: 'de', href: 'https://exploreantalyakaleici.com/de/karaalioglu-park' },
    { rel: 'alternate', hreflang: 'ua', href: 'https://exploreantalyakaleici.com/ua/karaalioglu-park' }, // исправлено!
    { rel: 'alternate', hreflang: 'es', href: 'https://exploreantalyakaleici.com/es/karaalioglu-park' },
    { rel: 'alternate', hreflang: 'pl', href: 'https://exploreantalyakaleici.com/pl/karaalioglu-park' },
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
        "name": "Karaalioglu Park",
        "description": "A stunning seaside park offering breathtaking views of the Mediterranean Sea and the Taurus Mountains.",
        "image": "/images/karaalioglu-park-in-antalya-kaleici-old-town-turkey-1.jpg",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Antalya",
          "addressCountry": "TR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 36.8833,
          "longitude": 30.7045
        },
        "url": "https://exploreantalyakaleici.com/en/karaalioglu-park",
        "inLanguage": ["en", "ru", "tr", "de", "uk", "es", "pl"]
      })
    }
  ]
})

</script>
