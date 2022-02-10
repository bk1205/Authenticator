require('dotenv').config();

module.exports = {
    google: {
        clientID : process.env.CLIENT_ID,
        clientSecret : process.env.CLIENT_SECRET,
    },
    database: {
        mongodbURI : "mongodb://localhost:27017/ChatRoom"
    },
    session: {
        cookieKey: "bkumarIamDoyouknowme"
    }
}