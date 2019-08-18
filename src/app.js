const express = require('express')
const cors = require('cors')
const db = require('./db')
require('dotenv/config')

// module importing
const modulesRegister = require('./modules')


const startServer = async () => {

    const {PORT, APP_NAME} = process.env
    // creating server obj and setting middlewares
    const app = express()
    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({extended:true}))
    modulesRegister(app)
    await db.connect()
    app.listen(APP_PORT, () => {
        console.log(`${APP_NAME} is listening on port ${PORT}`)
    })
}

startServer()
