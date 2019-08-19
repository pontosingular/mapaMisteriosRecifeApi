const {User} = require('../../db/models')

const get = async (req,res) => {
    const userId = req.headers['x-user-id']

    let user = await User.findOne({firebaseId: userId})
    if (! user){
        user = await User.create({firebaseId: userId, discoveredHaunts: []})
    }
    return res.json(user)
}

module.exports = {get}