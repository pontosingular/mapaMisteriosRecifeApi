// index file of each module are the router definer
const helloController = require('./controller')
const router = require('express').Router()

router.get('/', helloController.hello)

module.exports = {
    url: '/',
    router,
    private: false
}