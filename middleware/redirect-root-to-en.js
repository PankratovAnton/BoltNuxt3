// middleware/redirect-root-to-en.js

export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path === '/') {
    return navigateTo('/en/', { redirectCode: 301 })
  }
})
