const models = require('./models')
const mongoose = require('mongoose')

var db

exports.connect = async () => {
    if (db) return db
    const {DB_USER, DB_KEY, DB_HOST, DB_NAME} = process.env
    try{
        db = await mongoose.connect(
            `mongodb+srv://${DB_USER}:${DB_KEY}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,
            { useNewUrlParser: true }
        )    
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