<template>
  <div v-if="service" class="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 bg-dots opacity-30"></div>
    
    <!-- Top Navigation Bar -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10 transition-all duration-300 nav-animated">
      <div class="w-full py-4 flex items-center justify-between px-5">
        <!-- Logo -->
        <NuxtLink to="/" class="text-2xl font-black text-white hover:opacity-80 transition-all duration-300 transform hover:scale-105" style="font-family: 'Neue Montreal', sans-serif;">
          DROP THE MOUSE
        </NuxtLink>
        
        <!-- Contact Button -->
        <NuxtLink 
          to="/#contact"
          class="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl hover:shadow-purple-500/25 button-pulse"
        >
          Contactez-nous
        </NuxtLink>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <!-- Left: Text Content -->
          <div>
            <div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-3xl mb-6 shadow-2xl shadow-purple-500/20 float-animation">
              <div v-if="service.icon === 'CodeIcon'" class="w-12 h-12 text-white">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-1 1v1h12v-1l-1-1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H4V5h16v11z"/>
                  <path d="M6 8h12v2H6V8zm0 3h12v2H6v-2z"/>
                </svg>
              </div>
              <div v-else-if="service.icon === 'MobileIcon'" class="w-12 h-12 text-white">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
                  <path d="M12 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5z"/>
                </svg>
              </div>
              <div v-else-if="service.icon === 'PaletteIcon'" class="w-12 h-12 text-white">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 8 6.5 8 8 8.67 8 9.5 7.33 11 6.5 11zm3-4C8.67 7 8 6.33 8 5.5S8.67 4 9.5 4s1.5.67 1.5 1.5S10.33 7 9.5 7zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 4 14.5 4 16 4.67 16 5.5 15.33 7 14.5 7zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 8 17.5 8s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                </svg>
              </div>
            </div>
            <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-on-scroll text-reveal">
              Devenez leader grâce à<br/>
              <span class="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent gradient-animated">{{ service.title }}</span>
            </h1>
            <p class="text-xl md:text-2xl text-white/80 mb-8 animate-on-scroll delay-200">
              {{ service.description }}
            </p>
          </div>

          <!-- Right: Large Illustration/Mockup -->
          <div class="relative animate-on-scroll animate-slide-right delay-300">
            <div class="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl pulse-animation"></div>
            <div class="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl hover-lift">
              <div v-if="service.icon === 'CodeIcon'" class="relative">
                <!-- Mockup d'écran d'ordinateur -->
                <div class="bg-slate-800 rounded-lg p-4 shadow-xl">
                  <div class="flex gap-2 mb-3">
                    <div class="w-3 h-3 rounded-full bg-red-500"></div>
                    <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div class="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div class="bg-slate-900 rounded p-6 space-y-3">
                    <div class="h-4 bg-purple-500/30 rounded w-3/4"></div>
                    <div class="h-4 bg-pink-500/30 rounded w-full"></div>
                    <div class="h-4 bg-purple-500/30 rounded w-5/6"></div>
                    <div class="h-4 bg-pink-500/30 rounded w-4/5"></div>
                    <div class="flex gap-2 mt-4">
                      <div class="h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded w-24"></div>
                      <div class="h-8 bg-slate-700 rounded w-20"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else-if="service.icon === 'MobileIcon'" class="relative">
                <!-- Mockup de téléphone -->
                <div class="bg-slate-800 rounded-3xl p-3 shadow-xl mx-auto" style="width: 200px;">
                  <div class="bg-slate-900 rounded-2xl p-4">
                    <div class="h-6 bg-slate-700 rounded mb-3"></div>
                    <div class="space-y-2 mb-4">
                      <div class="h-3 bg-purple-500/30 rounded"></div>
                      <div class="h-3 bg-pink-500/30 rounded w-4/5"></div>
                    </div>
                    <div class="h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg mb-4"></div>
                    <div class="flex gap-2">
                      <div class="h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded flex-1"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else-if="service.icon === 'PaletteIcon'" class="relative">
                <!-- Mockup de design -->
                <div class="bg-slate-800 rounded-lg p-6 shadow-xl">
                  <div class="grid grid-cols-3 gap-3 mb-4">
                    <div class="h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg"></div>
                    <div class="h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg"></div>
                    <div class="h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg"></div>
                    <div class="h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg"></div>
                    <div class="h-16 bg-gradient-to-br from-red-500 to-rose-500 rounded-lg"></div>
                    <div class="h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg"></div>
                  </div>
                  <div class="h-4 bg-slate-700 rounded w-2/3 mb-2"></div>
                  <div class="h-4 bg-slate-700 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Points clés -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-left animate-on-scroll delay-100 hover-lift group cursor-pointer">
            <div class="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg group-hover:shadow-purple-500/50">
              <svg class="w-6 h-6 text-white transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-white font-semibold text-lg mb-2">Livraison rapide</h3>
            <p class="text-white/70 text-sm">Projet livré en 72h</p>
          </div>
          <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-left animate-on-scroll delay-200 hover-lift group cursor-pointer">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg group-hover:shadow-blue-500/50">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 class="text-white font-semibold text-lg mb-2">Accompagnement expert</h3>
            <p class="text-white/70 text-sm">Sur-mesure et personnalisé</p>
          </div>
          <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-left animate-on-scroll delay-300 hover-lift group cursor-pointer">
            <div class="w-12 h-12 bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg group-hover:shadow-green-500/50">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-white font-semibold text-lg mb-2">Design premium</h3>
            <p class="text-white/70 text-sm">Photos & vidéos incluses</p>
          </div>
          <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-left animate-on-scroll delay-400 hover-lift group cursor-pointer">
            <div class="w-12 h-12 bg-gradient-to-br from-orange-500/30 to-yellow-500/30 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg group-hover:shadow-orange-500/50">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <h3 class="text-white font-semibold text-lg mb-2">SEO inclus</h3>
            <p class="text-white/70 text-sm">Référencement naturel</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section: Des sites conçus pour durer et performer -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-b from-transparent to-slate-900/50">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <!-- Image/Illustration -->
          <div class="relative order-2 lg:order-1 animate-on-scroll animate-slide-left">
            <div class="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-3xl blur-3xl transform rotate-6 pulse-animation"></div>
            <div class="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl hover-lift">
              <!-- Mockup de site web -->
              <div class="bg-slate-800 rounded-lg p-4">
                <div class="flex gap-2 mb-3">
                  <div class="w-3 h-3 rounded-full bg-red-500"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div class="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div class="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg p-6 mb-3">
                  <div class="h-6 bg-white/20 rounded w-2/3 mb-2"></div>
                  <div class="h-4 bg-white/10 rounded w-1/2"></div>
                </div>
                <div class="grid grid-cols-3 gap-2 mb-3">
                  <div class="h-20 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded"></div>
                  <div class="h-20 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded"></div>
                  <div class="h-20 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded"></div>
                </div>
                <div class="space-y-2">
                  <div class="h-3 bg-slate-700 rounded"></div>
                  <div class="h-3 bg-slate-700 rounded w-5/6"></div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Text Content -->
          <div class="order-1 lg:order-2 animate-on-scroll animate-slide-right delay-200">
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
              Des sites conçus pour <span class="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent gradient-animated">durer et performer</span>
            </h2>
            <p class="text-xl text-white/70 mb-8">
              Les sites que nous créons ne sont pas seulement esthétiques : ils sont conçus pour être rapides, sécurisés et faciles à référencer.
            </p>
            <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-white font-bold text-lg">Performance optimale</h3>
                  <p class="text-white/70 text-sm">Temps de chargement < 2 secondes</p>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-white font-bold text-lg">SEO intégré</h3>
                  <p class="text-white/70 text-sm">Référencement naturel inclus</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Grille d'avantages -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 animate-on-scroll hover-lift delay-100">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg group-hover:shadow-blue-500/50">
              <svg class="w-8 h-8 text-white transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-white font-bold text-xl mb-3">Chargement ultra-rapide</h3>
            <p class="text-white/70 leading-relaxed">
              Grâce à une infrastructure optimisée, vos pages s'affichent en un éclair, offrant une expérience fluide à vos visiteurs et un meilleur classement sur Google.
            </p>
          </div>

          <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 animate-on-scroll hover-lift delay-200">
            <div class="w-16 h-16 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-white font-bold text-xl mb-3">Design responsive et intuitif</h3>
            <p class="text-white/70 leading-relaxed">
              Votre site s'adapte parfaitement à tous les appareils (mobile, tablette, desktop) pour une expérience utilisateur optimale et engageante.
            </p>
          </div>

          <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 animate-on-scroll hover-lift delay-300">
            <div class="w-16 h-16 bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 class="text-white font-bold text-xl mb-3">Sécurité de niveau entreprise</h3>
            <p class="text-white/70 leading-relaxed">
              Des protocoles de sécurité avancés (SSL, protection contre les attaques, sauvegardes régulières) pour garantir la protection de vos données.
            </p>
          </div>

          <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 animate-on-scroll hover-lift delay-100">
            <div class="w-16 h-16 bg-gradient-to-br from-orange-500/30 to-yellow-500/30 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <h3 class="text-white font-bold text-xl mb-3">Facilité de référencement (SEO)</h3>
            <p class="text-white/70 leading-relaxed">
              Nos sites sont conçus avec les meilleures pratiques SEO pour vous positionner en tête des recherches et attirer un maximum de trafic qualifié.
            </p>
          </div>

          <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 animate-on-scroll hover-lift delay-200">
            <div class="w-16 h-16 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
              </svg>
            </div>
            <h3 class="text-white font-bold text-xl mb-3">Une infrastructure robuste et évolutive</h3>
            <p class="text-white/70 leading-relaxed">
              Nos sites sont conçus pour s'adapter à la croissance de votre activité, avec des fonctionnalités extensibles selon vos besoins futurs.
            </p>
          </div>

          <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 animate-on-scroll hover-lift delay-300">
            <div class="w-16 h-16 bg-gradient-to-br from-pink-500/30 to-rose-500/30 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
              </svg>
            </div>
            <h3 class="text-white font-bold text-xl mb-3">Assistance professionnelle dédiée</h3>
            <p class="text-white/70 leading-relaxed">
              Un suivi personnalisé après la mise en ligne pour répondre à vos questions, assurer des mises à jour régulières, et maintenir la performance.
            </p>
          </div>
        </div>

        <!-- Description détaillée avec image -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 animate-on-scroll animate-slide-left">
            <div class="text-white text-lg md:text-xl leading-relaxed space-y-6" v-html="service.seoContent.description"></div>
          </div>
          <div class="relative animate-on-scroll animate-slide-right delay-200">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-3xl blur-3xl transform -rotate-6 pulse-animation"></div>
            <div class="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl h-full flex items-center justify-center">
              <!-- Illustration de code/technologies -->
              <div class="w-full">
                <div class="bg-slate-800 rounded-lg p-4">
                  <div class="flex gap-2 mb-3">
                    <div class="w-2 h-2 rounded-full bg-red-500"></div>
                    <div class="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div class="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <div class="space-y-2 font-mono text-sm">
                    <div class="text-purple-400">const <span class="text-blue-400">technologies</span> = [</div>
                    <div class="text-green-400 pl-4">'React', 'Vue.js', 'Nuxt'</div>
                    <div class="text-green-400 pl-4">'TypeScript', 'Node.js'</div>
                    <div class="text-purple-400">];</div>
                    <div class="text-pink-400 mt-4">// Performance & SEO</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section: Technologies et outils -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">Technologies et outils utilisés</h2>
          <p class="text-xl text-white/70 max-w-3xl mx-auto">
            Nous utilisons les dernières technologies pour créer des solutions performantes et évolutives.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div 
            v-for="(tech, index) in service.seoContent.technologies" 
            :key="tech"
            class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 relative group animate-on-scroll hover-lift cursor-pointer"
            :style="`animation-delay: ${index * 0.1}s`"
          >
            <div class="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div class="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mb-4"></div>
            <p class="text-white text-base leading-relaxed">{{ tech }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section: Avantages -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-b from-transparent to-slate-900/50">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <!-- Image/Illustration -->
          <div class="relative order-2 lg:order-1">
            <div class="absolute inset-0 bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-3xl blur-3xl transform rotate-6"></div>
            <div class="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl">
              <!-- Graphique de performance -->
              <div class="bg-slate-800 rounded-lg p-6">
                <div class="flex items-end justify-between h-32 gap-2 mb-4">
                  <div class="flex-1 bg-gradient-to-t from-green-500 to-emerald-500 rounded-t bar-animate" style="height: 40%"></div>
                  <div class="flex-1 bg-gradient-to-t from-green-500 to-emerald-500 rounded-t bar-animate" style="height: 60%"></div>
                  <div class="flex-1 bg-gradient-to-t from-green-500 to-emerald-500 rounded-t bar-animate" style="height: 80%"></div>
                  <div class="flex-1 bg-gradient-to-t from-green-500 to-emerald-500 rounded-t bar-animate" style="height: 100%"></div>
                  <div class="flex-1 bg-gradient-to-t from-green-500 to-emerald-500 rounded-t bar-animate" style="height: 70%"></div>
                </div>
                <div class="text-center">
                  <div class="text-green-400 text-2xl font-bold">+250%</div>
                  <div class="text-white/70 text-sm">Performance améliorée</div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Text Content -->
          <div class="order-1 lg:order-2">
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">Avantages et bénéfices</h2>
            <p class="text-xl text-white/70 mb-8">
              Découvrez tous les avantages de notre approche professionnelle.
            </p>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div 
            v-for="(advantage, index) in service.seoContent.advantages" 
            :key="advantage"
            class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 flex items-start gap-4 animate-on-scroll hover-lift group cursor-pointer"
            :style="`animation-delay: ${index * 0.1}s`"
          >
            <div class="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mt-2 flex-shrink-0 transition-all duration-300 group-hover:scale-150 group-hover:shadow-lg group-hover:shadow-green-400/50"></div>
            <p class="text-white text-lg leading-relaxed transition-transform duration-300 group-hover:translate-x-2">{{ advantage }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section: Processus -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">Une méthode claire, des résultats rapides</h2>
          <p class="text-xl text-white/70 max-w-3xl mx-auto">
            Notre processus structuré garantit un projet réussi dans les délais.
          </p>
        </div>
        
        <!-- Timeline visuelle -->
        <div class="relative mb-12 hidden lg:block">
          <div class="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-purple-500/50 transform -translate-y-1/2"></div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="(step, index) in service.seoContent.process" 
            :key="step"
            class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 relative group animate-on-scroll hover-lift cursor-pointer"
            :style="`animation-delay: ${index * 0.15}s`"
          >
            <!-- Image/Illustration pour chaque étape -->
            <div class="mb-6">
              <div class="w-16 h-16 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-2xl flex items-center justify-center font-bold text-white text-2xl shadow-lg mb-4 relative transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-2xl group-hover:shadow-purple-500/50">
                {{ index + 1 }}
                <div class="absolute -inset-1 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <!-- Mini illustration -->
              <div class="w-full h-24 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg flex items-center justify-center">
                <div v-if="index === 0" class="w-12 h-12 bg-blue-500/30 rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                </div>
                <div v-else-if="index === 1" class="w-12 h-12 bg-green-500/30 rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                  </svg>
                </div>
                <div v-else-if="index === 2" class="w-12 h-12 bg-yellow-500/30 rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div v-else class="w-12 h-12 bg-purple-500/30 rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <p class="text-white text-lg leading-relaxed">{{ step }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section: Fonctionnalités -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-b from-transparent to-slate-900/50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">Fonctionnalités incluses</h2>
          <p class="text-xl text-white/70 max-w-3xl mx-auto">
            Toutes les fonctionnalités essentielles pour votre réussite digitale.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div 
            v-for="(feature, index) in service.features" 
            :key="feature"
            class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 flex items-center gap-4 animate-on-scroll hover-lift group cursor-pointer"
            :style="`animation-delay: ${index * 0.1}s`"
          >
            <div class="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full flex-shrink-0 transition-all duration-300 group-hover:scale-150 group-hover:shadow-lg group-hover:shadow-purple-400/50"></div>
            <span class="text-white text-lg font-medium transition-transform duration-300 group-hover:translate-x-2">{{ feature }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Section: CTA -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="max-w-4xl mx-auto">
          <div class="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/20 rounded-3xl p-12 md:p-16 text-center animate-on-scroll hover-lift">
          <div class="w-20 h-20 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl pulse-animation transition-transform duration-300 hover:scale-110 hover:rotate-12">
            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
            </svg>
          </div>
          
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">Prêt à démarrer votre projet ?</h2>
          <p class="text-white/80 mb-10 text-xl max-w-2xl mx-auto leading-relaxed">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins et obtenir un devis gratuit.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink 
              to="/#contact"
              class="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-8 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-lg"
            >
              Demander un devis gratuit
            </NuxtLink>
            <NuxtLink 
              to="/#contact"
              class="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white py-4 px-8 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 text-lg"
            >
              Nous contacter
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div v-else class="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-white mb-4">Service non trouvé</h1>
      <NuxtLink to="/" class="text-purple-400 hover:text-purple-300">Retour à l'accueil</NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const route = useRoute()
const { getServiceBySlug } = useServices()

const service = getServiceBySlug(String(route.params.slug))

// Animation au scroll avec Intersection Observer
let observer = null
let handleNavScroll = null
let handleParallax = null

onMounted(() => {
  if (process.client) {
    // Intersection Observer pour les animations au scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    // Observer tous les éléments avec la classe animate-on-scroll
    const animateElements = document.querySelectorAll('.animate-on-scroll')
    animateElements.forEach((el) => observer.observe(el))

    // Animation des barres de graphique
    const bars = document.querySelectorAll('.bar-animate')
    bars.forEach((bar, index) => {
      setTimeout(() => {
        bar.style.animation = `barGrow 1s ease-out forwards`
        bar.style.animationDelay = `${index * 0.1}s`
      }, 100)
    })

    // Animation du nav au scroll
    const nav = document.querySelector('nav')
    
    handleNavScroll = () => {
      const currentScroll = window.pageYOffset
      
      if (currentScroll > 100) {
        nav?.classList.add('nav-scrolled')
      } else {
        nav?.classList.remove('nav-scrolled')
      }
    }

    window.addEventListener('scroll', handleNavScroll)

    // Animation parallaxe pour les backgrounds
    handleParallax = () => {
      const scrolled = window.pageYOffset
      const parallaxElements = document.querySelectorAll('.parallax')
      parallaxElements.forEach((el) => {
        const speed = el.dataset.speed || 0.5
        el.style.transform = `translateY(${scrolled * speed}px)`
      })
    }

    window.addEventListener('scroll', handleParallax)
  }
})

onUnmounted(() => {
  if (process.client) {
    if (observer) {
      observer.disconnect()
    }
    if (handleNavScroll) {
      window.removeEventListener('scroll', handleNavScroll)
    }
    if (handleParallax) {
      window.removeEventListener('scroll', handleParallax)
    }
  }
})

// SEO Meta tags
useHead({
  title: service ? `${service.title} - DROP THE MOUSE` : 'Service - DROP THE MOUSE',
  meta: [
    {
      name: 'description',
      content: service ? service.description : 'Découvrez nos services de développement web, mobile et design UI/UX.'
    },
    {
      property: 'og:title',
      content: service ? `${service.title} - DROP THE MOUSE` : 'Service - DROP THE MOUSE'
    },
    {
      property: 'og:description',
      content: service ? service.description : 'Découvrez nos services de développement web, mobile et design UI/UX.'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ]
})
</script>

<style scoped>
.bg-dots {
  background-image: radial-gradient(circle, rgba(156, 146, 172, 0.3) 1px, transparent 1px);
  background-size: 60px 60px;
  animation: moveDots 20s linear infinite;
}

@keyframes moveDots {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 60px 60px;
  }
}

.prose {
  color: white !important;
}

.prose p {
  margin-bottom: 1.5rem;
  line-height: 1.8;
  color: white !important;
  font-size: 1.125rem;
}

.prose strong {
  color: white !important;
  font-weight: 700;
  font-size: 1.125rem;
}

/* Animations au scroll */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-on-scroll.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* Animation de fade-in avec délai */
.animate-on-scroll.delay-100 {
  transition-delay: 0.1s;
}

.animate-on-scroll.delay-200 {
  transition-delay: 0.2s;
}

.animate-on-scroll.delay-300 {
  transition-delay: 0.3s;
}

.animate-on-scroll.delay-400 {
  transition-delay: 0.4s;
}

/* Animation de scale */
.animate-scale {
  opacity: 0;
  transform: scale(0.9);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-scale.animate-in {
  opacity: 1;
  transform: scale(1);
}

/* Animation de slide depuis la gauche */
.animate-slide-left {
  opacity: 0;
  transform: translateX(-50px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-slide-left.animate-in {
  opacity: 1;
  transform: translateX(0);
}

/* Animation de slide depuis la droite */
.animate-slide-right {
  opacity: 0;
  transform: translateX(50px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-slide-right.animate-in {
  opacity: 1;
  transform: translateX(0);
}

/* Animation de rotation */
@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}

.float-animation {
  animation: float 6s ease-in-out infinite;
}

/* Animation de pulse */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
}

.pulse-animation {
  animation: pulse 3s ease-in-out infinite;
}

/* Animation de shimmer */
@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

.shimmer {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  background-size: 1000px 100%;
  animation: shimmer 3s infinite;
}

/* Hover effects améliorés */
.hover-lift {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-lift:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(139, 92, 246, 0.3);
}

/* Animation de gradient animé */
@keyframes gradient-shift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.gradient-animated {
  background-size: 200% 200%;
  animation: gradient-shift 5s ease infinite;
}

/* Animation de texte qui apparaît */
@keyframes textReveal {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.text-reveal {
  animation: textReveal 0.8s ease-out forwards;
}

/* Animation au scroll */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-on-scroll.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* Animation du nav */
.nav-animated {
  transition: all 0.3s ease;
}

.nav-scrolled {
  background: rgba(15, 23, 42, 0.95);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

/* Animation de bouton pulse */
@keyframes buttonPulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.7);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(139, 92, 246, 0);
  }
}

.button-pulse {
  animation: buttonPulse 2s infinite;
}

/* Animation de float améliorée */
@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-10px) rotate(2deg);
  }
  66% {
    transform: translateY(5px) rotate(-2deg);
  }
}

.float-animation {
  animation: float 6s ease-in-out infinite;
}

/* Animation de barres de graphique */
@keyframes barGrow {
  0% {
    height: 0;
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.bar-animate {
  animation: barGrow 1s ease-out forwards;
}

.bar-animate:nth-child(1) {
  animation-delay: 0.1s;
}

.bar-animate:nth-child(2) {
  animation-delay: 0.2s;
}

.bar-animate:nth-child(3) {
  animation-delay: 0.3s;
}

.bar-animate:nth-child(4) {
  animation-delay: 0.4s;
}

.bar-animate:nth-child(5) {
  animation-delay: 0.5s;
}
</style>

