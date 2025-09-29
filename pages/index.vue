<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
    
    <!-- Background Elements -->
    <div class="absolute inset-0 bg-dots opacity-30"></div>
    
    <!-- Enhanced Floating Elements -->
    <div class="absolute top-20 left-10 w-4 h-4 bg-purple-400 rounded-full animate-float opacity-60"></div>
    <div class="absolute top-40 right-20 w-6 h-6 bg-pink-400 rounded-full animate-float-delayed opacity-40"></div>
    <div class="absolute bottom-40 left-20 w-3 h-3 bg-blue-400 rounded-full animate-float-slow opacity-50"></div>
    <div class="absolute bottom-20 right-10 w-5 h-5 bg-green-400 rounded-full animate-float-delayed opacity-30"></div>
    
    <!-- New Tech Elements -->
    <div class="absolute top-1/3 left-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-70"></div>
    <div class="absolute top-2/3 right-1/3 w-3 h-3 bg-emerald-400 rounded-full animate-bounce opacity-60"></div>
    <div class="absolute top-1/2 left-1/2 w-1 h-1 bg-yellow-400 rounded-full animate-ping opacity-80"></div>
    
    <!-- Gradient Orbs -->
    <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial animate-pulse opacity-20"></div>
    <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial animate-pulse opacity-15"></div>

    <!-- Top Navigation Bar -->
    <nav class="fixed top-0 left-0 right-0 z-50">
      <div class="w-full py-4 flex items-center justify-between" style="padding-left: 20px; padding-right: 20px;">
        <!-- Logo Container with Mask Effect -->
        <div class="logo-container relative text-2xl font-black" style="font-family: 'Neue Montreal', sans-serif;">
          <!-- Logo Blanc (toujours visible) -->
          <span class="text-white">
            DROP THE MOUSE
          </span>
          
          <!-- Logo Coloré avec masque qui suit le bord de la section -->
          <span class="absolute top-0 left-0 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent transition-all duration-100" 
                :style="{ 
                  mask: `linear-gradient(to top, transparent 0%, transparent ${logoMaskProgress}%, black ${logoMaskProgress}%, black 100%)`,
                  WebkitMask: `linear-gradient(to top, transparent 0%, transparent ${logoMaskProgress}%, black ${logoMaskProgress}%, black 100%)`
                }">
            DROP THE MOUSE
          </span>
        </div>
        
        <!-- Navigation Menu -->
        <div class="flex items-center space-x-8">
          <button @click="openContactModal" class="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-purple-500/25 cursor-none">
            Contactez-nous
          </button>
        </div>
      </div>
    </nav>

    <!-- Hero Section - Fixed Background -->
    <section class="hero min-h-screen flex items-center justify-start fixed inset-0 z-0">
      <!-- Animated Background Elements -->
      <div class="absolute inset-0 overflow-hidden">
        <!-- Floating Circles -->
        <div class="floating-circle absolute w-4 h-4 bg-purple-500/20 rounded-full animate-float-1"></div>
        <div class="floating-circle absolute w-6 h-6 bg-pink-500/20 rounded-full animate-float-2"></div>
        <div class="floating-circle absolute w-3 h-3 bg-purple-400/30 rounded-full animate-float-3"></div>
        <div class="floating-circle absolute w-8 h-8 bg-pink-400/15 rounded-full animate-float-4"></div>
        <div class="floating-circle absolute w-5 h-5 bg-purple-600/25 rounded-full animate-float-5"></div>
        
        <!-- Floating Squares -->
        <div class="floating-square absolute w-4 h-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rotate-45 animate-float-6"></div>
        <div class="floating-square absolute w-3 h-3 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rotate-45 animate-float-7"></div>
        <div class="floating-square absolute w-6 h-6 bg-gradient-to-r from-purple-600/15 to-pink-600/15 rotate-45 animate-float-8"></div>
      </div>
      
      <div class="text-left pr-8 w-full max-w-6xl relative z-10" style="padding-left: 250px;">
        <h1 class="text-5xl md:text-7xl font-black text-white mb-8 animate-fade-in-up leading-tight">
          Création de <strong class="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">sites web</strong> et <strong class="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">applications mobiles</strong> sur mesure
        </h1>
        
        <p class="text-xl md:text-2xl text-white/90 mb-12 animate-fade-in-up-delayed max-w-4xl leading-relaxed">
          Une agence digitale qui allie <strong class="text-purple-300">design UX/UI innovant</strong> et <strong class="text-pink-300">développement sur mesure</strong> pour des expériences utilisateur exceptionnelles.
        </p>
        
        <button @click="openContactModal" class="cta-button bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-purple-500/25">
          Parlons de votre projet →
        </button>
      </div>
    </section>

    <!-- Main Content - Scrollable over hero -->
    <div class="relative z-20" style="margin-top: 100vh;">

      <!-- Services Section -->
      <ServicesSection />

      <!-- À propos Section -->
      <section ref="realisationsSection" id="about" class="py-32 bg-white relative overflow-hidden" style="margin-top: -100px;">
        <!-- Background Elements -->
        <div class="absolute inset-0 opacity-40" style="background-image: radial-gradient(circle, rgba(156, 163, 175, 0.8) 1px, transparent 1px); background-size: 20px 20px;"></div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <!-- Section Header -->
          <div class="mb-20">
            <h3 class="text-4xl md:text-5xl font-black text-gray-900 mb-8" style="font-family: 'Neue Montreal', sans-serif;">
              Nos <span class="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">réalisations</span>
            </h3>
            <p class="text-xl text-gray-600 max-w-4xl leading-relaxed mb-12">
              Découvrez nos projets les plus récents et nos créations qui transforment les idées en expériences digitales exceptionnelles. Notre agence web basée à <strong>Perpignan</strong> accompagne les entreprises des <strong>Pyrénées-Orientales</strong> et au-delà.
            </p>
            
            <!-- Filtres par catégorie -->
            <div class="flex justify-center flex-wrap gap-3">
              <button 
                @click="setActiveCategory('all')"
                :class="[
                  'px-6 py-3 rounded-full text-sm font-medium transition-all duration-300',
                  activeCategory === 'all' 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                ]"
              >
                Tous les projets
              </button>
              <button 
                @click="setActiveCategory('web')"
                :class="[
                  'px-6 py-3 rounded-full text-sm font-medium transition-all duration-300',
                  activeCategory === 'web' 
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                ]"
              >
                Applications Web
              </button>
              <button 
                @click="setActiveCategory('game')"
                :class="[
                  'px-6 py-3 rounded-full text-sm font-medium transition-all duration-300',
                  activeCategory === 'game' 
                    ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                ]"
              >
                Jeux Web
              </button>
            </div>
          </div>

          <!-- Projects Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Projet 1: Météo -->
            <div 
              class="project-card bg-gray-50 border border-gray-200 rounded-3xl p-8 hover:bg-gray-100 transition-all duration-500 group" 
              :style="{ '--delay': '0s', '--is-visible': showRealisations ? 1 : 0 }"
              data-category="web"
              :class="{ 'hidden': activeCategory !== 'all' && activeCategory !== 'web' }"
            >
              <!-- Screenshot -->
              <div class="mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-400 p-1 relative">
                <div class="aspect-video bg-white rounded-xl flex items-center justify-center relative">
                  <div class="w-full h-full bg-gradient-to-b from-blue-50 to-cyan-50 rounded-xl flex items-center justify-center">
                    <div class="text-center text-blue-400">
                      <div class="w-16 h-16 bg-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"/>
                        </svg>
                      </div>
                      <p class="text-sm font-medium">Météo App</p>
                    </div>
                  </div>
                  <!-- Badge en haut à gauche -->
                  <div class="absolute top-3 left-3">
                    <span class="px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-medium shadow-lg">Application Web</span>
                  </div>
                </div>
              </div>
              
              <div class="mb-6">
                <h3 class="text-2xl font-bold text-gray-900 mb-3" style="font-family: 'Neue Montreal', sans-serif;">
                  Météo App
                </h3>
                <p class="text-gray-600 leading-relaxed mb-4">
                  Application météo moderne avec prévisions détaillées et interface intuitive.
                </p>
                <a href="https://sarahtld.github.io/Quel-temps-fait-il/" target="_blank" class="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold transition-colors duration-300">
                  Voir le projet
                  <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              </div>
            </div>

            <!-- Projet 2: Memory Game -->
            <div 
              class="project-card bg-gray-50 border border-gray-200 rounded-3xl p-8 hover:bg-gray-100 transition-all duration-500 group" 
              :style="{ '--delay': '0.3s', '--is-visible': showRealisations ? 1 : 0 }"
              data-category="game"
              :class="{ 'hidden': activeCategory !== 'all' && activeCategory !== 'game' }"
            >
              <!-- Screenshot -->
              <div class="mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-pink-400 to-rose-400 p-1 relative">
                <div class="aspect-video bg-white rounded-xl flex items-center justify-center relative">
                  <img 
                    src="/images/memory-game.png" 
                    alt="Capture d'écran - Memory Game"
                    class="w-full h-full object-cover rounded-xl"
                    loading="lazy"
                  />
                  <!-- Badge en haut à gauche -->
                  <div class="absolute top-3 left-3">
                    <span class="px-3 py-1 bg-pink-500 text-white rounded-full text-sm font-medium shadow-lg">Jeu Web</span>
                  </div>
                </div>
              </div>
              
              <div class="mb-6">
                <h3 class="text-2xl font-bold text-gray-900 mb-3" style="font-family: 'Neue Montreal', sans-serif;">
                  Memory Game
                </h3>
                <p class="text-gray-600 leading-relaxed mb-4">
                  Jeu de mémoire interactif avec animations fluides et système de score.
                </p>
                <a href="https://sarahtld.github.io/memory-game/#/" target="_blank" class="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold transition-colors duration-300">
                  Voir le projet
                  <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              </div>
            </div>

            <!-- Projet 3: Tic Tac Toe -->
            <div 
              class="project-card bg-gray-50 border border-gray-200 rounded-3xl p-8 hover:bg-gray-100 transition-all duration-500 group" 
              :style="{ '--delay': '0.6s', '--is-visible': showRealisations ? 1 : 0 }"
              data-category="game"
              :class="{ 'hidden': activeCategory !== 'all' && activeCategory !== 'game' }"
            >
              <!-- Screenshot -->
              <div class="mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-pink-400 to-rose-400 p-1 relative">
                <div class="aspect-video bg-white rounded-xl flex items-center justify-center relative">
                  <img 
                    src="/images/tic-tac-toe-game.png" 
                    alt="Capture d'écran - Tic Tac Toe"
                    class="w-full h-full object-cover rounded-xl"
                    loading="lazy"
                  />
                  <!-- Badge en haut à gauche -->
                  <div class="absolute top-3 left-3">
                    <span class="px-3 py-1 bg-pink-500 text-white rounded-full text-sm font-medium shadow-lg">Jeu Web</span>
                  </div>
                </div>
              </div>
              
              <div class="mb-6">
                <h3 class="text-2xl font-bold text-gray-900 mb-3" style="font-family: 'Neue Montreal', sans-serif;">
                  Tic Tac Toe
                </h3>
                <p class="text-gray-600 leading-relaxed mb-4">
                  Jeu de morpion classique avec interface moderne et logique de jeu avancée.
                </p>
                <a href="https://sarahtld.github.io/tic-tac-toe/" target="_blank" class="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold transition-colors duration-300">
                  Voir le projet
                  <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Process Section -->
      <!-- <section class="py-20 bg-white">
        <div class="max-w-6xl mx-auto px-4 text-center">
          <h2 class="text-4xl font-bold text-gray-900 mb-8">Notre Processus</h2>
          <p class="text-xl text-gray-600">Un processus de développement structuré pour vos projets</p>
        </div>
      </section> -->

      <!-- About Section -->
      <!-- <section class="py-20 bg-gray-100">
        <div class="max-w-6xl mx-auto px-4 text-center">
          <h2 class="text-4xl font-bold text-gray-900 mb-8">À Propos</h2>
          <p class="text-xl text-gray-600">Nous sommes des développeurs passionnés</p>
        </div>
      </section> -->
      
      <!-- Navigation Component - Inside content -->
      <!-- <AppNavigation /> -->
    </div>

    <!-- Scroll Indicator - Mouse Icon -->
    <!-- <div v-if="showScrollIndicator" class="fixed left-1/2 transform -translate-x-1/2 z-0 animate-bounce" style="bottom: 120px;"> -->
      <div v-if="showScrollIndicator" class="fixed left-1/2 transform -translate-x-1/2 z-0 animate-bounce" style="bottom: 50px;">
      <div class="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
        <div class="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
      </div>
    </div>

    <!-- Contact Modal -->
    <div v-if="showContactModal" class="fixed inset-0 z-[9999] flex items-center justify-center p-4" @click="closeContactModal">
      <div class="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" @click.stop>
        <div class="p-8">
          <!-- Modal Header -->
          <div class="flex justify-between items-center mb-8">
            <h2 class="text-3xl font-bold text-gray-900" style="font-family: 'Neue Montreal', sans-serif;">
              Parlons de votre projet
            </h2>
            <button @click="closeContactModal" class="text-gray-400 hover:text-gray-600 transition-colors duration-300">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <!-- Contact Form -->
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block text-sm font-semibold text-gray-700 mb-2">Nom *</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name" 
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  placeholder="Votre nom"
                >
              </div>
              <div>
                <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email" 
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  placeholder="votre@email.com"
                >
              </div>
            </div>

            <div>
              <label for="company" class="block text-sm font-semibold text-gray-700 mb-2">Entreprise</label>
              <input 
                type="text" 
                id="company" 
                v-model="form.company"
                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                placeholder="Votre entreprise"
              >
            </div>

            <div>
              <label for="service" class="block text-sm font-semibold text-gray-700 mb-2">Type de projet *</label>
              <select 
                id="service" 
                v-model="form.service" 
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              >
                <option value="">Sélectionnez un service</option>
                <option value="web">Développement Web</option>
                <option value="mobile">Application Mobile</option>
                <option value="design">Design UI/UX</option>
              </select>
            </div>


            <div>
              <label for="message" class="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
              <textarea 
                id="message" 
                v-model="form.message" 
                required
                rows="5"
                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Décrivez votre projet en détail..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              :disabled="isSubmitting"
              class="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-8 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              <span v-if="!isSubmitting">Envoyer le message</span>
              <span v-else class="flex items-center justify-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Envoi en cours...
              </span>
      </button>
          </form>
        </div>
      </div>
    </div>

    <!-- Modal Backdrop -->
    <div v-if="showContactModal" class="fixed inset-0 bg-black/50 z-[9998]"></div>

    <!-- Scroll to Top Button -->
    <button 
      v-if="showScrollToTop" 
      @click="scrollToTop"
      class="fixed bottom-8 right-8 z-[100] w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
      </svg>
    </button>

  </div>
