<template>
  <!-- Navigation Menu - EXACT We Are Small -->
    <div class="framer-ogrtrz" 
         :class="{ 'menu-at-bottom': scrollY <= windowHeight * 0.87, 'menu-at-top': scrollY > windowHeight * 0.87 }"
         data-framer-name="Navigation - sticky header - home" 
         :style="{
           position: scrollY > windowHeight * 0.87 ? 'fixed' : 'absolute',
           bottom: scrollY > windowHeight * 0.87 ? 'auto' : '60px',
           top: scrollY > windowHeight * 0.87 ? '20px' : 'auto',
           left: '50%',
           transform: 'translateX(-50%)',
           zIndex: 9999,
           pointerEvents: 'auto'
         }">
    <div class="framer-mk04t1-container">
      <div class="framer-jvP1L framer-1ayyxmz framer-v-1422men" data-framer-name="Negro" data-hide-scrollbars="true">
        <div class="framer-w06gao" data-framer-cursor="fbt6yr" data-framer-name="Wrapper">
          <div class="framer-yq540w-container">
            <a class="framer-3iAZX framer-Lmj1l framer-1pat25b framer-v-1ux0cun framer-5tthba" data-framer-name="Active - Negro" href="/" data-framer-page-link-current="true">
              <div class="framer-37iskh" data-framer-name="Stack">
                <div class="framer-r9c3d8" data-framer-component-type="RichTextContainer">
                  <p class="framer-text framer-styles-preset-1pjw18d" data-styles-preset="R1a3ZiBjp">Accueil</p>
                </div>
              </div>
            </a>
          </div>
          <div class="framer-19u2gt7-container">
            <a class="framer-3iAZX framer-Lmj1l framer-1pat25b framer-v-ypsx0u framer-5tthba" href="/about" data-framer-name="Default - Blanco"
               @mouseenter="handleMouseEnter"
               @mouseleave="handleMouseLeave">
              <div class="framer-37iskh" data-framer-name="Stack">
                <div class="framer-r9c3d8" data-framer-component-type="RichTextContainer">
                  <p class="framer-text framer-styles-preset-1pjw18d" data-styles-preset="R1a3ZiBjp">À propos</p>
                </div>
              </div>
            </a>
          </div>
          <div class="framer-1uurfk6-container">
            <a class="framer-3iAZX framer-Lmj1l framer-1pat25b framer-v-ypsx0u framer-5tthba" data-framer-name="Default - Blanco" href="/services"
               @mouseenter="handleMouseEnter"
               @mouseleave="handleMouseLeave">
              <div class="framer-37iskh" data-framer-name="Stack">
                <div class="framer-r9c3d8" data-framer-component-type="RichTextContainer">
                  <p class="framer-text framer-styles-preset-1pjw18d" data-styles-preset="R1a3ZiBjp">Services</p>
                </div>
        </div>
          </a>
        </div>
          <div class="framer-1jgqzy7-container">
            <a class="framer-3iAZX framer-Lmj1l framer-1pat25b framer-v-ypsx0u framer-5tthba" href="/realisations" data-framer-name="Default - Blanco"
               @mouseenter="handleMouseEnter"
               @mouseleave="handleMouseLeave">
              <div class="framer-37iskh" data-framer-name="Stack">
                <div class="framer-r9c3d8" data-framer-component-type="RichTextContainer">
                  <p class="framer-text framer-styles-preset-1pjw18d" data-styles-preset="R1a3ZiBjp">Réalisations</p>
        </div>
              </div>
            </a>
          </div>
          <div class="framer-2z87et-container">
            <a class="framer-3iAZX framer-Lmj1l framer-1pat25b framer-v-ypsx0u framer-5tthba" data-framer-name="Default - Blanco" href="#contact"
               @mouseenter="handleMouseEnter"
               @mouseleave="handleMouseLeave">
              <div class="framer-37iskh" data-framer-name="Stack">
                <div class="framer-r9c3d8" data-framer-component-type="RichTextContainer">
                  <p class="framer-text framer-styles-preset-1pjw18d" data-styles-preset="R1a3ZiBjp">Contact</p>
      </div>
    </div>
            </a>
          </div>
        </div>
      </div>
      <!-- Mouse Icon with fade out effect - positioned absolutely -->
      <div class="framer-gyjdss mouse-icon-fade" style="position: absolute; right: -40px; top: 50%; transform: translateY(-50%);">
        <div class="framer-18e92ay">
          <div class="framer-1x9cenz-container">
            <div class="framer-Hhq3D framer-l38wvc framer-v-l38wvc">
              <div class="framer-1ukyhxd-container">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 60" width="28" height="60" preserveAspectRatio="xMidYMid slice">
                    <defs>
                      <clipPath id="__lottie_element_2">
                        <rect width="28" height="60" x="0" y="0"></rect>
                      </clipPath>
                    </defs>
                    <g clip-path="url(#__lottie_element_2)">
                      <g transform="matrix(0.9139999747276306,0,0,0.9139999747276306,14,26.93737030029297)" opacity="1">
                        <g opacity="1" transform="matrix(1,0,0,1,0,-0.16699999570846558)">
                          <path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(249,249,249)" stroke-opacity="1" stroke-width="2" d=" M14.083499908447266,-8.166500091552734 C14.083499908447266,-8.166500091552734 14.083499908447266,8.166500091552734 14.083499908447266,8.166500091552734 C14.083499908447266,15.939183235168457 7.772683620452881,22.25 0,22.25 C0,22.25 0,22.25 0,22.25 C-7.772683620452881,22.25 -14.083499908447266,15.939183235168457 -14.083499908447266,8.166500091552734 C-14.083499908447266,8.166500091552734 -14.083499908447266,-8.166500091552734 -14.083499908447266,-8.166500091552734 C-14.083499908447266,-15.939183235168457 -7.772683620452881,-22.25 0,-22.25 C0,-22.25 0,-22.25 0,-22.25 C7.772683620452881,-22.25 14.083499908447266,-15.939183235168457 14.083499908447266,-8.166500091552734z"></path>
                        </g>
                      </g>
                      <g transform="matrix(0.9999982118606567,0,0,0.9999982118606567,14,26.93737030029297)" opacity="1">
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(249,249,249)" stroke-opacity="1" stroke-width="2" d=" M-0.27300000190734863,-13.596792221069336 C-0.27300000190734863,-13.596792221069336 -0.27300000190734863,-10.822014808654785 -0.27300000190734863,-10.822014808654785"></path>
                        </g>
                      </g>
                    </g>
            </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showMobileMenu = ref(false)
