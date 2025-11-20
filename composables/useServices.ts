export const useServices = () => {
  const services = [
    {
      id: 1,
      slug: 'developpement-web',
      title: 'Développement Web',
      description: 'Sites web modernes et applications web performantes avec les dernières technologies.',
      icon: 'CodeIcon',
      features: [
        'Sites responsifs et optimisés',
        'Applications web progressives',
        'E-commerce et CMS',
        'API REST et GraphQL'
      ],
      seoContent: {
        description: `
          <p class="mb-4">Notre service de <strong>développement web</strong> vous permet de créer des sites internet modernes, performants et optimisés pour le référencement naturel (SEO). Nous développons des sites web sur mesure adaptés à vos besoins spécifiques, que ce soit pour une vitrine en ligne, une plateforme e-commerce ou une application web complexe.</p>
          <p class="mb-4">Nous utilisons les dernières technologies web comme <strong>React</strong>, <strong>Vue.js</strong>, <strong>Nuxt.js</strong>, <strong>Next.js</strong> et <strong>Node.js</strong> pour créer des applications web rapides, sécurisées et évolutives. Nos développeurs experts maîtrisent également les frameworks backend modernes pour créer des APIs robustes et performantes.</p>
          <p>Chaque projet de développement web est optimisé pour les moteurs de recherche (SEO), avec un code propre, une structure sémantique HTML5, des temps de chargement optimaux et une compatibilité mobile parfaite. Nous garantissons également la sécurité de vos données avec des pratiques de développement sécurisées et conformes au RGPD.</p>
        `,
        technologies: [
          'React, Vue.js, Angular - Frameworks JavaScript modernes',
          'Nuxt.js, Next.js - Frameworks full-stack pour SEO optimal',
          'Node.js, Express, NestJS - Backend performant et scalable',
          'TypeScript - Code robuste et maintenable',
          'Tailwind CSS, Sass - Design moderne et responsive',
          'MongoDB, PostgreSQL, MySQL - Bases de données performantes',
          'GraphQL, REST API - Architecture API moderne',
          'Docker, Kubernetes - Déploiement et containerisation'
        ],
        advantages: [
          'Sites web ultra-rapides avec temps de chargement optimisés pour améliorer votre référencement Google',
          'Code propre et maintenable suivant les meilleures pratiques du développement web',
          'Responsive design parfait sur tous les appareils (mobile, tablette, desktop)',
          'Optimisation SEO intégrée pour apparaître en première page de Google',
          'Sécurité renforcée avec protection contre les vulnérabilités web courantes',
          'Scalabilité pour accompagner la croissance de votre entreprise',
          'Maintenance et support technique continu pour garantir la performance',
          'Conformité RGPD pour protéger les données de vos utilisateurs'
        ],
        process: [
          'Analyse de vos besoins et définition des objectifs de votre projet web',
          'Conception de l\'architecture technique et choix des technologies adaptées',
          'Développement itératif avec tests réguliers et validation client',
          'Optimisation SEO et performance pour un référencement optimal',
          'Tests de sécurité et de compatibilité sur tous les navigateurs',
          'Déploiement sur serveur et configuration de l\'environnement de production',
          'Formation et documentation pour vous permettre de gérer votre site',
          'Suivi et maintenance continue pour garantir la performance à long terme'
        ]
      }
    },
    {
      id: 2,
      slug: 'application-mobile',
      title: 'Application Mobile',
      description: 'Applications mobiles natives et cross-platform pour iOS et Android.',
      icon: 'MobileIcon',
      features: [
        'Applications natives iOS/Android',
        'Applications cross-platform',
        'Interface utilisateur intuitive',
        'Performance optimisée'
      ],
      seoContent: {
        description: `
          <p class="mb-4">Développez votre présence mobile avec nos services de <strong>développement d'applications mobiles</strong>. Nous créons des apps natives iOS et Android ainsi que des applications cross-platform performantes qui offrent une expérience utilisateur exceptionnelle.</p>
          <p class="mb-4">Que vous ayez besoin d'une application mobile native pour iOS (Swift, Objective-C) ou Android (Kotlin, Java), ou d'une solution cross-platform avec React Native, Flutter ou Ionic, nos développeurs mobiles experts sauront créer l'application parfaite pour votre entreprise.</p>
          <p>Nos applications mobiles sont optimisées pour les performances, avec des temps de chargement rapides, une utilisation optimale de la batterie et une interface utilisateur intuitive. Nous intégrons également les fonctionnalités natives des appareils (caméra, GPS, notifications push) pour offrir une expérience utilisateur complète et engageante.</p>
        `,
        technologies: [
          'React Native - Applications cross-platform iOS et Android',
          'Flutter - Framework Google pour apps natives performantes',
          'Swift, Objective-C - Développement iOS natif',
          'Kotlin, Java - Développement Android natif',
          'Ionic, Capacitor - Applications hybrides web-to-mobile',
          'Firebase, AWS Amplify - Backend et services cloud',
          'App Store Connect, Google Play Console - Publication et distribution',
          'TestFlight, Firebase Test Lab - Tests et validation'
        ],
        advantages: [
          'Applications natives ultra-performantes avec accès aux fonctionnalités du téléphone',
          'Interface utilisateur intuitive et moderne pour une excellente expérience utilisateur',
          'Optimisation pour les performances et la consommation de batterie',
          'Publication sur l\'App Store et Google Play Store avec suivi des statistiques',
          'Notifications push pour engager et fidéliser vos utilisateurs',
          'Intégration avec les systèmes existants (APIs, bases de données)',
          'Maintenance et mises à jour régulières pour compatibilité iOS/Android',
          'Analytics et tracking pour mesurer l\'engagement et optimiser l\'app'
        ],
        process: [
          'Analyse des besoins et définition des fonctionnalités de l\'application mobile',
          'Conception de l\'interface utilisateur (UI/UX) avec wireframes et prototypes',
          'Choix de la technologie (native, cross-platform) selon vos besoins',
          'Développement itératif avec tests sur appareils réels',
          'Intégration des fonctionnalités natives (caméra, GPS, notifications)',
          'Tests de performance, sécurité et compatibilité sur différentes versions iOS/Android',
          'Soumission et publication sur l\'App Store et Google Play',
          'Suivi des performances, analytics et mises à jour régulières'
        ]
      }
    },
    {
      id: 3,
      slug: 'design-ui-ux',
      title: 'Design UI/UX',
      description: 'Interfaces utilisateur intuitives et expériences digitales mémorables.',
      icon: 'PaletteIcon',
      features: [
        'Design centré utilisateur',
        'Prototypage et wireframes',
        'Design systems cohérents',
        'Tests utilisateurs'
      ],
      seoContent: {
        description: `
          <p class="mb-4">Créez des expériences utilisateur exceptionnelles avec notre service de <strong>design UI/UX</strong>. Nos designers experts créent des interfaces utilisateur modernes, intuitives et engageantes qui convertissent vos visiteurs en clients.</p>
          <p class="mb-4">Nous suivons une approche de design centré utilisateur (User-Centered Design) pour créer des interfaces qui répondent parfaitement aux besoins et attentes de vos utilisateurs. De la recherche utilisateur au prototypage interactif, en passant par la création de design systems cohérents, nous couvrons tous les aspects du design d'interface.</p>
          <p>Nos designs sont optimisés pour la conversion, avec une attention particulière portée à l'accessibilité, la lisibilité et l'ergonomie. Nous créons également des design systems réutilisables pour garantir la cohérence visuelle sur tous vos supports digitaux et améliorer votre identité de marque.</p>
        `,
        technologies: [
          'Figma, Adobe XD, Sketch - Outils de design professionnels',
          'Principle, Framer - Prototypage interactif et animations',
          'Design Systems - Bibliothèques de composants réutilisables',
          'User Research - Études utilisateurs et personas',
          'Wireframing - Architecture de l\'information et structure',
          'Usability Testing - Tests d\'utilisabilité et itérations',
          'Accessibility (WCAG) - Design accessible pour tous',
          'Responsive Design - Adaptation mobile, tablette, desktop'
        ],
        advantages: [
          'Interfaces utilisateur modernes et attrayantes qui reflètent votre identité de marque',
          'Expérience utilisateur optimisée pour maximiser les conversions et l\'engagement',
          'Design responsive parfaitement adapté à tous les appareils (mobile-first)',
          'Accessibilité garantie pour tous les utilisateurs (conformité WCAG)',
          'Design systems cohérents pour une identité visuelle unifiée',
          'Prototypage interactif pour valider les concepts avant développement',
          'Tests utilisateurs pour identifier et corriger les problèmes d\'ergonomie',
          'Optimisation continue basée sur les données et les retours utilisateurs'
        ],
        process: [
          'Recherche utilisateur et analyse de la concurrence pour comprendre les besoins',
          'Création de personas et parcours utilisateur (user journey mapping)',
          'Wireframing et architecture de l\'information pour structurer l\'interface',
          'Design des maquettes haute fidélité avec votre identité visuelle',
          'Prototypage interactif pour tester les interactions et animations',
          'Tests d\'utilisabilité avec de vrais utilisateurs et itérations',
          'Création du design system et documentation pour le développement',
          'Suivi et optimisation continue basée sur les analytics et retours'
        ]
      }
    }
  ]

  const getServiceBySlug = (slug: string) => {
    return services.find(service => service.slug === slug) || null
  }

  const getServiceById = (id: number) => {
    return services.find(service => service.id === id) || null
  }

  return {
    services,
    getServiceBySlug,
    getServiceById
  }
}

