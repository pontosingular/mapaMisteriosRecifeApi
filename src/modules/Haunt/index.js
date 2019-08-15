const Controller = require('./controller')

const router = (app) => {
    app.get('/haunts', Controller.get)
    app.post('/haunts/', Controller.post)
    app.get('/haunts/:id', Controller.get)
    //app.patch('/:id', controller.patch(req, res))
    //app.delete('/:id', controller.delete(req, res)
}

module.exports = router