# 📸 **Guide d'Ajout des Captures d'Écran**

## 🎯 **Objectif**
Ajouter des captures d'écran de vos projets pour rendre le portfolio plus visuel et professionnel.

## 📁 **Structure des Fichiers**
Placez vos captures d'écran dans le dossier `public/images/` avec les noms suivants :

```
public/images/
├── tic-tac-toe-screenshot.png      # Capture du jeu Tic Tac Toe
├── weather-app-screenshot.png       # Capture de l'app météo
├── memory-game-screenshot.png       # Capture du jeu de mémoire
└── drop-the-mouse-screenshot.png    # Capture du site actuel
```

## 📱 **Recommandations pour les Captures**

### **Format et Taille**
- **Format** : PNG ou JPG (PNG recommandé pour la qualité)
- **Taille** : 800x600px minimum (ratio 4:3)
- **Poids** : Moins de 500KB par image
- **Qualité** : Haute résolution pour un rendu professionnel

### **Contenu des Captures**
1. **Tic Tac Toe** : Montrez le jeu en cours avec l'interface
2. **App Météo** : Affichez les prévisions météo actuelles
3. **Jeu de Mémoire** : Présentez le plateau de jeu avec des cartes
4. **DROP THE MOUSE** : Capture de la page d'accueil du site

### **Comment Prendre les Captures**

#### **Option 1 : Capture d'écran native**
- **Mac** : `Cmd + Shift + 4` puis sélectionnez la zone
- **Windows** : `Win + Shift + S` puis sélectionnez la zone
- **Linux** : `PrtScn` ou utilisez des outils comme Flameshot

#### **Option 2 : Outils en ligne**
- [Screenshot.guru](https://screenshot.guru/) - Capture de sites web
- [FireShot](https://chrome.google.com/webstore/detail/fireshot-capture-page-sc/mcbpblocgmgfnpjjppndjkmgjaogfceg) - Extension Chrome
- [Lightshot](https://app.prntscr.com/) - Outil de capture avancé

#### **Option 3 : Développeur Web**
- Ouvrez vos sites dans le navigateur
- Faites un clic droit → "Inspecter"
- Utilisez l'outil de capture intégré

## 🎨 **Optimisation des Images**

### **Avant l'Upload**
- Redimensionnez à une taille raisonnable (800x600px)
- Compressez pour réduire le poids
- Vérifiez que le contenu est lisible

### **Outils de Compression**
- [TinyPNG](https://tinypng.com/) - Compression PNG/JPG
- [Squoosh](https://squoosh.app/) - Outil Google avancé
- [ImageOptim](https://imageoptim.com/) - Application Mac

## 🚀 **Test des Captures**

### **Après Ajout**
1. Lancez le site : `npm run dev`
2. Vérifiez que les images s'affichent dans le portfolio
3. Testez les modales pour voir les captures en grand
4. Vérifiez la responsivité sur mobile

### **Vérifications**
- ✅ Images visibles dans les cartes de projets
- ✅ Modales affichent les captures en grand format
- ✅ Responsive sur tous les appareils
- ✅ Temps de chargement acceptable

## 🔧 **Personnalisation Avancée**

### **Modifier les Chemins**
Si vous voulez changer les noms des fichiers, modifiez dans `PortfolioSection.vue` :

```javascript
screenshot: '/images/votre-nom-fichier.png',
altText: 'Votre description personnalisée'
```

### **Ajouter Plus de Projets**
Dupliquez la structure d'un projet et ajoutez votre capture d'écran :

```javascript
{
  id: 5,
  title: 'Nouveau Projet',
  // ... autres propriétés
  screenshot: '/images/nouveau-projet-screenshot.png',
  altText: 'Description de la capture'
}
```

## 📝 **Notes Importantes**

- **Droits d'usage** : Assurez-vous d'avoir le droit d'utiliser les captures
- **Qualité** : Privilégiez la qualité à la quantité
- **Cohérence** : Gardez un style similaire entre toutes les captures
- **Mise à jour** : Actualisez régulièrement les captures de vos projets

---

**💡 Conseil** : Prenez vos captures d'écran sur un écran de bonne qualité et dans des conditions d'éclairage optimales pour un rendu professionnel !


