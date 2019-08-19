const Controller = require('./controller')
const router = require('express').Router()

router.get('/info', Controller.get)

module.exports = {
    url: '/user',
    router,
    private: true
}