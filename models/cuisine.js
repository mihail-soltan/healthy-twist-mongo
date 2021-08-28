import mongoose from "mongoose";

const CuisineSchema = new mongoose.Schema({
  _id: {
    $oid: {
      type: "ObjectId",
    },
  },
  name: {
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
});

const Cuisine = mongoose.model("cuisine", CuisineSchema);


export default Cuisine