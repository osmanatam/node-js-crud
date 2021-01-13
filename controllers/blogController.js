var Blog = require('../models/blogModel');

const blog_index = (req,res)=>{
    Blog.find().then((result)=>{
        res.render('index',{title : "Yazılar", blogs : result});
    }).catch((err)=>{
        res.send(err);
    });
}

const blog_detail = (req,res)=>{
    const id = req.params.id;
    Blog.findById(id).then((result)=>{
        res.render('blog',{title : "Blog Detay",blog : result});
    }).catch((err)=>{
        res.send(err);
    });
}

module.exports = {
    blog_index,
    blog_detail
}