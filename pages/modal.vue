<template>
  <div class="modal-page">
    <div class="modal-content">
      <h1 class="modal-title">Découvrez nos projets</h1>
      <p class="modal-description">Nous créons des expériences digitales exceptionnelles</p>
      
      <div class="modal-grid">
        <div class="modal-card">
          <div class="card-icon">🎨</div>
          <h3>Design UI/UX</h3>
          <p>Création d'interfaces utilisateur modernes et intuitives</p>
        </div>
        
        <div class="modal-card">
          <div class="card-icon">💻</div>
          <h3>Développement Web</h3>
          <p>Sites web et applications performantes et responsives</p>
        </div>
        
        <div class="modal-card">
          <div class="card-icon">📱</div>
          <h3>Applications Mobile</h3>
          <p>Apps iOS et Android natives et cross-platform</p>
        </div>
        
        <div class="modal-card">
          <div class="card-icon">⚙️</div>
          <h3>Backend & API</h3>
          <p>Architecture serveur robuste et APIs sécurisées</p>
        </div>
        
        <div class="modal-card">
          <div class="card-icon">☁️</div>
          <h3>Cloud & DevOps</h3>
          <p>Déploiement et infrastructure cloud scalable</p>
        </div>
        
        <div class="modal-card">
          <div class="card-icon">🔒</div>
          <h3>Sécurité</h3>
          <p>Protection des données et conformité RGPD</p>
        </div>
      </div>
      
      <div class="modal-actions">
        <button class="btn-primary">Voir nos réalisations</button>
        <button class="btn-secondary">Nous contacter</button>
      </div>
    </div>
  </div>
</template>

<script setup>
// Page metadata
useHead({
  title: 'Nos Services - DROP THE MOUSE',
  meta: [
    { name: 'description', content: 'Découvrez nos services de développement web, mobile, design UI/UX et plus encore.' }
  ]
})
</script>

<style scoped>
.modal-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%);
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.modal-page::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.modal-content {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.modal-title {
  font-size: 3.5rem;
  font-weight: 800;
  text-align: center;
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
  text-align: center;
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
</style>
