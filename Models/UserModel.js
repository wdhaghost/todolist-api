import mongoose, { Model } from 'mongoose'
import bcrypt from 'bcrypt'

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "adresse email obligatoire"],
        unique: true
    },
    username: {
        type: String,
        required: [true, "Id obligatoire"],
        unique: true
    },
    firstname: {
        type: String,
        required: [true, "Id obligatoire"],
        unique: true
    },
    lastname: {
        type: String,
        required: [true, "Id obligatoire"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Mot de passe obligatoire"]
    },
    createdAt: {
        type: Date,
        default: new Date()
    }

})

UserSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12)
})

const UserModel = mongoose.model("User",UserSchema)

export default UserModel