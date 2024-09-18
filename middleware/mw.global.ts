export default defineNuxtRouteMiddleware((to) => {
    if (to.path === '/non-existing') {
        return navigateTo('/existing-page')
    }
})