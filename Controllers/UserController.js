import UserModel from "../Models/UserModel.js"
import { createSecretToken } from "../util/SecretToken.js"
import bcrypt from "bcrypt"

export const Signup = async (req, res, next) => {
    try {
        const { email, username, firstname, lastname, password, createdAt } = req.body
        const existingUser = await UserModel.findOne({ email })
        if (existingUser) {
            return res.json({ message: "Email déjà existant" })
        }
        const user = await UserModel.create({ email, username, firstname, lastname, password, createdAt })
        const token = createSecretToken(user._id)
        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
        });
        res
            .status(201)
            .json({ message: "User signed in successfully", success: true, user });
        next();
    }
    catch (err) {
        console.error(err)
    }
};

export const Login = async (req, res, next) => {
    try {
        const { email, password } = req.body
        if(!email||!password){
            return res.json({message:"champs obligatoires"})
        }
        const user =await UserModel.findOne({email})
        const auth=await bcrypt.compare(password,user.password)
        if (!user||!auth){
            return res.json({message:"utlisateur ou mot passe incorrect"})
        }
        const token = createSecretToken(user._id)
        res.cookie("token",token,{
            withCredentials:true,
            httpOnly:false
        })
        res.status(201).json({message:"Connexion réussie",succes:true})
        next()
    } catch (err) {
        console.error(err)
    }
}