</template>

<style scoped>
/* Floating animations for hero background */
@keyframes float-1 {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(100px, -50px) rotate(90deg); }
  50% { transform: translate(200px, 0px) rotate(180deg); }
  75% { transform: translate(100px, 50px) rotate(270deg); }
}

@keyframes float-2 {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(-150px, 100px) rotate(120deg); }
  66% { transform: translate(-300px, 0px) rotate(240deg); }
}

@keyframes float-3 {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(300px, -100px) rotate(180deg); }
}

@keyframes float-4 {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(-200px, -150px) rotate(90deg); }
  50% { transform: translate(-400px, 0px) rotate(180deg); }
  75% { transform: translate(-200px, 150px) rotate(270deg); }
}

@keyframes float-5 {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  40% { transform: translate(250px, 80px) rotate(144deg); }
  80% { transform: translate(500px, 0px) rotate(288deg); }
}

@keyframes float-6 {
  0%, 100% { transform: translate(0, 0) rotate(45deg); }
  30% { transform: translate(150px, -100px) rotate(135deg); }
  60% { transform: translate(300px, 0px) rotate(225deg); }
}

@keyframes float-7 {
  0%, 100% { transform: translate(0, 0) rotate(45deg); }
  50% { transform: translate(-250px, 120px) rotate(225deg); }
}

