const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');
const User = require('../models/User');


passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy(
        {
            callbackURL: "/auth/google/redirect",
            clientID: keys.google.clientID,
            clientSecret: keys.google.clientSecret,
            proxy: true
        },
        async (accessToken, refreshToken, profile, done) => {
            //check whether user already exist or not
            const existingUser = await User.findOne({googleId: profile.id})
                if(existingUser) {
                    //already have the user
                    console.log(profile);
                    console.log('user from DB: ', existingUser);
                    return done(null, existingUser);
                }
                console.log(profile);
                // if not, create user in our DB
                const newUser = await User({
                    username: profile.displayName,
                    googleId: profile.id,
                    photoId: profile.photos[0]['value'],
                }).save();
                console.log('newUser created ie, ', newUser);
                done(null, newUser);

            
        }
    )
);

