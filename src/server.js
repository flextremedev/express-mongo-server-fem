import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import { signup, signin, protect } from './utils/auth'
import { itemRouter } from './resources/item/item.router'
import { listRouter } from './resources/list/list.router'
import { userRouter } from './resources/user/user.router'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))
app.post('/signup', signup)
app.post('/signin', signin)
app.use('/api', protect)
app.use('/api/user', userRouter)
app.use('/api/item', itemRouter)
app.use('/api/list', listRouter)

export const start = () => {
  app.listen(3000, () => {
    console.log('Server listening on 3000...')
  })
}