@keyframes float-8 {
  0%, 100% { transform: translate(0, 0) rotate(45deg); }
  20% { transform: translate(200px, -80px) rotate(117deg); }
  40% { transform: translate(400px, 0px) rotate(189deg); }
  60% { transform: translate(200px, 80px) rotate(261deg); }
  80% { transform: translate(0px, 0px) rotate(333deg); }
}

.animate-float-1 {
  animation: float-1 20s ease-in-out infinite;
  top: 20%;
  left: 10%;
}

.animate-float-2 {
  animation: float-2 25s ease-in-out infinite;
  top: 60%;
  right: 15%;
}

.animate-float-3 {
  animation: float-3 18s ease-in-out infinite;
  top: 30%;
  right: 30%;
}

.animate-float-4 {
  animation: float-4 30s ease-in-out infinite;
  bottom: 20%;
  left: 20%;
}

.animate-float-5 {
  animation: float-5 22s ease-in-out infinite;
  top: 70%;
  left: 60%;
}

.animate-float-6 {
  animation: float-6 24s ease-in-out infinite;
  top: 40%;
  left: 70%;
}

.animate-float-7 {
  animation: float-7 26s ease-in-out infinite;
  bottom: 30%;
  right: 40%;
}

.animate-float-8 {
  animation: float-8 28s ease-in-out infinite;
  top: 10%;
  right: 10%;
}

