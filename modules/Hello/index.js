// index file of each module are the router definer
const helloController = require('./controller')

const router = (app) => {
    app.get('/', helloController.hello)
}

module.exports = router