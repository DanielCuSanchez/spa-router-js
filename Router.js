class Router {
    constructor(routes) {
        this.routes = routes
        this._loadInitialRoute()
    }
    loadRoute(...urlSegs) {
        console.log('...urlsegs', urlSegs)
        const matchedRoute = this._matchUrlToRoute(urlSegs)
        //console.log(matchedRoute)
        const url = `/${urlSegs.join('/')}`
        history.pushState({}, 'this works', url)
        const routeOutElement = document.querySelectorAll('[data-router]')[0]
        routeOutElement.innerHTML = matchedRoute.template

    }

    _matchUrlToRoute(urlSegs) {
        const matchedRoute = this.routes.find(route => {
            const routePathSegs = route.path.split('/').slice(1)
            if (routePathSegs.length !== urlSegs.length) {
                return false
            }

            return routePathSegs
                .every((routePathSeg, i) => routePathSeg === urlSegs[i])
        })
        return matchedRoute
    }

    _loadInitialRoute() {
        const pathNameSplit = window.location.pathname.split('/')
        //console.log(pathNameSplit)
        const pathSegs = pathNameSplit.length > 1 ? pathNameSplit.slice(1) : ''
        console.log("...pathSegs", ...pathSegs)
        this.loadRoute(...pathSegs)
    }
}
