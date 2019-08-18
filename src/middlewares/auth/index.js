const admin = require('firebase-admin');
require('dotenv/config')

const {GOOGLE_APPLICATION_CREDENTIALS} = process.env
const serviceAccount = JSON.parse(Buffer.from(GOOGLE_APPLICATION_CREDENTIALS, 'base64').toString('ascii'))

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "firebase-adminsdk-bxuab@mapa-misterios-recife.iam.gserviceaccount.com"
})

authenticate = async (req, res, next) => {
    if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) {
        res.status(403).send('Unauthorized')
        return
    }
    const idToken = req.headers.authorization.split('Bearer ')[1];
    try {
        const decodedIdToken = await admin.auth().verifyIdToken(idToken)
        req.user = decodedIdToken;
        next()
        return
    } catch (e) {
        res.status(403).send('Unauthorized')
        return
    }
}

module.exports = authenticate