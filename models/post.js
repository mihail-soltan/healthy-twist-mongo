import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  _id: {
    $oid: {
      type: "ObjectId",
    },
  },
  Title: {
    type: "String",
  },
  published: {
    $date: {
      $numberLong: {
        type: "String",
      },
    },
  },
  userStory: {
    type: "String",
  },
  recipe: {
    type: "String",
  },
  prepTime: {
    $numberInt: {
      type: "Date",
    },
  },
  ingredients: {
    type: "String",
  },
  published_at: {
    $date: {
      $numberLong: {
        type: "String",
      },
    },
  },
  createdAt: {
    $date: {
      $numberLong: {
        type: "String",
      },
    },
  },
  updatedAt: {
    $date: {
      $numberLong: {
        type: "String",
      },
    },
  },
  __v: {
    $numberInt: {
      type: "Date",
    },
  },
  created_by: {
    $oid: {
      type: "ObjectId",
    },
  },
  updated_by: {
    $oid: {
      type: "ObjectId",
    },
  },
  author: {
    $oid: {
      type: "ObjectId",
    },
  },
  postedBy: {
    $oid: {
      type: "ObjectId",
    },
  },
  cuisine: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cuisine' }],
  Picture: {
    $oid: {
      type: "ObjectId",
    },
  },
});

const Post = mongoose.model("post", PostSchema);

export default Post