/* Animation for project cards appearing - DataBahn style */
.project-card {
  opacity: 0;
  transform: translateY(60px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transition-delay: var(--delay, 0s);
}

.project-card[style*="--is-visible: 1"] {
  opacity: 1 !important;
  transform: translateY(0) !important;
}
</style>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const showScrollIndicator = ref(true)
const showContactModal = ref(false)
const isSubmitting = ref(false)
const showScrollToTop = ref(false)
const showRealisations = ref(false)
const realisationsSection = ref(null)
const activeCategory = ref('all')

// Contact form data
const form = ref({
  name: '',
  email: '',
  company: '',
  service: '',
  message: ''
})
const windowHeight = ref(0)

// Rotating words for dynamic subtitle - Aidentity style
const currentWord = ref('réussi')
const words = [
  'réussi',
  'de haute qualité', 
  'exceptionnel',
  'innovant',
  'de pointe',
  'révolutionnaire',
  'puissant',
  'évolutif',
  'efficace',
  'magnifique',
  'intuitif',
  'captivant',
  'sécurisé',
  'fiable',
  'rapide',
  'moderne',
  'responsive',
  'dynamique'
]
let currentWordIndex = 0


// Rotating words function - Aidentity style (one word at a time)
const startWordRotation = () => {
  setInterval(() => {
    const wordSlide = document.querySelector('.word-slide')
    if (wordSlide) {
      // First: slide out current word to bottom
      wordSlide.style.animation = 'slideOutDown 0.4s ease-in forwards'
      
      // Wait for slide out to complete, then change word and slide in
      setTimeout(() => {
        currentWordIndex = (currentWordIndex + 1) % words.length
        currentWord.value = words[currentWordIndex]
        
        // Force re-render and slide in new word from top
        wordSlide.style.animation = 'none'
        wordSlide.offsetHeight // Trigger reflow
        wordSlide.style.animation = 'slideInDown 0.6s ease-out'
      }, 400) // Wait for slide out to complete
    }
  }, 2500) // Change every 2.5 seconds to allow full animation
}

// Scroll detection for scroll indicator and menu position - We Are Small style
const scrollY = ref(0)
const logoMaskProgress = ref(0)

const handleScroll = () => {
  scrollY.value = window.scrollY
  showScrollIndicator.value = scrollY.value < 50
  showScrollToTop.value = scrollY.value > 500 // Show scroll to top button after scrolling 500px
}

// Fonction pour calculer le masque basé sur la position de la section
const updateLogoMask = () => {
  const logo = document.querySelector('.logo-container')
  const servicesSection = document.querySelector('#services')
  const realisationsSection = document.querySelector('#about')
  
  if (!logo || !servicesSection || !realisationsSection) return
  
  const logoRect = logo.getBoundingClientRect()
  const servicesRect = servicesSection.getBoundingClientRect()
  const realisationsRect = realisationsSection.getBoundingClientRect()
  
  // Calculer la position relative de la section par rapport au logo
  const logoTop = logoRect.top
  const logoBottom = logoRect.bottom
  const servicesTop = servicesRect.top
  const realisationsTop = realisationsRect.top
  
  // PRIORITÉ 1: Si on a passé la section réalisations, logo reste coloré
  if (realisationsTop < logoTop) {
    logoMaskProgress.value = 0
  }
  // PRIORITÉ 2: Si on est dans la section Nos réalisations, transition progressive vers la couleur
  else if (realisationsTop <= logoBottom && realisationsTop >= logoTop) {
    const realisationsOverlap = logoBottom - realisationsTop
    const logoHeight = logoRect.height
    // Commencer la transition plus bas (offset de 30% de la hauteur du logo)
    const offset = logoHeight * 0.3
    const adjustedOverlap = Math.max(0, realisationsOverlap - offset)
    const realisationsProgress = (adjustedOverlap / (logoHeight - offset)) * 100
    logoMaskProgress.value = Math.max(0, Math.min(100, 100 - realisationsProgress))
  }
  // Si on est entré dans la section réalisations (en dessous du logo), logo coloré
  else if (realisationsTop < logoTop) {
    logoMaskProgress.value = 100
  }
  // PRIORITÉ 3: Si la section services est au-dessus du logo, masque complet (logo blanc)
  else if (servicesTop >= logoBottom) {
    logoMaskProgress.value = 0
  }
  // PRIORITÉ 4: Si la section services est en dessous du logo, pas de masque (logo coloré)
  else if (servicesTop <= logoTop) {
    logoMaskProgress.value = 100
  }
  // PRIORITÉ 5: Si la section services chevauche le logo, calculer le pourcentage
  else {
    const overlap = logoBottom - servicesTop
    const logoHeight = logoRect.height
    const progress = (overlap / logoHeight) * 100
    logoMaskProgress.value = Math.max(0, Math.min(100, progress))
  }
}

// Setup logo transition
const setupLogoTransition = () => {
  // Mettre à jour au scroll
  window.addEventListener('scroll', updateLogoMask)
  // Mettre à jour au resize
  window.addEventListener('resize', updateLogoMask)
  // Mettre à jour initial
  updateLogoMask()
}

// Scroll to section function
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}

