import { Router } from 'express'
import controllers from './list.controllers'

export const listRouter = Router()

// /api/list
listRouter
  .route('/')
  .get(controllers.getOne)
  .post(controllers.createOne)

// /api/list/:id
listRouter
  .route('/:id')
  .get(controllers.getOne)
  .put(controllers.updateOne)
  .delete(controllers.removeOne)
