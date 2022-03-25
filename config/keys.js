require("dotenv").config();

module.exports = {
  google: {
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  },
  database: {
    mongodbURI:
      "mongodb+srv://bk1205:Kumar^2000@cluster0.a6h6f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  },
  session: {
    cookieKey: "bkumarIamDoyouknowme",
  },
};
