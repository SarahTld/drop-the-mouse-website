<template>
  <!-- Overlay Content with same behavior as navigation bar -->
  <div class="overlay-content" 
       :class="{ 'active': showOverlay }" 
       :style="{
         position: scrollY > windowHeight * 0.87 ? 'fixed' : 'absolute',
         bottom: scrollY > windowHeight * 0.87 ? 'auto' : '10px',
         top: scrollY > windowHeight * 0.87 ? '120px' : 'auto',
         left: '50%',
         transform: 'translateX(-50%)',
         zIndex: 9998
       }"
       @click="closeOverlay">
    <div class="overlay-inner" @click.stop>
      <h2 class="overlay-title">Découvrez nos projets</h2>
      <p class="overlay-text">Nous créons des expériences digitales exceptionnelles</p>
      <button class="overlay-cta" @click="closeOverlay">Voir nos réalisations</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  showOverlay: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

const scrollY = ref(0)
const windowHeight = ref(0)

const closeOverlay = () => {
  emit('close')
}

const handleScroll = () => {
  scrollY.value = window.scrollY
}

onMounted(() => {
  windowHeight.value = window.innerHeight
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', () => {
    windowHeight.value = window.innerHeight
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Overlay Content with dynamic positioning like navigation bar */
.overlay-content {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(7px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 36px;
  padding: 20px 40px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  width: min-content;
  max-width: 90vw;
}

.overlay-content.active {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%);
}

.overlay-inner {
  text-align: center;
  padding: 0;
  transform: translateY(20px);
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.overlay-content.active .overlay-inner {
  transform: translateY(0);
}

.overlay-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #8b5cf6, #ec4899, #06b6d4);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
}

.overlay-text {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1rem;
  line-height: 1.4;
}

.overlay-cta {
  background: linear-gradient(135deg, #8b5cf6, #ec4899);
  color: white;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(139, 92, 246, 0.3);
}

.overlay-cta:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 20px rgba(139, 92, 246, 0.4);
}
</style>
