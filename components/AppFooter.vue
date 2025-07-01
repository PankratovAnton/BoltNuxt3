<template>
  <footer class="bg-stone-800 text-stone-200 py-6">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <div class="text-l font-semibold font-sans ">Collaboration, content placement, advertising: exploreantalyakaleici@test 📩</div>
        <p class="text-stone-400 font-sans text-center">
          {{ $t('footer.copyright', { year: new Date().getFullYear() }) }}
        </p>
        <p class="text-stone-400 font-sans ">{{ $t('footer.madeWith') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Здесь всё просто, логика не нужна, только год для копирайта можно передать через шаблон.
</script>
