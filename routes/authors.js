import Router from 'express'
import { getAll } from '../controllers/authors.js'
const authorRouter = Router()
authorRouter
.route("/")
.get(getAll)

export default authorRouter