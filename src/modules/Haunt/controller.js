const {Haunt, User} = require('../../db/models')
const {createRangePoints} = require('../../../util/LocationUtil')

const get = async (req,res) => {

    if( req.query.id ){
        const {id} = req.query
        const haunt = await Haunt.findById(id)
        if (haunt)
            return res.json(haunt)
        else return res.status(404).send()
    }
    const haunts = await Haunt.find({})
    return res.json(haunts)
}

const post = async (req, res) => {

    const {
        name,
        coords,
        locationName,
        locationShortName,
        about,
        time,
        range,
        img,
        type
    } = req.body

    try {
        const haunt = await Haunt.create({
            name,
            coords,
            locationName,
            locationShortName,
            about,
            time,
            range,
            img,
            type
        })
    
        return res.json(haunt)
    }catch (err) {
        return res.status(500).json(err)
    }
    
}

const  inRange = async (req, res) => {
    const userId = req.headers['x-user-id']
    console.log(req.query)
    if (req.query.range && req.query.lat && req.query.lng) {
        var {range, lat, lng} = req.query
        range = parseFloat(range)
        lat = parseFloat(lat)
        lng = parseFloat(lng)
    } else {
        return res.status(400).json({error: ['Malformed json request, lat, lng and range param are required']})
    }
    
    if (range <=0 && typeof(range) != Number){
        return res.status(400).json({error: ['Malformed json request, Range must be a Number greater than 0']})
    }

    const {latMax, latMin, lngMax, lngMin} = createRangePoints({lat,lng}, range)
    const query = {
        "coords.lat": {
                $lte: latMax,
                $gte: latMin
        },
        "coords.lng": {
                $lte: lngMax,
                $gte: lngMin
        }
    }    
    var haunts = await Haunt.find(query)
    var {discoveredHaunts} = await User.findOne({firebaseId: userId}).select('discoveredHaunts')
    var mappedHaunts = haunts.map(haunt => {
        let {name, locationShortName, _id, range, time, type} = haunt
        return ({
            _id,
            name,
            locationShortName,
            range,
            time,
            type,
            discovered: discoveredHaunts.indexOf(haunt._id) > -1 
        })        
    })
    return res.json(mappedHaunts)
}

const discover = async (req,res) => {
    const userId = req.headers['x-user-id']
    const {hauntId} = req.body
    console.log(req.headers)
    // todo: Verify range
    console.log('params:', userId, hauntId)
    await User.findOneAndUpdate({firebaseId: userId}, {$push: {discoveredHaunts:hauntId}})
    let discoveredHaunt = await Haunt.find({_id: hauntId})
    return res.json(discoveredHaunt)
}

module.exports = {get, post, inRange, discover}