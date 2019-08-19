const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    firebaseId: {
        type: String, 
        required: true
    },
    discoveredHaunts: [Schema.Types.ObjectId]

})

module.exports = model('User', UserSchema)
