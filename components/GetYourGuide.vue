<template>
  <div
    class="getyourguide-widget"
    :data-widget="widgetType"
    :data-partner-id="partner"
    :data-q="q"
  ></div>
</template>

<script setup>
import { onMounted } from 'vue'

const props = defineProps({
  widgetType: { type: String, required: true },
  partner: { type: String, required: true },
  q: { type: String, required: true }
})

// Используем window для глобального флага, чтобы при навигации между страницами скрипт не вставлялся снова
onMounted(() => {
  if (typeof window !== 'undefined' && !window.getYourGuideScriptAdded) {
    const script = document.createElement('script')
    script.src = 'https://widget.getyourguide.com/dist/pa.umd.production.min.js'
    script.async = true
    document.body.appendChild(script)
    window.getYourGuideScriptAdded = true
  }
})
</script>
