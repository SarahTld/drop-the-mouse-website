<template>
  <div class="relative" @mouseenter="isHovered = true" @mouseleave="isHovered = false; startAutoPlay()">
    <!-- Carrousel Container -->
    <div class="relative overflow-hidden">
      <div 
        class="flex transition-transform duration-500 ease-in-out"
        :style="{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }"
      >
        <div 
          v-for="(project, index) in filteredProjects" 
          :key="project.id"
          class="flex-shrink-0 w-full md:w-[33.333%] px-2 md:px-4"
        >
          <div class="h-full">
            <div class="project-card bg-gray-50 border border-gray-200 rounded-3xl p-6 md:p-8 hover:bg-gray-100 transition-all duration-500 group h-full">
              <!-- Screenshot -->
              <div :class="['mb-6 overflow-hidden rounded-2xl p-1 relative', getGradientClass(project.category)]">
                <div class="aspect-video bg-white rounded-xl flex items-center justify-center relative">
                  <img 
                    v-if="project.image"
                    :src="project.image" 
                    :alt="project.alt"
                    class="w-full h-full object-cover rounded-xl"
                    loading="lazy"
                  />
                  <div v-else :class="['w-full h-full rounded-xl flex items-center justify-center', getBgGradient(project.category)]">
                    <div :class="['text-center', getTextColor(project.category)]">
                      <div :class="['w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center', getIconBg(project.category)]">
                        <!-- Icon Météo -->
                        <svg v-if="project.iconType === 'weather'" class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"/>
                        </svg>
                        <!-- Icon ClésEnMain -->
                        <svg v-else-if="project.iconType === 'key'" class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                        </svg>
                        <!-- Icon Game (default) -->
                        <svg v-else class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <p class="text-sm font-medium">{{ project.title }}</p>
                    </div>
                  </div>
                  <!-- Badge en haut à gauche -->
                  <div class="absolute top-3 left-3">
                    <span :class="['px-3 py-1 text-white rounded-full text-sm font-medium shadow-lg', getBadgeClass(project.category)]">
                      {{ project.badge }}
                    </span>
                  </div>
                </div>
              </div>
              
              <div class="mb-6">
                <h3 class="text-2xl font-bold text-gray-900 mb-3" style="font-family: 'Neue Montreal', sans-serif;">
                  {{ project.title }}
                </h3>
                <p class="text-gray-600 leading-relaxed mb-4">
                  {{ project.description }}
                </p>
                <a :href="project.url" target="_blank" class="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold transition-colors duration-300">
                  Voir le projet
                  <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Buttons -->
    <button
      v-if="filteredProjects.length > itemsPerView"
      @click="previousSlide"
      class="carousel-nav-btn absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 md:-translate-x-4 z-10"
      aria-label="Projets précédents"
    >
      <div class="relative bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 rounded-full p-3 md:p-4 shadow-2xl backdrop-blur-sm border border-white/20">
        <div class="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
        <svg class="relative w-6 h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
        </svg>
      </div>
    </button>

    <button
      v-if="filteredProjects.length > itemsPerView"
      @click="nextSlide"
      class="carousel-nav-btn absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 md:translate-x-4 z-10"
      aria-label="Projets suivants"
    >
      <div class="relative bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 rounded-full p-3 md:p-4 shadow-2xl backdrop-blur-sm border border-white/20">
        <div class="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
        <svg class="relative w-6 h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </button>

    <!-- Indicators -->
    <div v-if="filteredProjects.length > itemsPerView" class="flex justify-center gap-2 mt-8">
      <button
        v-for="slideIndex in totalSlides"
        :key="slideIndex"
        @click="goToSlide(slideIndex)"
        :class="[
          'w-2 h-2 rounded-full transition-all duration-300',
          currentIndex === slideIndex
            ? 'bg-purple-600 w-8' 
            : 'bg-gray-300 hover:bg-gray-400'
        ]"
        :aria-label="`Aller au groupe ${slideIndex + 1}`"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  projects: {
    type: Array,
    required: true
  },
  activeCategory: {
    type: String,
    default: 'all'
  }
})

const currentIndex = ref(0)
const itemsPerView = ref(3) // 3 projets par vue sur desktop

// Calculer le nombre d'items par vue selon la taille d'écran
const updateItemsPerView = () => {
  if (process.client) {
    if (window.innerWidth < 768) {
      itemsPerView.value = 1 // 1 projet sur mobile
    } else {
      itemsPerView.value = 3 // 3 projets sur desktop
    }
  }
}

onMounted(() => {
  updateItemsPerView()
  window.addEventListener('resize', updateItemsPerView)
})

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('resize', updateItemsPerView)
  }
})

const filteredProjects = computed(() => {
  if (props.activeCategory === 'all') {
    return props.projects
  }
  return props.projects.filter(p => p.category === props.activeCategory)
})

// Calculer le nombre maximum de slides
const maxSlides = computed(() => {
  return Math.max(0, filteredProjects.value.length - itemsPerView.value)
})

// Calculer le nombre de groupes pour les indicateurs
const totalSlides = computed(() => {
  return Array.from({ length: Math.ceil(filteredProjects.value.length / itemsPerView.value) }, (_, i) => i)
})

// Reset to first slide when category changes
watch(() => props.activeCategory, () => {
  currentIndex.value = 0
})

const nextSlide = () => {
  if (currentIndex.value < maxSlides.value) {
    currentIndex.value++
  } else {
    currentIndex.value = 0 // Loop back to start
  }
  // Restart auto-play after manual navigation
  startAutoPlay()
}

const previousSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else {
    currentIndex.value = maxSlides.value // Loop to end
  }
  // Restart auto-play after manual navigation
  startAutoPlay()
}

const goToSlide = (index) => {
  currentIndex.value = index
  // Restart auto-play after manual navigation
  startAutoPlay()
}

// Helper functions for styling
const getGradientClass = (category) => {
  const gradients = {
    web: 'bg-gradient-to-br from-blue-400 to-cyan-400',
    site: 'bg-gradient-to-br from-emerald-400 to-teal-600',
    game: 'bg-gradient-to-br from-pink-400 to-rose-400'
  }
  return gradients[category] || gradients.web
}

const getBgGradient = (category) => {
  const gradients = {
    web: 'bg-gradient-to-b from-blue-50 to-cyan-50',
    site: 'bg-gradient-to-b from-emerald-50 to-teal-100',
    game: 'bg-gradient-to-b from-pink-50 to-rose-50'
  }
  return gradients[category] || gradients.web
}

const getTextColor = (category) => {
  const colors = {
    web: 'text-blue-400',
    site: 'text-emerald-600',
    game: 'text-pink-400'
  }
  return colors[category] || colors.web
}

const getIconBg = (category) => {
  const colors = {
    web: 'bg-blue-400',
    site: 'bg-emerald-600',
    game: 'bg-pink-500'
  }
  return colors[category] || colors.web
}

const getBadgeClass = (category) => {
  const classes = {
    web: 'bg-blue-500',
    site: 'bg-emerald-600',
    game: 'bg-pink-500'
  }
  return classes[category] || classes.web
}

// Auto-play carousel (optional)
let autoPlayInterval = null
const isHovered = ref(false)

const startAutoPlay = () => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval)
  }
  autoPlayInterval = setInterval(() => {
    if (filteredProjects.value.length > itemsPerView.value && !isHovered.value) {
      nextSlide()
    }
  }, 5000)
}

const stopAutoPlay = () => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval)
  }
}

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>

<style scoped>
.project-card {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.carousel-nav-btn {
  filter: drop-shadow(0 10px 25px rgba(139, 92, 246, 0.3));
}
</style>

