const Controller = require('./controller')
const router = require('express').Router()

    router.get('/', Controller.get)
    router.post('/add', Controller.post)
    router.get('/inrange', Controller.inRange)
    router.post('/discover', Controller.discover)
    router.get('/:id', Controller.get)
    //app.patch('/:id', controller.patch(req, res))
    //app.delete('/:id', controller.delete(req, res)


module.exports = {
    url: '/haunts',
    router,
    private: true
}