const mongoose =require('mongoose')
const bcrypt= require('bcryptjs')

const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        required:[true,"adresse email obligatoire"],
        unique:true
    },
    username:{
        type:String,
        required:[true, "Id obligatoire"],
        unique:true
    },
    firstname:{
        type:String,
        required:[true, "Id obligatoire"],
        unique:true
    },
    lastname:{
        type:String,
        required:[true, "Id obligatoire"],
        unique:true
    },
    password:{
        type:String,
        required:[true, "Mot de passe obligatoire"]
    },
    createdAt:{
        type:Date,
        default:new Date()
    }

})

UserSchema.pre("save",async function(){
    this.password = await bcrypt.hash(this.password,12)
})

module.exports= mongoose.model("User",UserSchema)