// Contact modal functions
const openContactModal = () => {
  showContactModal.value = true
  document.body.style.overflow = 'hidden' // Prevent background scrolling
}

const closeContactModal = () => {
  showContactModal.value = false
  document.body.style.overflow = 'auto' // Restore scrolling
}

// Form submission
const submitForm = async () => {
  isSubmitting.value = true
  
  try {
    // Simulate API call - replace with actual form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    form.value = {
      name: '',
      email: '',
      company: '',
      service: '',
      message: ''
    }
    
    // Close modal
    closeContactModal()
    
    // Show success message (you can replace this with a toast notification)
    alert('Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.')
    
  } catch (error) {
    console.error('Error submitting form:', error)
    alert('Une erreur est survenue. Veuillez réessayer.')
  } finally {
    isSubmitting.value = false
  }
}

// Scroll to top function
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// Filter projects by category
const setActiveCategory = (category) => {
  activeCategory.value = category
}


// Lifecycle hooks
onMounted(() => {
  windowHeight.value = window.innerHeight
  startWordRotation()
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', () => {
    windowHeight.value = window.innerHeight
  })
  
  // Setup logo transition after DOM is ready
  nextTick(() => {
    setupLogoTransition()
  })

  // Intersection Observer pour la section Nos réalisations
  const realisationsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('Realisations section is visible!')
          showRealisations.value = true
        }
      })
    },
    {
      threshold: 0.3, // Déclenche quand 30% de la section est visible
      rootMargin: '0px 0px -50px 0px' // Déclenche plus tôt
    }
  )

  // Observer la section réalisations
  nextTick(() => {
    if (realisationsSection.value) {
      console.log('Observing realisations section')
      realisationsObserver.observe(realisationsSection.value)
    }
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('scroll', updateLogoMask)
  window.removeEventListener('resize', updateLogoMask)
})

