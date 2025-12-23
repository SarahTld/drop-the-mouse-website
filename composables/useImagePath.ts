export const useImagePath = () => {
  const config = useRuntimeConfig()
  const app = useApp()
  
  const getImagePath = (path: string): string => {
    // Si le chemin commence déjà par http ou /, on le retourne tel quel
    if (path.startsWith('http') || path.startsWith('//')) {
      return path
    }
    
    // Récupérer le baseURL depuis la config
    const baseURL = app.config.app.baseURL || '/drop-the-mouse-website/'
    
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

