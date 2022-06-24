var express = require('express');
const passport=require("passport")
const passportlocal = require("passport-local");
const users = require('./users');
// const post=require("./post");
var router = express.Router();

passport.use(new passportlocal(users.authenticate()));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/1', function(req, res, next) {
  res.render('login');
});


router.get('/rlogin', function(req, res, next) {
  res.render('login');
});


router.get('/signup', function(req, res, next) {
  res.render('resister'); 
});


router.post('/register',function(req, res, next) {
  var newuser=new users({
    username:req.body.username,
    email:req.body.email,
    password:req.body.password,
  })
  users.register(newuser,req.body.password)
  .then(function(data){
    passport.authenticate("local")(req,res,function(){
      res.render('content',{data})
    })
  })
});

router.get('/landingpage',function(req,res){
  res.render("landingpage")
})

router.post('/login',passport.authenticate('local',{
  successRedirect:'/landingpage',
  failureRedirect:'/',
}),function(req,res,next){});

router.get('/logout',function(req,res,next){
  req.logOut();
  res.redirect("/");
})

function isLoggedIn(req,res,next)
{ if(req.isAuthenticated()){
  return next();
}
else{
  res.redirect('/')
}
}

module.exports = router;
