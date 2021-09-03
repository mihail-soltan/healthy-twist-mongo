import Router from 'express'
import { getAll, getOneById } from '../controllers/posts.js'
const postRouter = Router()
postRouter
.route("/")
.get(getAll)

postRouter
.route("/:id")
.get(getOneById)
export default postRouter