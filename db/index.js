const models = require('./models')
const mongoose = require('mongoose')

var db

exports.connect = async () => {
    if (db) return db
    const {DB_NAME, DB_HOST, DB_KEY, DB_PORT} = process.env
    try{
        db = await mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}`)
    }catch( err ){
        console.error('Error creating db conection: ' + err)
        return err
    }
}

exports.getConnection = () => {
    if (db) return db
    console.error('There is no mongo connection')
    return null
}

exports.models = models