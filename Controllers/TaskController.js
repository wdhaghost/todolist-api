import TaskModel from "../Models/TaskModel.js";

export const getTasks = async(req,res) => {
    try {
        const userID =req.body.user
        const tasks = await TaskModel.find(userID)
        res.json(tasks)
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server Error' });
    }
}

export const createTask = async(req,res)=>{
    try {
        const userID =req.body.user
        const title = req.body.title
        const task = new TaskModel ({title,userID})
        await task.save()
        res.json(task)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error' });
    }
}

export const getTaskById = async(req,res)=>{
    try {
        const _id=req.params.id
        const task =await TaskModel.findById(_id)
        if(!task){
            return res.status(404).json({message:'Tache non trouvée'})
        }
        res.json(task)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error' });
    }
}

export const updateTask = async (req,res)=>{
    try {
        const{title,completed}=req.body
        const updateTask = await TaskModel.findByIdAndUpdate(
            req.params.id,
            {title, completed},
            {new:true})
        if(!updateTask){
            return res.status(404).json({message:'Tache non trouvée'})
        }
        res.json(updateTask)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error' });
    }
}

export const deleteTask = async (req, res)=>{
    try {
        const task =await TaskModel.findByIdAndDelete(req.params.id)
        if(!deleteTask){
            return res.status(404).json({message:'Tache non trouvée'})

        }
        else{

            res.json({message:"Tache supprimée"})
        }
    } catch (error) {
        console.log(error)
        res.status(500)
    }
}