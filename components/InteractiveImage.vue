<template>
  <div 
    class="interactive-image-container overflow-hidden"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <img 
      ref="imageRef"
      :src="src"
      :alt="alt"
      class="w-full h-full object-cover transition-all duration-300 ease-out will-change-transform"
      :style="imageTransform"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  src: String,
  alt: String
})

const imageRef = ref(null)
const imageTransform = ref('transform: scale(1) translate(0px, 0px)')

const handleMouseMove = (e) => {
  const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
  const x = (e.clientX - left) / width
  const y = (e.clientY - top) / height

  const translateX = (0.5 - x) * 20
  const translateY = (0.5 - y) * 20

  imageTransform.value = `transform: scale(1.05) translate(${translateX}px, ${translateY}px)`
}

const handleMouseLeave = () => {
  imageTransform.value = 'transform: scale(1) translate(0px, 0px)'
}
</script>

<style scoped>
.interactive-image-container {
  position: relative;
  cursor: pointer;
  background: #f5ede1; /* или theme('colors.stone.100') если через Tailwind */
}

.interactive-image-container img {
  transform-origin: center;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
</style>