// Page metadata
useHead({
  title: 'DROP THE MOUSE - Agence Web à Perpignan | Création de Sites & Apps Mobiles',
  meta: [
    { name: 'description', content: 'Agence web DROP THE MOUSE à Perpignan. Création de sites web et applications mobiles sur mesure, design UX/UI innovant. Développeurs experts dans les Pyrénées-Orientales.' },
    { name: 'keywords', content: 'agence web perpignan, création site web perpignan, développement application mobile perpignan, design UX UI perpignan, développeur web pyrénées orientales, agence digitale perpignan' },
    { name: 'author', content: 'DROP THE MOUSE' },
    { name: 'robots', content: 'index, follow' },
    { name: 'language', content: 'fr' },
    { name: 'geo.region', content: 'FR-66' },
    { name: 'geo.placename', content: 'Perpignan' },
    { name: 'geo.position', content: '42.6886;2.8948' },
    { name: 'ICBM', content: '42.6886, 2.8948' },
    { property: 'og:title', content: 'DROP THE MOUSE - Agence Web à Perpignan | Création de Sites & Apps Mobiles' },
    { property: 'og:description', content: 'Agence web DROP THE MOUSE à Perpignan. Création de sites web et applications mobiles sur mesure, design UX/UI innovant.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'fr_FR' },
    { property: 'og:site_name', content: 'DROP THE MOUSE' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'DROP THE MOUSE - Agence Web à Perpignan' },
    { name: 'twitter:description', content: 'Agence web spécialisée dans la création de sites et applications mobiles à Perpignan.' }
  ],
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Neue+Montreal:wght@300;400;500;600;700&family=Manrope:wght@300;400;500;600;700&display=swap' },
    { rel: 'canonical', href: 'https://drop-the-mouse.com/' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "DROP THE MOUSE",
        "description": "Agence web spécialisée dans la création de sites web et applications mobiles sur mesure à Perpignan",
        "url": "https://drop-the-mouse.com",
        "logo": "https://drop-the-mouse.com/logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "",
          "addressLocality": "Perpignan",
          "postalCode": "66000",
          "addressRegion": "Pyrénées-Orientales",
          "addressCountry": "FR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "42.6886",
          "longitude": "2.8948"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "",
          "contactType": "customer service",
          "areaServed": "FR",
          "availableLanguage": "French"
        },
        "sameAs": [
          "https://github.com/sarahtld",
          "https://www.linkedin.com/company/drop-the-mouse/",
          "https://www.facebook.com/dropthemouse",
          "https://www.instagram.com/dropthemouse/",
          "https://www.tiktok.com/@dropthemouse"
        ],
        "service": [
          {
            "@type": "Service",
            "name": "Création de sites web",
            "description": "Développement de sites web modernes et responsifs"
          },
          {
            "@type": "Service", 
            "name": "Applications mobiles",
            "description": "Développement d'applications mobiles natives et cross-platform"
          },
          {
            "@type": "Service",
            "name": "Design UX/UI",
            "description": "Conception d'interfaces utilisateur et d'expériences digitales"
          }
        ]
      })
    }
  ]
})
</script>

