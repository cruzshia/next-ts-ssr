const nextRoutes = require('next-routes')
const routes = (module.exports = nextRoutes())

routes.add('accounts', '/accounts', 'accounts')
routes.add('index', '/', 'index')
