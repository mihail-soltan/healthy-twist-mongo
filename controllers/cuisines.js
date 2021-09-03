import Cuisine from "../models/cuisine.js";
// import Cuisine from '../models/cuisine.js'

export async function getAll(req, res) {
  try {
    const result = await Cuisine.find()
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