<style scoped>
/* Police globale Manrope pour tout le texte */
* {
  font-family: 'Manrope', sans-serif;
}

/* Logo utilise Neue Montreal */
.logo-container {
  font-family: 'Neue Montreal', sans-serif !important;
}

/* Background dots pattern */
.bg-dots {
  background-image: radial-gradient(circle, rgba(156, 146, 172, 0.3) 1px, transparent 1px);
  background-size: 60px 60px;
}

/* Custom Cursor - DISABLED */
.custom-cursor {
  display: none;
}

/* Normal cursor restored */
* {
  cursor: auto !important;
}

/* Background Elements */
.bg-dots {
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
}

.bg-gradient-radial {
  background: radial-gradient(circle, rgba(139, 92, 246, 0.3), transparent 70%);
}

/* Floating Animations */
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

@keyframes float-delayed {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(-180deg); }
}

@keyframes float-slow {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-25px) rotate(90deg); }
}


/* Fade In Animations */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 1s ease-out;
}

.animate-fade-in-up-delayed {
  animation: fade-in-up 1s ease-out 0.3s both;
}

/* Word Sliding Animation - Aidentity Style */
.word-container {
  position: relative;
  display: inline-block;
  overflow: hidden;
  height: 1.2em;
  vertical-align: top;
}

.word-slide {
  display: block;
  animation: slideInDown 0.6s ease-out;
  will-change: transform, opacity;
}

/* Ensure animations work properly */
.word-slide[style*="slideOutDown"] {
  animation: slideOutDown 0.4s ease-in forwards !important;
}

.word-slide[style*="slideInDown"] {
  animation: slideInDown 0.6s ease-out !important;
}

@keyframes slideInDown {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slideOutDown {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(100%);
    opacity: 0;
  }
}

/* Service Cards */
.service-card {
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  padding: 3rem;
  transition: all 0.3s ease;
  overflow: hidden;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card-content {
  position: relative;
  z-index: 2;
  text-align: center;
}

.card-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1));
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 25px;
}

.service-card:hover .card-glow {
  opacity: 1;
}

.service-card:hover {
  transform: translateY(-15px);
  border-color: rgba(139, 92, 246, 0.3);
  box-shadow: 0 30px 60px rgba(139, 92, 246, 0.25);
}

.service-icon {
  display: block;
  text-align: center;
  margin-bottom: 1.5rem;
}

.service-title {
  margin-bottom: 1rem;
  line-height: 1.2;
}

.service-description {
  line-height: 1.6;
  margin-bottom: 2rem;
  flex-grow: 1;
}

.service-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.service-tag {
  background: rgba(139, 92, 246, 0.2);
  color: #8b5cf6;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  border: 1px solid rgba(139, 92, 246, 0.3);
  font-weight: 500;
}

/* Tech Categories */
.tech-category {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  padding: 2.5rem;
}

.category-title {
  margin-bottom: 2rem;
  color: #8b5cf6;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
}

