const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const maxAge = 60*60*24;
const createToken = function (user){
    return jwt.sign({user},"gizlikelime",{expiresIn: maxAge});
}

const signup_get = (req,res)=>{
    res.render('signup',{title : "Kayıt Ol"});
}

const signup_post = (req,res)=>{
    const user = User(req.body);
    user.save().then((result)=>{
        res.redirect('/login');
    }).catch((err)=>{
        console.log(err);
    });
}

const login_get = (req,res)=>{
    res.render('login',{title : "Giriş Yap"});
}

const login_post =  async function (req,res){
    const {username,password} = req.body;
    try{
        const user =  await User.login();
        const token = createToken(user);
        res.cookie("jwt",token,{httpOnly : true,maxAge : maxAge});
        res.redirect('/admin');
    }catch(e){
        console.log(e);
    }
}

const logout = function(req,res){
    res.cookie("jwt","",{maxAge : 1});
    res.redirect('/login');
}

module.exports = {
    signup_get,
    signup_post,
    login_get,
    login_post,
    logout
}