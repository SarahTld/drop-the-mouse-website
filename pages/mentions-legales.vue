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
          Mentions Légales
        </h1>

        <!-- Éditeur du site -->
        <section class="mb-12">
          <h2 class="text-2xl font-semibold text-gray-900 mb-6">1. Éditeur du site</h2>
          <div class="prose prose-gray max-w-none">
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Dénomination sociale :</strong> DROP THE MOUSE<br>
              <strong>Forme juridique :</strong> Entreprise individuelle<br>
              <strong>Adresse :</strong> Perpignan, Pyrénées-Orientales, France<br>
              <strong>Email :</strong> contact@dropthemouse.com
            </p>
          </div>
        </section>

        <!-- Directeur de publication -->
        <section class="mb-12">
          <h2 class="text-2xl font-semibold text-gray-900 mb-6">2. Directeur de publication</h2>
          <div class="prose prose-gray max-w-none">
            <p class="text-gray-700 leading-relaxed">
              Le directeur de la publication est le responsable de l'entreprise DROP THE MOUSE.
            </p>
          </div>
        </section>

        <!-- Hébergement -->
        <section class="mb-12">
          <h2 class="text-2xl font-semibold text-gray-900 mb-6">3. Hébergement</h2>
          <div class="prose prose-gray max-w-none">
            <p class="text-gray-700 leading-relaxed">
              Ce site est hébergé par un service d'hébergement web professionnel. 
              Pour plus d'informations sur l'hébergeur, contactez-nous à l'adresse : contact@dropthemouse.com
            </p>
          </div>
        </section>

        <!-- Propriété intellectuelle -->
        <section class="mb-12">
          <h2 class="text-2xl font-semibold text-gray-900 mb-6">4. Propriété intellectuelle</h2>
          <div class="prose prose-gray max-w-none">
            <p class="text-gray-700 leading-relaxed mb-4">
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. 
              Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
            <p class="text-gray-700 leading-relaxed">
              La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
            </p>
          </div>
        </section>

        <!-- Responsabilité -->
        <section class="mb-12">
          <h2 class="text-2xl font-semibold text-gray-900 mb-6">5. Limitation de responsabilité</h2>
          <div class="prose prose-gray max-w-none">
            <p class="text-gray-700 leading-relaxed mb-4">
              Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l'année, mais peut toutefois contenir des inexactitudes ou des omissions.
            </p>
            <p class="text-gray-700 leading-relaxed">
              Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email, à l'adresse contact@dropthemouse.com, en décrivant le problème de la manière la plus précise possible.
            </p>
          </div>
        </section>

        <!-- Liens hypertextes -->
        <section class="mb-12">
          <h2 class="text-2xl font-semibold text-gray-900 mb-6">6. Liens hypertextes</h2>
          <div class="prose prose-gray max-w-none">
            <p class="text-gray-700 leading-relaxed mb-4">
              Des liens hypertextes peuvent être présents sur le site. L'utilisateur est informé qu'en cliquant sur ces liens, il sortira du site dropthemouse.com. 
              Ce dernier n'a pas de contrôle sur les pages web sur lesquelles aboutissent ces liens et ne saurait en aucun cas être responsable de leur contenu.
            </p>
          </div>
        </section>

        <!-- Cookies -->
        <section class="mb-12">
          <h2 class="text-2xl font-semibold text-gray-900 mb-6">7. Cookies</h2>
          <div class="prose prose-gray max-w-none">
            <p class="text-gray-700 leading-relaxed mb-4">
              Le site dropthemouse.com peut être amené à vous demander l'acceptation des cookies pour des besoins de statistiques et d'affichage. 
              Un cookie est une information déposée sur votre disque dur par le serveur du site que vous visitez.
            </p>
            <p class="text-gray-700 leading-relaxed">
              Il contient plusieurs données qui sont stockées sur votre ordinateur dans un simple fichier texte auquel un serveur accède pour lire et enregistrer des informations.
            </p>
          </div>
        </section>

        <!-- Données personnelles -->
        <section class="mb-12">
          <h2 class="text-2xl font-semibold text-gray-900 mb-6">8. Données personnelles</h2>
          <div class="prose prose-gray max-w-none">
            <p class="text-gray-700 leading-relaxed mb-4">
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, 
              de suppression et d'opposition aux données personnelles vous concernant.
            </p>
            <p class="text-gray-700 leading-relaxed">
              Pour exercer ce droit, contactez-nous à l'adresse : contact@dropthemouse.com
            </p>
          </div>
        </section>

        <!-- Droit applicable -->
        <section class="mb-12">
          <h2 class="text-2xl font-semibold text-gray-900 mb-6">9. Droit applicable</h2>
          <div class="prose prose-gray max-w-none">
            <p class="text-gray-700 leading-relaxed">
              Le présent site et les modalités et conditions de son utilisation sont régis par le droit français, 
              quel que soit le lieu d'utilisation. En cas de contestation éventuelle, et après l'échec de toute tentative de recherche d'une solution amiable, 
              les tribunaux français seront seuls compétents pour connaître de ce litige.
            </p>
          </div>
        </section>

        <!-- Contact -->
        <section class="border-t border-gray-200 pt-8">
          <h2 class="text-2xl font-semibold text-gray-900 mb-6">10. Contact</h2>
          <div class="prose prose-gray max-w-none">
            <p class="text-gray-700 leading-relaxed mb-4">
              Pour toute question concernant ces mentions légales, vous pouvez nous contacter :
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
  title: 'Mentions Légales - DROP THE MOUSE',
  meta: [
    { name: 'description', content: 'Mentions légales du site DROP THE MOUSE, agence web à Perpignan. Informations légales, propriété intellectuelle et protection des données.' },
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
</style>
