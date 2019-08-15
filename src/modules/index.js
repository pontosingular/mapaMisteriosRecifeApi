const Hello = require('./Hello')
const Haunt = require('./Haunt')

module.exports = (app) => {
    Hello(app)
    Haunt(app)
}