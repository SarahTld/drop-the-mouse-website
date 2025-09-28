# 🚀 DROP THE MOUSE - Site Web Moderne

Un site web ultra-moderne et graphiquement attrayant pour l'agence digitale "DROP THE MOUSE", développé avec Nuxt 3 et Tailwind CSS.

## ✨ **Caractéristiques**

- **Design ultra-moderne** avec effets glassmorphism et gradients colorés
- **Navigation fixe** avec animations fluides et menu mobile responsive
- **Animations CSS** sophistiquées (éléments flottants, fade-in, hover effects)
- **Interface responsive** qui s'adapte à tous les écrans
- **Composants modulaires** Vue.js 3 avec Composition API
- **Portfolio visuel** avec captures d'écran des projets

## 🎨 **Sections du Site**

1. **Hero Section** - Section d'accueil avec titre animé et call-to-action
2. **À propos** - Présentation de l'entreprise avec éléments visuels
3. **Services** - Grille de 6 services avec cartes interactives
4. **Portfolio** - Galerie de projets avec filtres, modales et captures d'écran
5. **Contact** - Formulaire de contact et informations de l'entreprise
6. **Footer** - Liens, contact et réseaux sociaux

## 🛠 **Technologies Utilisées**

- **Frontend**: Nuxt 3, Vue.js 3, Tailwind CSS
- **Animations**: CSS Animations, Transitions, Hover Effects
- **Design**: Glassmorphism, Gradients, Modern UI/UX
- **Responsive**: Mobile-first design avec breakpoints Tailwind
- **Images**: Support des captures d'écran de projets

## 🚀 **Installation et Démarrage**

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Prévisualiser la production
npm run preview
```

## 📸 **Captures d'Écran des Projets**

### **Ajout des Images**
Pour afficher les captures d'écran de vos projets :

1. **Créez le dossier** : `public/images/`
2. **Ajoutez vos captures** avec les noms exacts :
   - `tic-tac-toe-screenshot.png`
   - `weather-app-screenshot.png`
   - `memory-game-screenshot.png`
   - `drop-the-mouse-screenshot.png`
3. **Format recommandé** : 800x600px, PNG, < 500KB

### **Guide Complet**
Consultez `CAPTURES_ECRAN.md` pour des instructions détaillées.

## 📱 **Fonctionnalités Principales**

### Navigation
- Navigation fixe avec effet de scroll
- Menu mobile responsive
- Défilement fluide vers les sections
- Effets hover avec animations

### Portfolio
- Filtrage par catégorie (Web, Mobile, Design, Marketing)
- Cartes de projets interactives avec captures d'écran
- Modales détaillées pour chaque projet
- Technologies utilisées affichées
- Liens directs vers les projets déployés
- Support des captures d'écran haute qualité

### Formulaire de Contact
- Formulaire complet avec validation
- Champs personnalisés (type de projet, budget)
- Simulation d'envoi avec indicateur de chargement
- Design moderne et accessible

### Animations
- Éléments flottants en arrière-plan
- Animations d'apparition des composants
- Transitions fluides sur tous les éléments
- Effets hover sophistiqués

## 🎯 **Structure des Composants**

```
components/
├── AppNavigation.vue      # Navigation principale
├── HeroSection.vue        # Section d'accueil
├── AboutSection.vue       # Section à propos
├── ServicesSection.vue    # Section services
├── PortfolioSection.vue   # Section portfolio avec captures
├── ContactSection.vue     # Section contact
└── AppFooter.vue         # Pied de page

public/
└── images/               # Captures d'écran des projets
    ├── tic-tac-toe-screenshot.png
    ├── weather-app-screenshot.png
    ├── memory-game-screenshot.png
    └── drop-the-mouse-screenshot.png
```

## 🌈 **Palette de Couleurs**

- **Primaire**: Violet (#8B5CF6) à Rose (#EC4899)
- **Arrière-plans**: Slate 800-900 avec transparences
- **Accents**: Bleu, Vert, Orange pour les éléments visuels
- **Texte**: Blanc avec différentes opacités

## 📱 **Responsive Design**

- **Mobile**: Design optimisé pour les petits écrans
- **Tablet**: Adaptation des grilles et espacements
- **Desktop**: Mise en page complète avec animations avancées
- **Breakpoints**: Utilisation des classes Tailwind responsive

## 🔧 **Personnalisation**

Le site est entièrement personnalisable via :
- Variables CSS dans les composants
- Classes Tailwind configurables
- Données des projets dans `PortfolioSection.vue`
- Informations de contact dans `ContactSection.vue`
- Captures d'écran dans `public/images/`

## 📄 **Licence**

Ce projet est développé pour DROP THE MOUSE. Tous droits réservés.

---

**Développé avec ❤️ et beaucoup de café ☕**
