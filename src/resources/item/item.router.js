import { Router } from 'express'
const controller = (req, res) => {
  res.send({ message: 'hello' })
}

export const itemRouter = Router()
itemRouter
  .route('/')
  .get(controller)
  .post(controller)
itemRouter
  .route('/:id')
  .put(controller)
  .delete(controller)
  .get(controller)
