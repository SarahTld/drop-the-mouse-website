<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation -->
    <nav class="bg-white shadow-sm sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center space-x-3">
            <div class="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-sm">D</span>
            </div>
            <span class="text-gray-900 font-bold text-lg">DROP THE MOUSE</span>
          </div>
          <NuxtLink to="/" class="text-gray-600 hover:text-purple-600 transition-colors duration-300">
            Retour à l'accueil
          </NuxtLink>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-8" style="font-family: 'Neue Montreal', sans-serif;">
          Conditions Générales de Vente
        </h1>

        <!-- Article 1 - Objet -->
        <section class="mb-12">
          <h2 class="text-2xl font-semibold text-gray-900 mb-6">Article 1 - Objet</h2>
          <div class="prose prose-gray max-w-none">
            <p class="text-gray-700 leading-relaxed">
              Les présentes conditions générales de vente s'appliquent à tous les services proposés par DROP THE MOUSE, 
              agence web située à Perpignan, spécialisée dans la création de sites web et d'applications mobiles.
            </p>
          </div>
        </section>

        <!-- Article 2 - Services -->
        <section class="mb-12">
          <h2 class="text-2xl font-semibold text-gray-900 mb-6">Article 2 - Services proposés</h2>
          <div class="prose prose-gray max-w-none">
            <p class="text-gray-700 leading-relaxed mb-4">
              DROP THE MOUSE propose les services suivants :
            </p>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
              <li>Création et développement de sites web</li>
              <li>Développement d'applications mobiles</li>
              <li>Design UX/UI</li>
              <li>Maintenance et support technique</li>
              <li>Conseil en stratégie digitale</li>
            </ul>
          </div>
        </section>

        <!-- Article 3 - Devis et commande -->
        <section class="mb-12">
          <h2 class="text-2xl font-semibold text-gray-900 mb-6">Article 3 - Devis et commande</h2>
          <div class="prose prose-gray max-w-none">
            <p class="text-gray-700 leading-relaxed mb-4">
              Tout projet fait l'objet d'un devis détaillé envoyé par email. Le devis est valable 30 jours.
            </p>
            <p class="text-gray-700 leading-relaxed">
              La commande devient ferme et définitive après signature du devis par le client et réception d'un acompte de 30% du montant total.
            </p>
          </div>
        </section>

        <!-- Article 4 - Tarifs -->
        <section class="mb-12">
          <h2 class="text-2xl font-semibold text-gray-900 mb-6">Article 4 - Tarifs</h2>
          <div class="prose prose-gray max-w-none">
            <p class="text-gray-700 leading-relaxed mb-4">
              Les tarifs sont indiqués en euros et s'entendent hors taxes. La TVA sera ajoutée selon la réglementation en vigueur.
            </p>
            <p class="text-gray-700 leading-relaxed">
              Les tarifs peuvent être révisés à tout moment. Ils restent fermes pendant la durée d'exécution du contrat.
            </p>
          </div>
        </section>

        <!-- Article 5 - Modalités de paiement -->
        <section class="mb-12">
          <h2 class="text-2xl font-semibold text-gray-900 mb-6">Article 5 - Modalités de paiement</h2>
          <div class="prose prose-gray max-w-none">
            <p class="text-gray-700 leading-relaxed mb-4">
              Le règlement s'effectue selon les modalités suivantes :
            </p>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
              <li>30% d'acompte à la commande</li>
              <li>40% à mi-parcours du projet</li>
              <li>30% à la livraison finale</li>
            </ul>
            <p class="text-gray-700 leading-relaxed mt-4">
              Les factures sont payables à 30 jours net. En cas de retard de paiement, des pénalités de 3 fois le taux d'intérêt légal seront appliquées.
            </p>
          </div>
        </section>

        <!-- Article 6 - Délais -->
        <section class="mb-12">
          <h2 class="text-2xl font-semibold text-gray-900 mb-6">Article 6 - Délais d'exécution</h2>
          <div class="prose prose-gray max-w-none">
            <p class="text-gray-700 leading-relaxed mb-4">
              Les délais de réalisation sont indiqués à titre indicatif dans le devis. Ils courent à partir de la réception de l'acompte.
            </p>
            <p class="text-gray-700 leading-relaxed">
              En cas de retard imputable au client, les délais sont automatiquement prorogés.
            </p>
          </div>
        </section>

        <!-- Article 7 - Propriété intellectuelle -->
        <section class="mb-12">
          <h2 class="text-2xl font-semibold text-gray-900 mb-6">Article 7 - Propriété intellectuelle</h2>
          <div class="prose prose-gray max-w-none">
            <p class="text-gray-700 leading-relaxed mb-4">
              Les éléments créés par DROP THE MOUSE restent sa propriété jusqu'au paiement intégral des factures.
            </p>
            <p class="text-gray-700 leading-relaxed">
              Après paiement complet, le client devient propriétaire des éléments créés spécifiquement pour son projet, 
              à l'exception des éléments préexistants et des frameworks utilisés.
            </p>
          </div>
        </section>

        <!-- Article 8 - Support et maintenance -->
        <section class="mb-12">
          <h2 class="text-2xl font-semibold text-gray-900 mb-6">Article 8 - Support et maintenance</h2>
          <div class="prose prose-gray max-w-none">
            <p class="text-gray-700 leading-relaxed mb-4">
              Une période de garantie de 3 mois est accordée sur les développements réalisés.
            </p>
            <p class="text-gray-700 leading-relaxed">
              La maintenance et les évolutions font l'objet d'un contrat séparé.
            </p>
          </div>
        </section>

        <!-- Article 9 - Responsabilité -->
        <section class="mb-12">
          <h2 class="text-2xl font-semibold text-gray-900 mb-6">Article 9 - Limitation de responsabilité</h2>
          <div class="prose prose-gray max-w-none">
            <p class="text-gray-700 leading-relaxed">
              La responsabilité de DROP THE MOUSE ne saurait être engagée au-delà du montant des sommes effectivement payées par le client.
            </p>
          </div>
        </section>

        <!-- Article 10 - Droit applicable -->
        <section class="mb-12">
          <h2 class="text-2xl font-semibold text-gray-900 mb-6">Article 10 - Droit applicable</h2>
          <div class="prose prose-gray max-w-none">
            <p class="text-gray-700 leading-relaxed">
              Les présentes conditions générales de vente sont soumises au droit français. 
              En cas de litige, les tribunaux de Perpignan seront seuls compétents.
            </p>
          </div>
        </section>

        <!-- Contact -->
        <section class="border-t border-gray-200 pt-8">
          <h2 class="text-2xl font-semibold text-gray-900 mb-6">Contact</h2>
          <div class="prose prose-gray max-w-none">
            <p class="text-gray-700 leading-relaxed mb-4">
              Pour toute question concernant ces conditions générales de vente :
            </p>
            <div class="bg-gray-50 rounded-lg p-6">
              <p class="text-gray-700 leading-relaxed">
                <strong>Email :</strong> contact@dropthemouse.com<br>
                <strong>Localisation :</strong> Perpignan, Pyrénées-Orientales, France
              </p>
            </div>
          </div>
        </section>

        <!-- Dernière mise à jour -->
        <div class="mt-12 pt-8 border-t border-gray-200 text-center">
          <p class="text-gray-500 text-sm">
            Dernière mise à jour : {{ new Date().toLocaleDateString('fr-FR') }}
          </p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
// Page metadata
useHead({
  title: 'Conditions Générales de Vente - DROP THE MOUSE',
  meta: [
    { name: 'description', content: 'Conditions générales de vente de DROP THE MOUSE, agence web à Perpignan. Modalités de paiement, délais et conditions contractuelles.' },
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})
</script>

<style scoped>
.prose {
  font-family: 'Manrope', sans-serif;
}

.prose h2 {
  color: #1f2937;
  font-weight: 600;
}

.prose p {
  color: #374151;
  line-height: 1.7;
}

.prose ul {
  color: #374151;
}
</style>
