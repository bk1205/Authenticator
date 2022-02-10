const router = require('express').Router();
const passport = require('passport');

router.get('/login', (req, res) => {
    res.send('logging in');
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

//Granting permission from Google . Here passport will be working for us to serve the consent screen and then after granting permission from user, passport will get code from google that we can see in redirect uri and also it will redirect to cb uri
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

//Redirection from google consent screen after user allows with a code from google in redirection url. Here passport will use the code got from above process to grab the profile info of user from goolgle and then fire a callback fxn with profile info at our hand.
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    //After getting profile info from google passport will call the callback fxn in passport setup and after losing control from that fxn it will be calling this fxn.
    res.send('<script>window.opener.postMessage("closed", "http://localhost:3000"); setTimeout(window.close(), 10000); </script>');
});

router.get('/getUser', (req, res) => {
    res.send(req.user);
});

module.exports = router;