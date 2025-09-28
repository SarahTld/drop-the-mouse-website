<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <!-- Header Section -->
    <section class="pt-32 pb-20 relative overflow-hidden">
      <div class="absolute inset-0 bg-dots opacity-20"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center">
          <div class="mb-6">
            <NuxtLink to="/realisations" class="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200 mb-6">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Retour aux réalisations
            </NuxtLink>
          </div>
          
          <h1 class="text-5xl md:text-7xl font-bold text-white mb-6">
            <span class="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Développement Web</span>
          </h1>
          <p class="text-xl text-white/70 max-w-3xl mx-auto">
            Découvrez nos projets web modernes et innovants, développés avec les technologies les plus récentes
          </p>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="pb-20 relative z-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Tic Tac Toe -->
          <div class="group relative cursor-pointer" @click="openProjectModal(projects[0])">
            <div class="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
              <div class="relative h-64 overflow-hidden">
                <img 
                  v-if="projects[0].screenshot"
                  :src="projects[0].screenshot" 
                  :alt="projects[0].altText"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div v-else class="w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <div class="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center">
                    <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                </div>
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <span class="text-sm text-purple-400 font-medium">{{ projects[0].year }}</span>
                  <span class="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">Web</span>
                </div>
                <h3 class="text-xl font-bold text-white mb-3">{{ projects[0].title }}</h3>
                <p class="text-white/70 text-sm leading-relaxed">{{ projects[0].description }}</p>
              </div>
            </div>
          </div>

          <!-- Weather App -->
          <div class="group relative cursor-pointer" @click="openProjectModal(projects[1])">
            <div class="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
              <div class="relative h-64 overflow-hidden">
                <img 
                  v-if="projects[1].screenshot"
                  :src="projects[1].screenshot" 
                  :alt="projects[1].altText"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div v-else class="w-full h-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                  <div class="w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center">
                    <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.004 5.004 0 00-9.78 2.096A4.001 4.001 0 003 15z"></path>
                    </svg>
                  </div>
                </div>
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <span class="text-sm text-blue-400 font-medium">{{ projects[1].year }}</span>
                  <span class="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">Web</span>
                </div>
                <h3 class="text-xl font-bold text-white mb-3">{{ projects[1].title }}</h3>
                <p class="text-white/70 text-sm leading-relaxed">{{ projects[1].description }}</p>
              </div>
            </div>
          </div>

          <!-- Memory Game -->
          <div class="group relative cursor-pointer" @click="openProjectModal(projects[2])">
            <div class="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
              <div class="relative h-64 overflow-hidden">
                <img 
                  v-if="projects[2].screenshot"
                  :src="projects[2].screenshot" 
                  :alt="projects[2].altText"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div v-else class="w-full h-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                  <div class="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl flex items-center justify-center">
                    <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                  </div>
                </div>
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <span class="text-sm text-green-400 font-medium">{{ projects[2].year }}</span>
                  <span class="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">Web</span>
                </div>
                <h3 class="text-xl font-bold text-white mb-3">{{ projects[2].title }}</h3>
                <p class="text-white/70 text-sm leading-relaxed">{{ projects[2].description }}</p>
              </div>
            </div>
          </div>

          <!-- DROP THE MOUSE Site -->
          <div class="group relative cursor-pointer" @click="openProjectModal(projects[3])">
            <div class="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
              <div class="relative h-64 overflow-hidden">
                <img 
                  v-if="projects[3].screenshot"
                  :src="projects[3].screenshot" 
                  :alt="projects[3].altText"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div v-else class="w-full h-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                  <div class="w-20 h-20 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-2xl flex items-center justify-center">
                    <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                  </div>
                </div>
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <span class="text-sm text-indigo-400 font-medium">{{ projects[3].year }}</span>
                  <span class="px-3 py-1 bg-indigo-500/20 text-indigo-400 text-xs rounded-full">Web</span>
                </div>
                <h3 class="text-xl font-bold text-white mb-3">{{ projects[3].title }}</h3>
                <p class="text-white/70 text-sm leading-relaxed">{{ projects[3].description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Modal -->
    <div 
      v-if="selectedProject"
      class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      @click="closeProjectModal"
    >
      <div 
        class="bg-slate-800 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
        @click.stop
      >
        <div class="p-6 border-b border-white/10">
          <div class="flex items-center justify-between">
            <h2 class="text-3xl font-bold text-white">{{ selectedProject.title }}</h2>
            <button 
              @click="closeProjectModal"
              class="text-white/60 hover:text-white transition-colors duration-200"
            >
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
        
        <div class="p-6">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Project Screenshot -->
            <div class="space-y-4">
              <img 
                v-if="selectedProject.screenshot"
                :src="selectedProject.screenshot" 
                :alt="selectedProject.altText"
                class="w-full rounded-2xl shadow-2xl"
              />
              <div v-else class="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 flex items-center justify-center">
                <div class="w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl flex items-center justify-center">
                  <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
              </div>
              
              <!-- Quick Actions -->
              <div class="flex space-x-4">
                <a 
                  v-if="selectedProject.liveUrl && selectedProject.liveUrl !== '#'"
                  :href="selectedProject.liveUrl" 
                  target="_blank"
                  class="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-center"
                >
                  Voir en ligne
                </a>
                <a 
                  v-if="selectedProject.githubUrl && selectedProject.githubUrl !== '#'"
                  :href="selectedProject.githubUrl" 
                  target="_blank"
                  class="flex-1 bg-white/10 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 text-center"
                >
                  Code source
                </a>
              </div>
            </div>
            
            <!-- Project Details -->
            <div class="space-y-6">
              <div>
                <h3 class="text-xl font-bold text-white mb-3">Description</h3>
                <p class="text-white/70 leading-relaxed">{{ selectedProject.fullDescription }}</p>
              </div>
              
              <div>
                <h3 class="text-xl font-bold text-white mb-3">Technologies utilisées</h3>
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="tech in selectedProject.technologies" 
                    :key="tech"
                    class="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
              
              <div>
                <h3 class="text-xl font-bold text-white mb-3">Points clés</h3>
                <ul class="space-y-2">
                  <li 
                    v-for="detail in selectedProject.details" 
                    :key="detail"
                    class="flex items-start text-white/70"
                  >
                    <svg class="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {{ detail }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const selectedProject = ref(null)

const projects = [
  {
    id: 1,
    title: 'Tic Tac Toe Moderne',
    year: '2024',
    description: 'Jeu de Tic Tac Toe moderne et interactif avec interface élégante et niveaux de difficulté variés.',
    fullDescription: 'Un jeu de Tic Tac Toe moderne et interactif développé avec Nuxt 3 et Vue 3, offrant une expérience de jeu fluide avec une interface utilisateur élégante et des niveaux de difficulté variés. Le projet démontre une maîtrise des technologies modernes et une attention particulière à l\'expérience utilisateur.',
    technologies: ['Nuxt 3', 'Vue 3', 'Tailwind CSS', 'JavaScript'],
    details: [
      'Interface utilisateur moderne et responsive',
      'Niveaux de difficulté variés',
      'Animations fluides et transitions',
      'Déploiement GitHub Pages'
    ],
    liveUrl: 'https://sarahtld.github.io/tic-tac-toe/',
    githubUrl: 'https://github.com/sarahtld/tic-tac-toe',
    screenshot: '/images/tic-tac-toe-screenshot.png',
    altText: 'Capture d\'écran du jeu Tic Tac Toe moderne'
  },
  {
    id: 2,
    title: 'Application Météo',
    year: '2024',
    description: 'Application météo moderne et intuitive avec prévisions en temps réel et interface élégante.',
    fullDescription: 'Une application météo moderne et intuitive développée avec Nuxt 3, offrant des prévisions météorologiques en temps réel avec une interface utilisateur élégante. L\'application intègre des APIs météo pour fournir des données précises et actualisées.',
    technologies: ['Nuxt 3', 'Vue 3', 'Tailwind CSS', 'API Météo'],
    details: [
      'Prévisions météo en temps réel',
      'Interface utilisateur intuitive',
      'Intégration API météorologique',
      'Design responsive et moderne'
    ],
    liveUrl: 'https://sarahtld.github.io/Quel-temps-fait-il/',
    githubUrl: 'https://github.com/sarahtld/Quel-temps-fait-il',
    screenshot: '/images/weather-app-screenshot.png',
    altText: 'Capture d\'écran de l\'application météo'
  },
  {
    id: 3,
    title: 'Jeu de Mémoire',
    year: '2024',
    description: 'Jeu de mémoire moderne et responsive avec design épuré et animations fluides.',
    fullDescription: 'Un jeu de mémoire moderne et responsive développé avec Nuxt 3 et TailwindCSS. Le projet met l\'accent sur l\'expérience utilisateur avec des animations fluides et un design épuré qui s\'adapte parfaitement à tous les appareils.',
    technologies: ['Nuxt 3', 'Vue 3', 'Tailwind CSS', 'CSS Animations'],
    details: [
      'Design responsive et moderne',
      'Animations CSS fluides',
      'Interface utilisateur intuitive',
      'Optimisé pour mobile et desktop'
    ],
    liveUrl: 'https://sarahtld.github.io/memory-game/#/',
    githubUrl: 'https://github.com/sarahtld/memory-game',
    screenshot: '/images/memory-game-screenshot.png',
    altText: 'Capture d\'écran du jeu de mémoire'
  },
  {
    id: 4,
    title: 'Site Corporate DROP THE MOUSE',
    year: '2024',
    description: 'Site web corporate moderne avec design glassmorphism et animations sophistiquées.',
    fullDescription: 'Site web corporate ultra-moderne développé avec Nuxt 3 et Tailwind CSS, présentant un design glassmorphism avec des animations sophistiquées et une interface utilisateur exceptionnelle. Le projet démontre une expertise avancée en développement frontend moderne.',
    technologies: ['Nuxt 3', 'Vue 3', 'Tailwind CSS', 'CSS Animations'],
    details: [
      'Design glassmorphism moderne',
      'Animations CSS sophistiquées',
      'Interface responsive et accessible',
      'Composants modulaires Vue 3'
    ],
    liveUrl: '#',
    githubUrl: '#',
    screenshot: '/images/drop-the-mouse-screenshot.png',
    altText: 'Capture d\'écran du site DROP THE MOUSE'
  }
]

const openProjectModal = (project) => {
  selectedProject.value = project
}

const closeProjectModal = () => {
  selectedProject.value = null
}

// Page metadata
useHead({
  title: 'Développement Web - Nos Réalisations - DROP THE MOUSE',
  meta: [
    { name: 'description', content: 'Découvrez nos projets de développement web : Tic Tac Toe, Application Météo, Jeu de Mémoire et plus encore.' }
  ]
})
</script>

<style scoped>
.bg-dots {
  background-image: radial-gradient(circle, rgba(156, 146, 172, 0.3) 1px, transparent 1px);
  background-size: 60px 60px;
}
</style>