.tech-item {
  background: rgba(139, 92, 246, 0.1);
  color: #8b5cf6;
  padding: 0.75rem 1rem;
  border-radius: 15px;
  text-align: center;
  font-size: 0.875rem;
  border: 1px solid rgba(139, 92, 246, 0.2);
  transition: all 0.3s ease;
  font-weight: 500;
}

.tech-item:hover {
  background: rgba(139, 92, 246, 0.2);
  transform: translateY(-2px);
  border-color: rgba(139, 92, 246, 0.4);
}

/* Process Container */
.process-container {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  padding: 4rem;
}

.process-step {
  text-align: center;
  padding: 2.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 25px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.process-step:hover {
  transform: translateY(-10px);
  border-color: rgba(139, 92, 246, 0.3);
  box-shadow: 0 25px 50px rgba(139, 92, 246, 0.2);
}

.step-number {
  width: 60px;
  height: 60px;
  background: linear-gradient(45deg, #8b5cf6, #ec4899);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 1.5rem;
  margin: 0 auto 1.5rem;
}

.step-icon {
  display: block;
  margin-bottom: 1.5rem;
}

.step-title {
  margin-bottom: 1rem;
  line-height: 1.2;
}

.step-description {
  line-height: 1.6;
}

/* Tech Modal */
.tech-modal {
  background: linear-gradient(135deg, #1e1b4b, #312e81);
  border-radius: 25px;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  border: 1px solid rgba(139, 92, 246, 0.3);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.modal-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: white;
}

.close-button {
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 2rem;
  transition: color 0.3s ease;
}

.close-button:hover {
  color: white;
}

.modal-content {
  padding: 2rem;
}

.tech-category-modal {
  margin-bottom: 2.5rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.category-title-modal {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #8b5cf6;
}

.tech-list-modal {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
}

.tech-item-modal {
  background: rgba(139, 92, 246, 0.2);
  color: #8b5cf6;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-size: 1rem;
  border: 1px solid rgba(139, 92, 246, 0.3);
  transition: all 0.3s ease;
  font-weight: 500;
}

.tech-item-modal:hover {
  background: rgba(139, 92, 246, 0.3);
  transform: translateY(-2px);
}

/* Responsive */
@media (max-width: 768px) {
  .tech-grid {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }
  
  .process-steps {
    grid-template-columns: 1fr;
  }
  
  .process-container {
    padding: 2rem;
  }
  
  .tech-modal {
    margin: 1rem;
    max-width: calc(100vw - 2rem);
  }
  
  .service-card {
    min-height: 350px;
    padding: 2rem;
  }
  
  /* Hide custom cursor on mobile */
  .custom-cursor {
    display: none;
  }
  
  /* Restore default cursor on mobile */
  * {
    cursor: auto !important;
  }
}


/* Scroll indicator mouse icon */
.scroll-indicator {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0) translateX(-50%);
  }
  40% {
    transform: translateY(-10px) translateX(-50%);
  }
  60% {
    transform: translateY(-5px) translateX(-50%);
  }
}

/* Modal Slide - Like klmnko.de */
.modal-slide {
  background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%);
  min-height: 100vh;
  width: 100%;
  transform: translateY(100%);
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-slide.modal-visible {
  transform: translateY(0);
  opacity: 1;
}

.modal-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  text-align: center;
  position: relative;
  z-index: 1;
}

.modal-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #8b5cf6, #ec4899, #06b6d4);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
}

.modal-description {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.modal-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.modal-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.modal-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.modal-card:hover::before {
  opacity: 1;
}

.modal-card:hover {
  transform: translateY(-5px);
  border-color: rgba(139, 92, 246, 0.3);
  box-shadow: 0 20px 40px rgba(139, 92, 246, 0.2);
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
}

.modal-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
}

.modal-card p {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  position: relative;
  z-index: 1;
}

.modal-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary, .btn-secondary {
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  position: relative;
  overflow: hidden;
}

.btn-primary {
  background: linear-gradient(135deg, #8b5cf6, #ec4899);
  color: white;
  box-shadow: 0 10px 30px rgba(139, 92, 246, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 40px rgba(139, 92, 246, 0.4);
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
}

/* Responsive */
@media (max-width: 768px) {
  .modal-title {
    font-size: 2.5rem;
  }
  
  .modal-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .modal-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .btn-primary, .btn-secondary {
    width: 100%;
    max-width: 300px;
  }
}



/* Main page container with rounded transparent background */
.main-page-container {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
}

/* Margin top for screen height */
.mt-screen {
  margin-top: 100vh;
}
</style>
