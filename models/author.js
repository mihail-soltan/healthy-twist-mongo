import mongoose from "mongoose";

const AuthorSchema = new mongoose.Schema({
  _id: {
    $oid: {
      type: "ObjectId",
    },
  },
  name: {
    type: "String",
  },
  email: {
    type: "String",
  },
  aboutme: {
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
  avatar: {
    $oid: {
      type: "ObjectId",
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
});
const Author = mongoose.model("authors", AuthorSchema);

export default Author