import { getTasks, createTask,getTaskById,updateTask,deleteTask } from "../Controllers/TaskController.js";
import { userVerification } from "../Middlewares/UserMiddleware.js";
import Express from "express";

const router = Express.Router()

router.get('/',userVerification,getTasks)
router.get('/:id',userVerification, getTaskById)
router.put('/:id',userVerification, updateTask)
router.delete('/:id',userVerification,deleteTask)
router.post('/newTask',userVerification,createTask)

export default router