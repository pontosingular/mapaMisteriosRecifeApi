const testMiddleware = (req,res,next) => {
    console.log('Test middleware!')
    next()
}

module.exports = testMiddleware