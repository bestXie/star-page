import App from '../app'
sprWebBase.prototype.extendsPlugins();

class router{
    constructor(routerConfigOpt){
        const router = sprWebBase.prototype.initRouter(routerConfigOpt);

        router.beforeEach((to, from, next) => {
            window.scrollTo(0, 0);
            next()
        })

        var sprWebBaseRouter = new sprWebBase({
            el: '#app',
            router: router,
            render: h => h(App)
        })
    }
}

export default router