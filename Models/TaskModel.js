import mongoose from 'mongoose'

const TaskSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,"qu'avez-vous planifier"]
    },
    completed:{
        type:Boolean,
        default:false
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    userID:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'UserModel'
    }
})

const TaskModel = mongoose.model("Task", TaskSchema)
export default TaskModel