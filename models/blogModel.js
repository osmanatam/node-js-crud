var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    short : {
        type : String,
        required : true
    },
    long : {
        type : String,
        required : true
    }
});

var Blog = mongoose.model('Blog',blogSchema);
module.exports = Blog;