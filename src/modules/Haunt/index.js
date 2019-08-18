const Controller = require('./controller')
const router = require('express').Router()
const {test} = require('../../middlewares')


    router.get('/', Controller.get)
    router.post('/', Controller.post)
    router.get('/:id', Controller.get)
    router.get('/inrange', Controller.inRange)
    router.use(test)
    //app.patch('/:id', controller.patch(req, res))
    //app.delete('/:id', controller.delete(req, res)


module.exports = {
    url: '/haunts',
    router,
    private: true
}