const scrollY = ref(0)
const windowHeight = ref(0)

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}

// Hover methods
const handleMouseEnter = (event) => {
  // Check if it's the active link (Accueil) - no hover effect
  if (event.target.classList.contains('framer-v-1ux0cun')) {
    // Do nothing for active link - keep original background
    return
  } else {
    // Apply hover background for non-active links - exact same as selected (no backdrop-filter)
    event.target.style.backgroundColor = 'rgba(142, 142, 142, 0.3)'
    event.target.style.transition = 'all 0.3s ease'
  }
}

const handleMouseLeave = (event) => {
  // Check if it's the active link (Accueil) - no hover effect
  if (event.target.classList.contains('framer-v-1ux0cun')) {
    // Do nothing for active link - keep original background
    return
  } else {
    // Remove background for non-active links
    event.target.style.backgroundColor = 'rgba(0, 0, 0, 0)'
  }
}

const handleScroll = () => {
  scrollY.value = window.scrollY
}

onMounted(() => {
  windowHeight.value = window.innerHeight
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* EXACT We Are Small Styles */

/* Main Navigation Container */
.framer-ogrtrz {
  align-content: center;
  align-items: center;
  display: flex;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 10px;
  height: min-content;
  justify-content: flex-start;
  overflow: visible;
  padding: 0 16px;
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  width: min-content;
  z-index: 10;
}

/* Container */
.framer-mk04t1-container {
  opacity: 1;
}

    /* Main Content */
    .framer-jvP1L.framer-1ayyxmz {
      align-content: center;
      align-items: center;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      gap: 10px;
      height: min-content;
      justify-content: center;
      overflow: visible;
      /* padding: 32px 0px 0px 0px; */
      position: relative;
      width: min-content;
    }

    /* Wrapper */
    .framer-w06gao {
      --5k5oja: 6px 6px 6px 16px;
      --kunksx: flex-start;
      backdrop-filter: blur(7px);
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 36px;
      opacity: 1;
      padding: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: none;
      transition: all 0.3s ease;
    }

    .framer-w06gao:hover {
      box-shadow: none;
    }

/* Container for each link */
.framer-yq540w-container,
.framer-19u2gt7-container,
.framer-1uurfk6-container,
.framer-1jgqzy7-container,
.framer-2z87et-container {
  opacity: 1;
  margin-right: 10px;
}

/* Remove margin from last element */
.framer-2z87et-container {
  margin-right: 0;
}

    /* Navigation Links */
    .framer-3iAZX {
      --border-bottom-width: 0px;
      --border-color: rgba(0, 0, 0, 0);
      --border-left-width: 0px;
      --border-right-width: 0px;
      --border-style: solid;
      --border-top-width: 0px;
      background-color: rgba(0, 0, 0, 0);
      border-radius: 20px;
      opacity: 1;
      transition: all 0.3s ease;
      cursor: pointer;
      text-decoration: none;
      display: block;
      padding: 8px 15px;
      white-space: nowrap;
    }

/* Active Link */
.framer-3iAZX.framer-v-1ux0cun {
  background-color: rgba(142, 142, 142, 0.3);
}

/* Hover Effect - Exact same color as active link */
.framer-3iAZX:hover:not(.framer-v-1ux0cun) {
  background-color: rgba(142, 142, 142, 0.3) !important;
  backdrop-filter: none !important;
  transform: none !important;
  transition: all 0.3s ease !important;
}

/* Force hover to work when menu is at bottom */
.framer-ogrtrz .framer-3iAZX:hover:not(.framer-v-1ux0cun) {
  background-color: rgba(142, 142, 142, 0.3) !important;
  backdrop-filter: none !important;
  transform: none !important;
}

/* Force hover on all links regardless of position */
.framer-3iAZX:hover {
  background-color: rgba(142, 142, 142, 0.3) !important;
  backdrop-filter: none !important;
  transform: none !important;
}

/* Ultra specific selectors to force hover */
div[data-framer-name="Navigation - sticky header - home"] .framer-3iAZX:hover {
  background-color: rgba(142, 142, 142, 0.3) !important;
  backdrop-filter: none !important;
  transform: none !important;
}

/* Force hover on all navigation links */
.framer-ogrtrz .framer-w06gao .framer-3iAZX:hover {
  background-color: rgba(142, 142, 142, 0.3) !important;
  backdrop-filter: none !important;
  transform: none !important;
}

/* Force hover on container links */
.framer-yq540w-container .framer-3iAZX:hover,
.framer-19u2gt7-container .framer-3iAZX:hover,
.framer-1uurfk6-container .framer-3iAZX:hover,
.framer-1jgqzy7-container .framer-3iAZX:hover,
.framer-2z87et-container .framer-3iAZX:hover,
.framer-dblmsh-container .framer-3iAZX:hover {
  background-color: rgba(142, 142, 142, 0.3) !important;
  backdrop-filter: none !important;
  transform: none !important;
}

/* Force hover with maximum specificity */
.framer-ogrtrz[data-framer-name="Navigation - sticky header - home"] .framer-mk04t1-container .framer-jvP1L .framer-w06gao .framer-3iAZX:hover {
  background-color: rgba(142, 142, 142, 0.3) !important;
  backdrop-filter: none !important;
  transform: none !important;
}

/* Force hover on all links with maximum specificity */
.framer-ogrtrz .framer-mk04t1-container .framer-jvP1L .framer-w06gao .framer-3iAZX:hover {
  background-color: rgba(142, 142, 142, 0.3) !important;
  backdrop-filter: none !important;
  transform: none !important;
}

/* Force hover on all navigation elements */
.framer-ogrtrz .framer-3iAZX:hover {
  background-color: rgba(142, 142, 142, 0.3) !important;
  backdrop-filter: none !important;
  transform: none !important;
}

/* Force hover when menu is at bottom (absolute position) */
.framer-ogrtrz[style*="position: absolute"] .framer-3iAZX:hover {
  background-color: rgba(142, 142, 142, 0.3) !important;
  backdrop-filter: none !important;
  transform: none !important;
}

/* Force hover on all links when menu is at bottom */
.framer-ogrtrz[style*="bottom: 60px"] .framer-3iAZX:hover {
  background-color: rgba(142, 142, 142, 0.3) !important;
  backdrop-filter: none !important;
  transform: none !important;
}

/* Force hover when menu is at bottom using dynamic class */
.menu-at-bottom .framer-3iAZX:hover {
  background-color: rgba(142, 142, 142, 0.3) !important;
  backdrop-filter: none !important;
  transform: none !important;
}

/* Force hover when menu is at top using dynamic class */
.menu-at-top .framer-3iAZX:hover {
  background-color: rgba(142, 142, 142, 0.3) !important;
  backdrop-filter: none !important;
  transform: none !important;
}

/* Force navigation to be interactive */
.framer-ogrtrz {
  pointer-events: auto !important;
  z-index: 9999 !important;
}

.framer-3iAZX {
  pointer-events: auto !important;
  cursor: pointer !important;
  user-select: none !important;
}

/* Ensure links are clickable */
.framer-3iAZX:hover {
  pointer-events: auto !important;
  cursor: pointer !important;
}

/* Disable hover on active link */
.framer-3iAZX.framer-v-1ux0cun:hover {
  background-color: rgba(142, 142, 142, 0.3) !important;
  backdrop-filter: none !important;
  transform: none !important;
  transition: none !important;
}

/* Force disable hover on active link with maximum specificity */
.framer-ogrtrz .framer-3iAZX.framer-v-1ux0cun:hover {
  background-color: rgba(142, 142, 142, 0.3) !important;
  backdrop-filter: none !important;
  transform: none !important;
  transition: none !important;
}

/* Ultra specific selector to disable hover */
.framer-ogrtrz .framer-w06gao .framer-yq540w-container .framer-3iAZX.framer-v-1ux0cun:hover {
  background-color: rgba(142, 142, 142, 0.3) !important;
  backdrop-filter: none !important;
  transform: none !important;
  transition: none !important;
}

/* Completely disable hover on active link */
.framer-3iAZX.framer-v-1ux0cun {
  pointer-events: none !important;
}

/* Re-enable pointer events for the text inside */
.framer-3iAZX.framer-v-1ux0cun .framer-37iskh {
  pointer-events: auto !important;
}

/* Stack */
.framer-37iskh {
  opacity: 1;
}

/* Mouse Icon Fade Out Effect */
.mouse-icon-fade {
  opacity: 1;
  transition: opacity 2s ease-out;
  animation: fadeOut 3s ease-in-out forwards;
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}


/* Text Container */
.framer-r9c3d8 {
  outline: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-shrink: 0;
  --extracted-r6o4lv: var(--variable-reference-MXbASb1hd-UqAbO3QOD);
  --framer-link-text-color: rgb(0, 153, 255);
  --framer-link-text-decoration: underline;
  --variable-reference-MXbASb1hd-UqAbO3QOD: var(--token-7a38b3e5-a794-4c9b-8524-4707dbab1be0, rgb(255, 255, 255));
  transform: none;
  opacity: 1;
}

/* Text */
.framer-text {
  --framer-text-color: var(--extracted-r6o4lv, var(--variable-reference-MXbASb1hd-UqAbO3QOD));
  color: rgb(255, 255, 255);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  margin: 0;
  letter-spacing: 0.05em;
  padding: 0 15px;
}

/* Mouse Icon */
.framer-gyjdss {
  margin-left: 16px;
}

.framer-18e92ay {
  height: 100%;
  width: 100%;
  opacity: 1;
  transform: none;
}

.framer-1x9cenz-container {
  opacity: 1;
}

.framer-Hhq3D {
  height: 100%;
  width: 100%;
  will-change: transform;
  opacity: 0;
  transform: none;
}

.framer-1ukyhxd-container {
  opacity: 1;
}

.framer-1ukyhxd-container div {
  height: 100%;
  width: 100%;
}

.framer-1ukyhxd-container svg {
  width: 28px;
  height: 60px;
  transform: translate3d(0px, 0px, 0px);
}

/* Responsive */
@media (max-width: 768px) {
  .framer-jvP1L.framer-1ayyxmz {
    flex-direction: column;
    gap: 8px;
  }
  
  .framer-gyjdss {
    margin-left: 0;
    margin-top: 8px;
  }
}
</style>