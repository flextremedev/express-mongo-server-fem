import { Router } from 'express'
import { me, updateMe } from './user.controllers'

export const userRouter = Router()

userRouter.get('/', me)
userRouter.put('/', updateMe)
