import express from 'express'
import users from './users.js'
import tasks from './task.js'

const router = express.Router()

router.use('/users', users)
router.use('/tasks', tasks)

export default router