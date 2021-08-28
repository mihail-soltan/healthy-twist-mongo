import Post from "../models/post.js";
import Cuisine from '../models/cuisine.js'

export async function getAll(req, res) {
  try {
    const result = await Post.find().populate("cuisine");
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
