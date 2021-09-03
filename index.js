import dotenv from 'dotenv'
dotenv.config()
import express  from "express";
import connectToDatabase from './models/index.js';
import postRouter from './routes/posts.js'
import cuisineRouter from './routes/cuisines.js'
import authorRouter from './routes/authors.js'
import cors from 'cors'

const app = express();
const PORT = process.env.PORT

app.use(express.json())
app.use(cors());

app.get("/", (req, res)=> {
    res.send("Hello World")
})

app.use('/posts', postRouter)
app.use('/cuisines', cuisineRouter)
app.use('/authors', authorRouter)
connectToDatabase().then((err) => {
    if(err) {
        return console.log(err)
    }
    app.listen(PORT, () => {
        console.log("Server is running on port " + PORT)
    })
})

