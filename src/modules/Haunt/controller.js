const {Haunt} = require('../../db/models')
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
    } = this.req.body

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
    const {range, points} = req.params

    if ( !(lng in points && lat in points) ){
        return res.status(400).json({error: ['Malformed json request, points must have lat and lng properties']})
    }
    if (range <=0 && typeof(range) != Number){
        return res.status(400).json({error: ['Malformed json request, Range must be a Number greater than 0']})
    }

    const {latMax, latMin, lngMax, lngMin} = createRangePoints(points, range)
    const query = {
        location: { 
            lat: {
                $gt: latMax,
                $lt: latMin
            },
            lng: {
                $gt: lngMax,
                $lt: lngMin
            }
        }
    }
    
    const haunts = await Haunt.find(query)
    return res.json(haunts)
}

module.exports = {get, post, inRange}