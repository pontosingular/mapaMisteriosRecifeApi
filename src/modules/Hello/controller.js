const Hello = require('./domain')
// the controllers are the request handlers
const hello = (req, res) => {
    let {name} = req.query
    let result
    if (name){
        result = Hello.say(name)
    } else {
        result = Hello.defaultRes()
    }
    res.status(200).send(result)
}

module.exports = {hello}