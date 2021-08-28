import dotenv from 'dotenv'
dotenv.config()
import express  from "express";
import cors from 'cors'
import connectToDatabase from './models/index.js';

const app = express();
const PORT = process.env.PORT

app.use(express.json())

app.get("/", (req, res)=> {
    res.send("Hello World")
})

connectToDatabase().then((err) => {
    if(err) {
        return console.log(err)
    }
    app.listen(PORT, () => {
        console.log("Server is running on port " + PORT)
    })
})