const {auth,test} = require('../middlewares/')

const modules = [
    require('./Hello'),
    require('./Haunt')
]

module.exports = (app) => {
    console.log('starting modules')
    modules.forEach(module => {
        if (module.private){
            app.use(module.url, auth)
        }
        app.use(module.url, module.router)
    })
}