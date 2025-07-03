<template>
  <article class="attraction-page">
    <!-- Hero Section -->
    <section class="hero relative h-[60vh] min-h-[400px] overflow-hidden">
      <img
        src="/images/main-page-carousel-in-antalya-kaleici-old-town-turkey-1.jpg"
        :alt="$t('alt.old-harbor')"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      <div class="absolute bottom-0 left-0 right-0 p-8 text-white">
        <div class="container mx-auto">
          <h1
            class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-xl mb-4"
          >
            {{ $t('oldHarbor.oldHarbor.title') }}
          </h1>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="container mx-auto px-4 py-12">
      <!-- Introduction -->
      <section class="prose prose-lg max-w-none mb-16">
        <p class="text-xl leading-relaxed indent-6 text-kaleici-700 italic">
          {{ $t('oldHarbor.oldHarbor.intro') }}
        </p>
      </section>

      <!-- History Section -->
      <section class="content-section mb-16">
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <InteractiveImage
              src="/images/old-harbor-in-antalya-kaleici-old-town-turkey-7.jpg"
              :alt="$t('alt.old-harbor')"
              class="rounded-lg max-h-[600px] object-cover object-center shadow-lg"
            />
          </div>
          <div>
            <h2 class="text-3xl font-bold text-kaleici-800 mb-6">
              {{ $t('oldHarbor.oldHarbor.sectionHistoryTitle') }}
            </h2>
            <div class="space-y-4 text-base leading-relaxed text-gray-700">
              <p>
                <span class="font-medium text-kaleici-800">
                  {{ $t('oldHarbor.oldHarbor.history_paragraph1') }}
                </span>
              </p>
              <p class="italic text-kaleici-700 border-l-4 pl-4 border-amber-300 bg-stone-50 rounded-md">
                {{ $t('oldHarbor.oldHarbor.history_paragraph2') }}
              </p>
              <p>
                <span class="font-medium text-kaleici-800">
                  {{ $t('oldHarbor.oldHarbor.history_paragraph3') }}
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Architectural Features -->
      <section
        ref="ArchSection"
        class="content-section mb-16 bg-[#f5ede1] p-8 rounded-xl shadow-lg"
      >
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div class="prose prose-lg max-w-none text-kaleici-700">
            <p class="indent-6 mb-4">
              {{ $t('oldHarbor.oldHarbor.history_paragraph4') }}
            </p>
            <p class="indent-0">
              {{ $t('oldHarbor.oldHarbor.history_paragraph5') }}
            </p>
          </div>
          <div
            class="interactive-image-container overflow-hidden rounded-lg shadow-lg"
            @mousemove="handleMouseMove"
            @mouseleave="handleMouseLeave"
          >
            <img
              ref="interactiveImage"
              src="/images/old-harbor-in-antalya-kaleici-old-town-turkey-9.jpg"
              :alt="$t('alt.old-harbor')"
              class="w-full h-full object-cover max-h-[500px] transition-all duration-300 ease-out will-change-transform"
              :style="imageTransform"
            />
          </div>
        </div>
      </section>

      <!-- Nearby Attractions -->
      <section class="content-section mb-8 bg-[#fdedd8] p-8 rounded-xl shadow-lg">
        <h2
          class="text-3xl font-bold font-sans text-center text-kaleici-800 mb-4 tracking-tight leading-snug"
        >
          {{ $t('nearbyAttractions.sectionTitle') }}
        </h2>
        <p class="text-lg font-sans text-center text-kaleici-700 mb-8 leading-relaxed">
          {{ $t('nearbyAttractions.sectionDescription2') }}
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Traditional Bazaar -->
          <NuxtLink
            :to="localePath('/traditional-bazaars')"
            class="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-[1.02] transition-all duration-300"
          >
            <div class="h-48 overflow-hidden">
              <img
                src="/images/traditional-bazaar-in-antalya-kaleici-old-town-turkey-3.jpg"
                :alt="$t('alt.old-harbor')"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-5">
              <h3 class="text-xl text-center font-semibold text-kaleici-800 mb-2">
                {{ $t('nearbyAttractions.traditionalBazaars.title') }}
              </h3>
              <p class="text-kaleici-700 text-base leading-relaxed">
                {{ $t('nearbyAttractions.traditionalBazaars.description') }}
              </p>
            </div>
          </NuxtLink>
          <!-- Authentic Streets -->
          <NuxtLink
            :to="localePath('/authentic-streets')"
            class="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-[1.02] transition-all duration-300"
          >
            <div class="h-48 overflow-hidden">
              <img
                src="/images/street-scenes-in-antalya-kaleici-old-town-turkey-1.jpg"
                :alt="$t('alt.old-harbor')"
                class="w-full h-full object-cover"
              />
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
      <section class="content-section mb-8 py-5 bg-stone-100">
  <div class="container mx-auto px-4">
        <div class="bg-white rounded-lg shadow-lg p-8">
          <h2 class="text-3xl font-bold text-center text-kaleici-800 mb-6">
            {{ $t('oldHarbor.oldHarbor.sectionDiscoverMoreTitle') }}
          </h2>
          <p class="text-center text-lg mb-8">{{ $t('oldHarbor.oldHarbor.discoverMore_paragraph') }}</p>
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
        <h2
          class="text-3xl font-bold text-center text-kaleici-800 mb-4 tracking-tight leading-snug"
        >
          {{ $t('oldHarbor.oldHarbor.sectionModernTitle') }}
        </h2>
        <div class="prose prose-lg max-w-none text-kaleici-700">
          <p class="indent-6 mb-4">
            {{ $t('oldHarbor.oldHarbor.modern_paragraph1') }}
          </p>
          <p class="indent-0">
            {{ $t('oldHarbor.oldHarbor.modern_paragraph2') }}
          </p>
        </div>
      </section>

      <!-- Legends Section -->
      <section class="content-section mb-8">
        <div class="mb-8 rounded-lg overflow-hidden shadow-lg">
          <InteractiveImage
            src="/images/old-harbor-in-antalya-kaleici-old-town-turkey-10.jpg"
            :alt="$t('alt.old-harbor')"
            class="w-full h-64 object-cover"
          />
        </div>
        <div class="prose prose-lg max-w-none text-kaleici-700">
          <p class="indent-0 mb-2">
            {{ $t('oldHarbor.oldHarbor.modern_paragraph3') }}
          </p>
          <p class="indent-0 mb-2">
            {{ $t('oldHarbor.oldHarbor.modern_paragraph4') }}
          </p>
          <p class="indent-0 mb-2">
            {{ $t('oldHarbor.oldHarbor.modern_paragraph5') }}
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
              src="/images/hadrians-gate-in-antalya-kaleici-old-town-turkey-2.webp"
              :alt="$t('alt.hadrian-gate')"
              class="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>
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
            <h2 class="text-2xl text-center font-semibold text-kaleici-800 mb-4">
              {{ $t('oldHarbor.oldHarbor.sectionFactsTitle') }}
            </h2>
            <div class="prose prose-base text-kaleici-700 leading-relaxed">
              <p>{{ $t('oldHarbor.oldHarbor.facts_quote') }}</p>
              <h3 class="text-xl font-semibold mt-6 mb-2">
                {{ $t('oldHarbor.oldHarbor.fact_engineeringTitle') }}
              </h3>
              <p>{{ $t('oldHarbor.oldHarbor.fact_engineering_paragraph') }}</p>
              <h3 class="text-xl font-semibold mt-6 mb-2">
                {{ $t('oldHarbor.oldHarbor.fact_hadrianTitle') }}
              </h3>
              <p>{{ $t('oldHarbor.oldHarbor.fact_hadrian_paragraph') }}</p>
              <h3 class="text-xl font-semibold mt-6 mb-2">
                {{ $t('oldHarbor.oldHarbor.fact_byzantineTitle') }}
              </h3>
              <p>{{ $t('oldHarbor.oldHarbor.fact_byzantine_paragraph') }}</p>
              <h3 class="text-xl font-semibold mt-6 mb-2">
                {{ $t('oldHarbor.oldHarbor.fact_transformationTitle') }}
              </h3>
              <p>
                {{ $t('oldHarbor.oldHarbor.fact_transformation_paragraph') }}
              </p>
            </div>
          </div>
          <!-- Image block -->
          <div class="relative h-full">
            <InteractiveImage
              src="/images/old-harbor-in-antalya-kaleici-old-town-turkey-6.jpg"
              :alt="$t('alt.old-harbor')"
              class="w-full object-cover max-h-[800px] rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>


      <!-- Tours Widget -->
      <section class="content-section mb-8 py-5 bg-stone-100">
  <div class="container mx-auto px-4">
        <div class="bg-white rounded-lg shadow-lg p-8">
          <h2 class="text-3xl font-bold text-center text-kaleici-800 mb-6">
            {{ $t('oldHarbor.oldHarbor.sectionDiscoverMoreTitle') }}
          </h2>
          <p class="text-center text-lg mb-8">{{ $t('oldHarbor.oldHarbor.discoverMore_paragraph') }}</p>
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

      
      <section class="content-section mb-16">
        <h2
          class="text-3xl font-bold text-center text-kaleici-800 mb-4 tracking-tight leading-snug"
        >
          {{ $t('oldHarbor.oldHarbor.sectionExperienceFinalTitle') }}
        </h2>
        <div class="prose prose-lg max-w-none text-kaleici-700">
          <p class="indent-6 mb-4">
            {{ $t('oldHarbor.oldHarbor.experienceFinal_paragraph1') }}
          </p>
          <p class="indent-0">
            {{ $t('oldHarbor.oldHarbor.experienceFinal_paragraph2') }}
          </p>
          <p class="indent-0">
            {{ $t('oldHarbor.oldHarbor.experienceFinal_paragraph3') }}
          </p>
        </div>
      </section>

      <!-- Visiting Today Section -->
      <section class="content-section mb-16">
        <div class="grid md:grid-cols-2 gap-6 items-stretch">
          <!-- Image block -->
          <div class="relative h-full">
            <InteractiveImage
              src="/images/old-harbor-in-antalya-kaleici-old-town-turkey-4.jpg"
              :alt="$t('alt.old-harbor')"
              class="w-full h-full object-cover max-h-[700px] rounded-xl shadow-lg"
            />
          </div>
          <!-- Text block -->
          <div
            ref="wSection"
            class="bg-[#f5ede1] p-6 rounded-xl shadow-lg flex flex-col justify-between"
          >
            <h2 class="text-3xl font-bold text-center font-sans text-kaleici-800 mb-6">
              {{ $t('oldHarbor.oldHarbor.sectionVisitingTipsTitle') }}
            </h2>
            <div class="prose prose-base font-sans text-kaleici-700 leading-relaxed">
              <p>{{ $t('oldHarbor.oldHarbor.visitingTips_intro') }}</p>

              <h3 class="text-xl font-sans mt-6 mb-2">
                {{ $t('oldHarbor.oldHarbor.visitingTips_bestTimeTitle') }}
              </h3>
              <ul class="list-disc font-sans pl-5">
                <li>{{ $t('oldHarbor.oldHarbor.visitingTips_1') }}</li>
                <li>{{ $t('oldHarbor.oldHarbor.visitingTips_2') }}</li>
                <li>{{ $t('oldHarbor.oldHarbor.visitingTips_3') }}</li>
              </ul>

              <h3 class="text-xl font-sans mt-6 mb-2">
                {{ $t('oldHarbor.oldHarbor.sectionPhotoSpotsTitle') }}
              </h3>
              <ul class="list-disc font-sans pl-5">
                <li>{{ $t('oldHarbor.oldHarbor.photoSpots_1') }}</li>
                <li>{{ $t('oldHarbor.oldHarbor.photoSpots_2') }}</li>
                <li>{{ $t('oldHarbor.oldHarbor.photoSpots_3') }}</li>
                <li>{{ $t('oldHarbor.oldHarbor.photoSpots_4') }}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Practical Information -->
      <section class="content-section mb-16">
        <div class="grid md:grid-cols-2 gap-8 items-stretch">
          <div class="prose prose-lg h-full flex flex-col justify-between text-kaleici-700 leading-relaxed">
            <h3 class="text-2xl font-sans text-center mb-4">
              {{ $t('hadriansGate.h3Text6') }}
            </h3>
            <p class="font-sans [text-indent:2em]">{{ $t('oldHarbor.oldHarbor.gettingThere_intro') }}</p>
            <h3 class="text-2xl font-sans text-center mt-8 mb-4">
              {{ $t('oldHarbor.oldHarbor.gettingThere_publicTransportTitle') }}
            </h3>
            <div ref="eSection" class="flex flex-col gap-3 mb-8">
              <!-- Walking -->
              <div class="bg-stone-50 rounded-lg p-4 flex items-center shadow-sm">
                <img
                  src="/icons/Walk.svg"
                  :alt="$t('alt.old-harbor')"
                  class="w-10 h-10 mr-4 text-amber-600"
                />
                <p class="text-sm font-sans text-kaleici-800">
                  {{ $t('oldHarbor.oldHarbor.gettingThere_walk_fromHadriansGate') }}
                </p>
                <p class="text-sm font-sans text-kaleici-800">
                  {{ $t('oldHarbor.oldHarbor.gettingThere_walk_fromHadriansGate2') }}
                </p>
                <p class="text-sm font-sans text-kaleici-800">
                  {{ $t('oldHarbor.oldHarbor.gettingThere_walk_fromHadriansGate3') }}
                </p>
              </div>
              <!-- Tram -->
              <div class="bg-stone-50 rounded-lg p-4 flex items-center shadow-sm">
                <img
                  src="/icons/Tram.svg"
                  :alt="$t('alt.old-harbor')"
                  class="w-10 h-10 mr-4 text-amber-600"
                />
                <p class="text-sm font-sans text-kaleici-800">
                  {{ $t('oldHarbor.oldHarbor.gettingThere_tram') }}
                </p>
              </div>
              <!-- Bus -->
              <div class="bg-stone-50 rounded-lg p-4 flex items-center shadow-sm">
                <img
                  src="/icons/Bus.svg"
                  :alt="$t('alt.old-harbor')"
                  class="w-10 h-10 mr-4 text-amber-600"
                />
                <p class="text-sm font-sans text-kaleici-800">
                  {{ $t('oldHarbor.oldHarbor.gettingThere_bus') }}
                </p>
              </div>
              <!-- Taxi -->
              <div class="bg-stone-50 rounded-lg p-3 flex items-center shadow-sm">
                <img
                  src="/icons/Taxi.svg"
                  :alt="$t('alt.old-harbor')"
                  class="w-10 h-10 mr-4 text-amber-600"
                />
                <p class="text-sm font-sans text-kaleici-800">
                  {{ $t('oldHarbor.oldHarbor.gettingThere_taxi') }}
                </p>
              </div>
            </div>

            <h3 class="text-2xl text-center font-sans mt-0 mb-2">
              {{ $t('hadriansGate.h3Text8') }}
            </h3>
            <p class="font-sans [text-indent:2em]">{{ $t('hadriansGate.pText23') }}</p>
            <div ref="rSection" class="grid grid-cols-2 md:grid-cols-4 gap-2">
              <!-- Cafe -->
              <div class="bg-stone-50 rounded-lg p-4 text-center shadow-sm aspect-square flex flex-col items-center justify-center">
                <img
                  src="/icons/Cafe.svg"
                  :alt="$t('alt.old-harbor')"
                  class="w-10 h-10 mx-auto text-amber-600 mb-2"
                />
                <p class="text-sm font-medium font-sans text-kaleici-800">
                  {{ $t('hadriansGate.pText24') }}
                </p>
              </div>
              <!-- Souvenir -->
              <div class="bg-stone-50 rounded-lg p-4 text-center shadow-sm aspect-square flex flex-col items-center justify-center">
                <img
                  src="/icons/Gift.svg"
                  :alt="$t('alt.old-harbor')"
                  class="w-10 h-10 mx-auto text-amber-600 mb-2"
                />
                <p class="text-sm font-medium font-sans text-kaleici-800">
                  {{ $t('hadriansGate.pText25') }}
                </p>
              </div>
              <!-- Restroom -->
              <div class="bg-stone-50 rounded-lg p-4 text-center shadow-sm aspect-square flex flex-col items-center justify-center">
                <img
                  src="/icons/WC.svg"
                  :alt="$t('alt.old-harbor')"
                  class="w-10 h-10 mx-auto text-amber-600 mb-2"
                />
                <p class="text-sm font-medium font-sans text-kaleici-800">
                  {{ $t('hadriansGate.pText26') }}
                </p>
              </div>
              <!-- Park -->
              <div class="bg-stone-50 rounded-lg p-4 text-center shadow-sm aspect-square flex flex-col items-center justify-center">
                <img
                  src="/icons/Nature.svg"
                  :alt="$t('alt.old-harbor')"
                  class="w-10 h-10 mx-auto text-amber-600 mb-2"
                />
                <p class="text-sm font-medium font-sans text-kaleici-800">
                  {{ $t('hadriansGate.pText27') }}
                </p>
              </div>
            </div>
          </div>
          <div class="flex flex-col justify-between space-y-8 h-full">
            <h2 class="text-3xl font-bold font-sans text-kaleici-800 mb-6">
              {{ $t('oldHarbor.oldHarbor.sectionGettingThereTitle') }}
            </h2>
            <InteractiveImage
              src="/images/old-harbor-in-antalya-kaleici-old-town-turkey-3.jpg"
              class="rounded-xl"
              :alt="$t('alt.old-harbor')"
            />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5367.022202453687!2d30.69893574217092!3d36.88435531445283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c3900525de718b%3A0x448a01e080365c0!2z0KHRgtCw0YDRi9C5INC_0L7RgNGCINCQ0L3RgtCw0LvQuNC4!5e0!3m2!1sru!2str!4v1749309573734!5m2!1sru!2str"
              width=100%
              height="500"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              class="rounded-xl"
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
import { ref, onMounted } from 'vue'
import { useSeoMeta, useHead } from '#imports'
import { useI18n } from 'vue-i18n'
import GetYourGuide from '~/components/GetYourGuide.vue'
import InteractiveImage from '~/components/InteractiveImage.vue'
// GSAP импортировать только внутри onMounted

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
  title: t('seo.old-harbor.title'),
  description: t('seo.old-harbor.description'),
  ogTitle: t('seo.old-harbor.ogTitle'),
  ogDescription: t('seo.old-harbor.ogDescription'),
  ogImage: t('seo.old-harbor.ogImage'),
  twitterCard: 'summary_large_image'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://example.com/old-harbor' },
    { rel: 'alternate', hreflang: 'en', href: 'https://example.com/old-harbor' },
    { rel: 'alternate', hreflang: 'ru', href: 'https://example.com/ru/old-harbor' },
    { rel: 'alternate', hreflang: 'tr', href: 'https://example.com/tr/old-harbor' },
    { rel: 'alternate', hreflang: 'de', href: 'https://example.com/de/old-harbor' },
    { rel: 'alternate', hreflang: 'ua', href: 'https://example.com/ua/old-harbor' }, // <-- исправлено!
    { rel: 'alternate', hreflang: 'es', href: 'https://example.com/es/old-harbor' },
    { rel: 'alternate', hreflang: 'pl', href: 'https://example.com/pl/old-harbor' },
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
        "name": "Old Harbor",
        "description": "Once a bustling Roman port, today the Old Harbor is a tranquil marina offering restaurants, boat tours, and scenic views of the coastline.",
        "image": "https://example.com/images/old-harbor.jpg",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Antalya",
          "addressCountry": "TR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 36.8836,
          "longitude": 30.7042
        },
        "url": "https://example.com/old-harbor"
      })
    }
  ]
})

</script>
