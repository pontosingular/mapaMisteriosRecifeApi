const {Haunt, User} = require('../db/models')
//const data = require('./haunts.json')
const {connect} = require('../db')
require('dotenv/config')

data = [{firebaseId: 'RIz9FlW8RXUs8a3RHu8KUunRfoh1', discoveredHaunts: []}]
console.log(Haunt)
const tasks = async () => {
    await connect()
    data.forEach( async (haunt) => {
        try {
            let created = await User.create(haunt)
            console.log('created: ', created)
        } catch (err) {
            console.log('Error!', err)
        }
    })

}
tasks()
