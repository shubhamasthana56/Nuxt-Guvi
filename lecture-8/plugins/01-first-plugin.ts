export default defineNuxtPlugin(()=> {
    addRouteMiddleware('test-dynamic', ()=> {
        console.log('I am dynamic middleware from plugins')
    }, {global: true})
    return {
        provide: {
            getAppEnvironment() {
                return process.env
            }
        }
    }
})