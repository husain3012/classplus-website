const express = require('express');
const router = express.Router();
const {
    signup,
    signin,
    signout,
    getAllSignups,
    getStudentsById,
    editTestsOfStudent
} = require('../controllers/auth.controllers');

// validators
const { runValidation } = require('../validators/index.validators');
const {
    userSignupValidator,
    userSigninValidator
} = require('../validators/auth.validators');

router.post('/signup',userSignupValidator, runValidation, signup);
router.post('/signin', userSigninValidator, runValidation, signin);
router.get('/signout', signout);
router.get('/getAllSignups', getAllSignups)
router.get('/getStudentsById/:id', getStudentsById)
router.put('/editTestsOfStudent/:id', editTestsOfStudent)


// const app = express();
// const bodyParser = require('body-parser');
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

// app.get('/contact',function(req,res){
//     res.render('contact',{qs:req.query})
//     console.log('req---> ',req.body)
// })
// app.post('/contact',urlencodedParser,function(req,res){
//     console.log('req---> ',req.body)
// })
      /* GET login page. */ 
      router.get('/login', function(req, res, next) { 
        res.render('login', { title: 'Login Page', message:
         req.flash('loginMessage') }); 
     }); 
 /* GET Signup */ 
 router.get('/signup', function(req, res) { 
    res.render('signup', { title: 'Signup Page', 
       message:req.flash('signupMessage') }); 
}); 

module.exports = router;