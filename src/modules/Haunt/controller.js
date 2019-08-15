const {Haunt} = require('../../db/models')

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

module.exports = {get, post}