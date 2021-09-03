import Post from "../models/post.js";

export async function getAll(req, res) {
  try {
    const result = await Post.find().populate("cuisine").populate("postedBy")
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getOneById(request, response) {
  try {
    const { query } = request.params;
    const result = await Post.findOne(query).populate("cuisine");
    response.json(result);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
}