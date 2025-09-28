<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <!-- Header Section -->
    <section class="pt-32 pb-20 relative overflow-hidden">
      <div class="absolute inset-0 bg-dots opacity-20"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center">
          <h1 class="text-5xl md:text-7xl font-bold text-white mb-6">
            Nos <span class="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Réalisations</span>
          </h1>
          <p class="text-xl text-white/70 max-w-3xl mx-auto">
            Découvrez nos projets par thème et laissez-vous inspirer par notre expertise
          </p>
        </div>
      </div>
    </section>

    <!-- Themes Grid -->
    <section class="pb-20 relative z-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Web Development -->
          <NuxtLink to="/realisations/web" class="group">
            <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
              <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-white mb-4">Développement Web</h3>
              <p class="text-white/70 mb-6">Sites web modernes, applications web et solutions digitales innovantes</p>
              <div class="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors duration-200">
                <span class="mr-2">Explorer</span>
                <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </div>
            </div>
          </NuxtLink>


        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Page metadata
useHead({
  title: 'Nos Réalisations - DROP THE MOUSE',
  meta: [
    { name: 'description', content: 'Découvrez nos réalisations par thème : développement web, applications mobile, design UX/UI, marketing digital et consulting tech.' }
  ]
})
</script>

<style scoped>
.bg-dots {
  background-image: radial-gradient(circle, rgba(156, 146, 172, 0.3) 1px, transparent 1px);
  background-size: 60px 60px;
}
</style>


