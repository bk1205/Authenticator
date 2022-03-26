//Entry Point
const express = require("express");
const session = require("express-session");
const http = require("http");
const passport = require("passport");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");

const authRoutes = require("./routes/auth_routes");
const passportSetup = require("./config/passport_setup");
const keys = require("./config/keys");

const cors = require("cors")({
  origin: "https://oauthenticator.herokuapp.com",
});

const app = express();
app.use(cors);

// const server = http.createServer(app);
// var whitelist = [

//   "https://oauthenticatorbackend.herokuapp.com",
// ];
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
// };
const allowCrossDomain = function (req, res, next) {
  res.header(
    "Access-Control-Allow-Origin",
    "https://oauthenticator.herokuapp.com"
  );
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};

app.use(allowCrossDomain);

mongoose.connect(
  keys.database.mongodbURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  () => {
    console.log("connected to mongodb");
  }
);

app.use(
  cookieSession({
    keys: [keys.session.cookieKey],
    maxAge: 24 * 60 * 60 * 1000,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoutes);

port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("Server is listening on port 4000");
});
