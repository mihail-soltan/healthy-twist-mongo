import Router from 'express'
import { getAll } from '../controllers/cuisines.js'
const cuisineRouter = Router()
cuisineRouter
.route("/")
.get(getAll)

export default cuisineRouter