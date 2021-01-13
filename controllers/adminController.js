const Blog = require('../models/blogModel');

const admin_index = function (req,res){
    Blog.find().then((result)=>{
        res.render('admin',{title : "Admin",blogs : result});
    }).catch((err)=>{
        res.send(err);
    });
}

const admin_create = function (req,res){
    res.render('add-post',{title : "Yeni Yazı Ekle"});
}

const admin_store = function (req,res){
    const blog = new Blog(req.body);
    blog.save().then((result)=>{
        res.redirect('/admin');
    }).catch((err)=>{
        res.send(err);
    });
}

const admin_destroy = function (req,res){
    Blog.findByIdAndDelete(req.params.id).then((result)=>{
        res.json({link : "/admin"});
    }).catch((err)=>{
        res.send(err);
    });
}

module.exports = {
    admin_index,
    admin_create,
    admin_store,
    admin_destroy
}