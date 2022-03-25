//Entry Point
const express = require("express");
const session = require("express-session");
const http = require("http");
const passport = require("passport");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");

const authRoutes = require("./routes/auth_routes");
const passportSetup = require("./config/passport_setup");
const keys = require("./config/keys");

const app = express();

const server = http.createServer(app);

app.use(
  cors({
    origin: "https://oauthenticator.herokuapp.com",
    credentials: true,
  })
);

mongoose.connect(
  keys.database.mongodbURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
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

server.listen(4000, () => {
  console.log("Server is listening on port 4000");
});
