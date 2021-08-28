import Router from 'express'
import { getAll } from '../controllers/posts.js'
import Cuisine from '../models/cuisine.js'
const postRouter = Router()
postRouter
.route("/")
.get(getAll)

export default postRouter