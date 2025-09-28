<template>
  <section ref="servicesSection" id="services" class="pt-32 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden rounded-t-3xl" style="clip-path: polygon(0 0, 100% 0, 100% 100%, 0 95%); padding-bottom: 200px; z-index: 30;">
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
          Nos <span class="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span>
        </h2>
        <p class="text-xl text-white/70 max-w-3xl mx-auto">
          Découvrez notre gamme complète de services numériques conçus pour propulser votre entreprise vers le succès
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(service, index) in services" 
          :key="service.id"
          class="service-card group relative"
          :style="{ 
            '--delay': `${index * 0.3}s`,
            '--is-visible': isVisible ? 1 : 0
          }"
        >
          <!-- Service Card -->
          <div class="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 hover:border-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
            <!-- Icon Background -->
            <div class="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <div v-if="service.icon === 'CodeIcon'" class="w-8 h-8 text-white">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-1 1v1h12v-1l-1-1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H4V5h16v11z"/>
                  <path d="M6 8h12v2H6V8zm0 3h12v2H6v-2z"/>
                </svg>
              </div>
              <div v-else-if="service.icon === 'MobileIcon'" class="w-8 h-8 text-white">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
                  <path d="M12 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5z"/>
                </svg>
              </div>
              <div v-else-if="service.icon === 'PaletteIcon'" class="w-8 h-8 text-white">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 8 6.5 8 8 8.67 8 9.5 7.33 11 6.5 11zm3-4C8.67 7 8 6.33 8 5.5S8.67 4 9.5 4s1.5.67 1.5 1.5S10.33 7 9.5 7zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 4 14.5 4 16 4.67 16 5.5 15.33 7 14.5 7zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 8 17.5 8s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                </svg>
              </div>
            </div>
            
            <!-- Service Content -->
            <div class="mt-8">
              <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                {{ service.title }}
              </h3>
              <p class="text-white/70 leading-relaxed mb-6">
                {{ service.description }}
              </p>
              
              <!-- Features List -->
              <ul class="space-y-3 mb-6">
                <li 
                  v-for="feature in service.features" 
                  :key="feature"
                  class="flex items-center text-white/60 group-hover:text-white/80 transition-colors duration-300"
                >
                  <svg class="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {{ feature }}
                </li>
              </ul>
              
              <!-- CTA Button -->
              <button class="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-xl">
                En savoir plus
              </button>
            </div>
            
            <!-- Hover Effect -->
            <div class="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const isVisible = ref(false)
const servicesSection = ref(null)

// Backup: event listener de scroll
const handleScroll = () => {
  if (servicesSection.value) {
    const rect = servicesSection.value.getBoundingClientRect()
    // Déclenche quand la section est vraiment bien visible
    const isInView = rect.top < window.innerHeight * 0.5 && rect.bottom > window.innerHeight * 0.5
    if (isInView && !isVisible.value) {
      console.log('Services section detected by scroll!')
      isVisible.value = true
    }
  }
}

const services = [
  {
    id: 1,
    title: 'Développement Web',
    description: 'Sites web modernes et applications web performantes avec les dernières technologies.',
    icon: 'CodeIcon',
    features: [
      'Sites responsifs et optimisés',
      'Applications web progressives',
      'E-commerce et CMS',
      'API REST et GraphQL'
    ]
  },
  {
    id: 2,
    title: 'Application Mobile',
    description: 'Applications mobiles natives et cross-platform pour iOS et Android.',
    icon: 'MobileIcon',
    features: [
      'Applications natives iOS/Android',
      'Applications cross-platform',
      'Interface utilisateur intuitive',
      'Performance optimisée'
    ]
  },
  {
    id: 3,
    title: 'Design UI/UX',
    description: 'Interfaces utilisateur intuitives et expériences digitales mémorables.',
    icon: 'PaletteIcon',
    features: [
      'Design centré utilisateur',
      'Prototypage et wireframes',
      'Design systems cohérents',
      'Tests utilisateurs'
    ]
  }
]

// Intersection Observer pour déclencher l'animation
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('Services section is visible!')
          isVisible.value = true
        }
      })
    },
    {
      threshold: 0.7, // Déclenche quand 70% de la section est visible
      rootMargin: '0px 0px -150px 0px' // Déclenche encore plus tard
    }
  )

  // Attendre que le DOM soit prêt et observer la section
  nextTick(() => {
    if (servicesSection.value) {
      console.log('Observing services section')
      observer.observe(servicesSection.value)
    }
  })

  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

</script>

<style scoped>
.bg-dots {
  background-image: radial-gradient(circle, rgba(156, 146, 172, 0.3) 1px, transparent 1px);
  background-size: 60px 60px;
}

/* Animation for cards appearing - DataBahn style */
.service-card {
  opacity: 0;
  transform: translateY(60px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transition-delay: var(--delay, 0s);
}

.service-card[style*="--is-visible: 1"] {
  opacity: 1 !important;
  transform: translateY(0) !important;
}
</style>


