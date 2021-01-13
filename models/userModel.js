const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bcrypt = require('bcrypt');

var userSchema = new Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    }
},{timestamps : true});


// LOGİN KISMI
userSchema.statics.login = async function (username,password){
    const user = await User.findOne({username});
    if (user){
        const auth = await bcrypt.compare(password,user.password);
        if (auth){
            return user;
        }else{
            console.log("Kullanıcı Şifresi Yanlış");
        }
    }else{
        console.log("Kullanıcı Bulunamadı");
    }
}

// KAYIT KISMI İÇİN GEREKLİ AYAR
userSchema.pre('save',async function (next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password,salt);
    next();
});

const User = mongoose.model('User',userSchema);
module.exports = User;