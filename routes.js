//window.history.pushState({ data: 'movimiento' }, 'title', 'path')

const routes = [
    {
        path: '/',
        template: '<h1>Home</h1>'
    },
    {
        path: '/aboutme',
        template: '<h1>About me</h1>'
    },
    {
        path: '/contact',
        template: '<h1>Contact</h1>'
    },
]

module.exports = routes