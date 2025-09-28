<template>
  <section id="about" class="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
    <div class="absolute inset-0 bg-dots opacity-20"></div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Content -->
        <div>
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-8">
            À propos de <span class="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">DROP THE MOUSE</span>
          </h2>
          <p class="text-xl text-white/70 leading-relaxed mb-8">
            Nous sommes une agence digitale passionnée par l'innovation et la créativité. Notre mission est de transformer vos idées en expériences numériques exceptionnelles qui captivent et inspirent.
          </p>
          
          <div class="space-y-6">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-white mb-2">Innovation continue</h3>
                <p class="text-white/70">Nous restons à la pointe des dernières technologies pour vous offrir des solutions d'avenir.</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-white mb-2">Équipe expérimentée</h3>
                <p class="text-white/70">Nos experts passionnés partagent leur expertise pour garantir l'excellence de chaque projet.</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-white mb-2">Qualité garantie</h3>
                <p class="text-white/70">Chaque projet est réalisé avec soin et attention aux détails pour un résultat parfait.</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Visual Element -->
        <div class="relative">
          <div class="relative z-10 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div class="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl mb-4"></div>
                <h4 class="text-white font-semibold mb-2">Design</h4>
                <p class="text-white/60 text-sm">Créativité et innovation</p>
              </div>
              <div class="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div class="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl mb-4"></div>
                <h4 class="text-white font-semibold mb-2">Développement</h4>
                <p class="text-white/60 text-sm">Technologies modernes</p>
              </div>
              <div class="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div class="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl mb-4"></div>
                <h4 class="text-white font-semibold mb-2">Marketing</h4>
                <p class="text-white/60 text-sm">Stratégies digitales</p>
              </div>
              <div class="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div class="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl mb-4"></div>
                <h4 class="text-white font-semibold mb-2">Support</h4>
                <p class="text-white/60 text-sm">Accompagnement 24/7</p>
              </div>
            </div>
          </div>
          
          <!-- Floating Elements -->
          <div class="absolute -top-4 -right-4 w-8 h-8 bg-purple-400 rounded-full animate-float opacity-60"></div>
          <div class="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-float-delayed opacity-40"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic can be added here if needed
</script>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

@keyframes float-delayed {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(-180deg); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 8s ease-in-out infinite;
}

.bg-dots {
  background-image: radial-gradient(circle, rgba(156, 146, 172, 0.3) 1px, transparent 1px);
  background-size: 60px 60px;
}
</style>


