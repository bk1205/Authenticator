import React from "react";

import { useSelector } from "react-redux";
import { FcGoogle } from "react-icons/fc";

import "./Login.css";
import homeImage from "../assets/vector.svg";
import Logo from "./Logo";

const Login = () => {
  const user = useSelector((state) => state);

  const loginWithGoogle = (ev) => {
    ev.preventDefault();

    let popup = window.open(
      "/auth/google",
      "_blank",
      "width=452px, height=633px, top=20px, left=200px"
    );

    window.addEventListener("message", (e) => {
      console.log("Google login", e.data);
      window.location.reload();
    });
  };

  return (
    <div className="login">
      <div className="login__left">
        <Logo user={user.auth} />
        <img src={homeImage} alt="img" />
      </div>
      <div className="login__right">
        <h3>Sign in with Google</h3>
        <div className="login__btns">
          <div
            id="google__button"
            onClick={loginWithGoogle}
            className="login__btn"
          >
            <FcGoogle size="25px" id="googleIcon" className="login__icon" />{" "}
            Sign in with Google
          </div>

          {/* <div id="fb__button" className="login__btn"><FaFacebook size="25px" id="fbIcon" color="#fff" className="login__icon" /> Sign in with Facebook</div> */}
        </div>
      </div>
    </div>
  );
};

export default Login;

// const express = require('express');
// const session = require('express-session');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const passport = require('passport');
// const passportLocalMongoose = require('passport-local-mongoose');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
// require('dotenv').config();

// const app = express();
// app.use(session({
//     secret: "My secret",
//     resave: false,
//     saveUnintialized: false
// }));
// app.use(bodyParser.json({ extended: true })); //By setting extended as true, we ensure that request object data can be of any type.

// app.use(passport.initialize());
// app.use(passport.session());

// mongoose.connect('mongodb://localhost:27017/userDB', {useNewUrlParser: true, useUnifiedTopology: true});

// const userSchema = new mongoose.Schema({
//     username: String,
//     name : String,
//     googleId: String,
//     secret: String
// });
// userSchema.plugin(passportLocalMongoose);
// const User = new mongoose.model("User", userSchema);

// passport.use(User.createStrategy());

// passport.serializeUser(User.serializeUser((user, done) => {
//     done(null, user.id);
// }));
// passport.deserializeUser(User.deserializeUser((id, done) => {
//     User.findById(id, (err, user) => {
//         done(err, user);
//     })
// }));

// passport.use(new GoogleStrategy({
//     clientID: process.env.CLIENT_ID,
//     clientSecret: process.env.CLIENT_SECRET,
//     callbackURL: "http://localhost:4000/auth/google/rooms",
//     userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     User.findOrCreate({ googleId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }
// ));

// app.get('/auth/google', passport.authenticate("google", {scope: ["profile"]}) );

// app.get("/auth/google/callback", passport.authenticate("google", {
//     failureRedirect: "http://localhost/3000"
// }), (req, res) => {
//     res.send();
//     // res.redirect("http://localhost/3000");
// })

// app.get('/logout', (req, res) => {
//     res.redirect("http://localhost/3000");
// });

// app.listen(4000, () => console.log('server is listening at port 4000'));
