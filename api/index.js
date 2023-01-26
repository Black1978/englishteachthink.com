import express from 'express'
import userRouter from './routes/users.js'
import postRouter from './routes/posts.js'
import commentRouter from './routes/comments.js'
import likeRouter from './routes/likes.js'
import authRouter from './routes/auth.js'
import relationshipsRouter from './routes/relationships.js'
import multer from 'multer'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Credentials', true)
    next()
})
app.use(express.json())
app.use(
    cors({
        origin: 'http://localhost:3000',
    })
)
app.use(cookieParser())

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../client/public/upload')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    },
})

const upload = multer({ storage: storage })
app.post('/api/upload', upload.single('file'), (req,res) => {
    const file = req.file
    res.status(200).json(file.filename)
})

app.use('/api/users', userRouter)
app.use('/api/posts', postRouter)
app.use('/api/comments', commentRouter)
app.use('/api/likes', likeRouter)
app.use('/api/auth', authRouter)
app.use('/api/relationships', relationshipsRouter)

app.listen(8808, () => {
    console.log('API working!')
})
