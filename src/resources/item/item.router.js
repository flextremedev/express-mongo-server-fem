import { Router } from 'express'
import { itemControllers } from './item.controllers'

export const itemRouter = Router()
itemRouter
  .route('/')
  .get(itemControllers.getOne)
  .post(itemControllers.createOne)
itemRouter
  .route('/:id')
  .put(itemControllers.updateOne)
  .delete(itemControllers.removeOne)
  .get(itemControllers.getOne)
