const {Schema, model} = require('mongoose');

const HauntSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    coords: {
        lat: {
            type: Number,
            required: true
        }
    },
    locationName: {
        type: String,
        required: true
    },
    locationShortName: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    time: {
        type: String, 
        required: true
    },
    range: {
        type: Number,
        required: true
    },
    img: {
        type: String,
    },
    type: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = model('Haunt', HauntSchema)

