export const useImagePath = () => {
  const getImagePath = (path: string): string => {
    // Si le chemin commence déjà par http ou //, on le retourne tel quel
    if (path.startsWith('http') || path.startsWith('//')) {
      return path
    }
    
    // Récupérer le baseURL depuis la config Nuxt
    // Utiliser useRuntimeConfig pour obtenir le baseURL de manière sûre
    let baseURL = '/drop-the-mouse-website/'
    
    try {
      // Essayer d'obtenir le baseURL depuis la config si disponible
      if (process.server) {
        // En SSR/prerendering, utiliser directement la valeur de la config
        baseURL = '/drop-the-mouse-website/'
      } else {
        // En client, essayer d'utiliser useApp si disponible
        const app = useApp()
        if (app?.config?.app?.baseURL) {
          baseURL = app.config.app.baseURL
        }
      }
    } catch (e) {
      // Si erreur, utiliser la valeur par défaut
      baseURL = '/drop-the-mouse-website/'
    }
    
    // Nettoyer le baseURL (enlever le slash final s'il existe)
    const cleanBaseURL = baseURL.endsWith('/') ? baseURL.slice(0, -1) : baseURL
    
    // Nettoyer le chemin (enlever le slash initial s'il existe)
    const cleanPath = path.startsWith('/') ? path : `/${path}`
    
    // Retourner le chemin avec le baseURL
    return `${cleanBaseURL}${cleanPath}`
  }
  
  return {
    getImagePath
  }
}

