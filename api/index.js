import express from 'express'
import userRouter from './routes/users.js'
import postRouter from './routes/posts.js'
import commentRouter from './routes/comments.js'
import likeRouter from './routes/likes.js'
import authRouter from './routes/auth.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.use('/api/users', userRouter)
app.use('/api/posts', postRouter)
app.use('/api/comments', commentRouter)
app.use('/api/likes', likeRouter)
app.use('/api/auth', authRouter)

app.listen(8808, () => {
    console.log('API working!')
})
