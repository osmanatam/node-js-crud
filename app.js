var express = require('express');
var app = express();
var mongoose = require('mongoose');

app.set("view engine","ejs");
app.use(express.urlencoded({extended : true}));
app.use(express.static('public'));

var authRoute = require('./routes/authRoute');
var adminRoute = require('./routes/adminRoute');
var blogRoute = require('./routes/blogRoute');

var dbURL = "mongo_db_url";
mongoose.connect(dbURL,{useNewUrlParser : true, useUnifiedTopology : true , useCreateIndex : true}).then((result)=>{
    app.listen(3000,function (){
        console.log("3000 Portu Dinleniyor");
    });
}).catch((err)=>{
    console.log(err);
});


app.use('/',authRoute);  //---------------> ANA DİZİNE GELEN BÜTÜN İSTEKLERN ROUTE KISMI
app.use('/blog',blogRoute);  //-----------> BLOG ROUTE KISMI
app.use('/admin',adminRoute); //----------> ADMIN ROUTE KISMI


app.get('/about',(req,res)=>{
    res.render('about',{title : "Hakkımızda"});
});

app.use(function (req,res){
    res.render('404',{title : "Hata Sayfası"});
});
