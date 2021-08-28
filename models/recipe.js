import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema({
  _id: {
    type: "ObjectId",
  },
  Ingredients: {
    type: "Mixed",
  },
  Title: {
    type: "String",
  },
  published: {
    type: "Date",
  },
  userStory: {
    type: "String",
  },
  recipe: {
    type: "String",
  },
  prepTime: {
    type: "Number",
  },
  published_at: {
    type: "Date",
  },
  createdAt: {
    type: "Date",
  },
  updatedAt: {
    type: "Date",
  },
  __v: {
    type: "Number",
  },
  Picture: {
    _id: {
      type: "ObjectId",
    },
    name: {
      type: "String",
    },
    alternativeText: {
      type: "String",
    },
    caption: {
      type: "String",
    },
    hash: {
      type: "String",
    },
    ext: {
      type: "String",
    },
    mime: {
      type: "String",
    },
    size: {
      type: "Number",
    },
    width: {
      type: "Number",
    },
    height: {
      type: "Number",
    },
    url: {
      type: "String",
    },
    formats: {
      thumbnail: {
        name: {
          type: "String",
        },
        hash: {
          type: "String",
        },
        ext: {
          type: "String",
        },
        mime: {
          type: "String",
        },
        width: {
          type: "Number",
        },
        height: {
          type: "Number",
        },
        size: {
          type: "Number",
        },
        path: {
          type: "Mixed",
        },
        url: {
          type: "String",
        },
      },
      small: {
        name: {
          type: "String",
        },
        hash: {
          type: "String",
        },
        ext: {
          type: "String",
        },
        mime: {
          type: "String",
        },
        width: {
          type: "Number",
        },
        height: {
          type: "Number",
        },
        size: {
          type: "Number",
        },
        path: {
          type: "Mixed",
        },
        url: {
          type: "String",
        },
      },
    },
    provider: {
      type: "String",
    },
    related: {
      type: "ObjectId",
    },
    createdAt: {
      type: "Date",
    },
    updatedAt: {
      type: "Date",
    },
    __v: {
      type: "Number",
    },
    id: {
      type: "ObjectId",
    },
  },
  ingredients: {
    type: "String",
  },
  author: {
    _id: {
      type: "ObjectId",
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
      type: "Date",
    },
    createdAt: {
      type: "Date",
    },
    updatedAt: {
      type: "Date",
    },
    __v: {
      type: "Number",
    },
    avatar: {
      _id: {
        type: "ObjectId",
      },
      name: {
        type: "String",
      },
      alternativeText: {
        type: "String",
      },
      caption: {
        type: "String",
      },
      hash: {
        type: "String",
      },
      ext: {
        type: "String",
      },
      mime: {
        type: "String",
      },
      size: {
        type: "Number",
      },
      width: {
        type: "Number",
      },
      height: {
        type: "Number",
      },
      url: {
        type: "String",
      },
      formats: {
        thumbnail: {
          name: {
            type: "String",
          },
          hash: {
            type: "String",
          },
          ext: {
            type: "String",
          },
          mime: {
            type: "String",
          },
          width: {
            type: "Number",
          },
          height: {
            type: "Number",
          },
          size: {
            type: "Number",
          },
          path: {
            type: "Mixed",
          },
          url: {
            type: "String",
          },
        },
        medium: {
          name: {
            type: "String",
          },
          hash: {
            type: "String",
          },
          ext: {
            type: "String",
          },
          mime: {
            type: "String",
          },
          width: {
            type: "Number",
          },
          height: {
            type: "Number",
          },
          size: {
            type: "Number",
          },
          path: {
            type: "Mixed",
          },
          url: {
            type: "String",
          },
        },
        small: {
          name: {
            type: "String",
          },
          hash: {
            type: "String",
          },
          ext: {
            type: "String",
          },
          mime: {
            type: "String",
          },
          width: {
            type: "Number",
          },
          height: {
            type: "Number",
          },
          size: {
            type: "Number",
          },
          path: {
            type: "Mixed",
          },
          url: {
            type: "String",
          },
        },
      },
      provider: {
        type: "String",
      },
      related: {
        type: "Array",
      },
      createdAt: {
        type: "Date",
      },
      updatedAt: {
        type: "Date",
      },
      __v: {
        type: "Number",
      },
      id: {
        type: "ObjectId",
      },
    },
    id: {
      type: "ObjectId",
    },
  },
  postedBy: {
    _id: {
      type: "ObjectId",
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
      type: "Date",
    },
    createdAt: {
      type: "Date",
    },
    updatedAt: {
      type: "Date",
    },
    __v: {
      type: "Number",
    },
    avatar: {
      _id: {
        type: "ObjectId",
      },
      name: {
        type: "String",
      },
      alternativeText: {
        type: "String",
      },
      caption: {
        type: "String",
      },
      hash: {
        type: "String",
      },
      ext: {
        type: "String",
      },
      mime: {
        type: "String",
      },
      size: {
        type: "Number",
      },
      width: {
        type: "Number",
      },
      height: {
        type: "Number",
      },
      url: {
        type: "String",
      },
      formats: {
        thumbnail: {
          name: {
            type: "String",
          },
          hash: {
            type: "String",
          },
          ext: {
            type: "String",
          },
          mime: {
            type: "String",
          },
          width: {
            type: "Number",
          },
          height: {
            type: "Number",
          },
          size: {
            type: "Number",
          },
          path: {
            type: "Mixed",
          },
          url: {
            type: "String",
          },
        },
        medium: {
          name: {
            type: "String",
          },
          hash: {
            type: "String",
          },
          ext: {
            type: "String",
          },
          mime: {
            type: "String",
          },
          width: {
            type: "Number",
          },
          height: {
            type: "Number",
          },
          size: {
            type: "Number",
          },
          path: {
            type: "Mixed",
          },
          url: {
            type: "String",
          },
        },
        small: {
          name: {
            type: "String",
          },
          hash: {
            type: "String",
          },
          ext: {
            type: "String",
          },
          mime: {
            type: "String",
          },
          width: {
            type: "Number",
          },
          height: {
            type: "Number",
          },
          size: {
            type: "Number",
          },
          path: {
            type: "Mixed",
          },
          url: {
            type: "String",
          },
        },
      },
      provider: {
        type: "String",
      },
      related: {
        type: "Array",
      },
      createdAt: {
        type: "Date",
      },
      updatedAt: {
        type: "Date",
      },
      __v: {
        type: "Number",
      },
      id: {
        type: "ObjectId",
      },
    },
    id: {
      type: "ObjectId",
    },
  },
  cuisine: {
    _id: {
      type: "ObjectId",
    },
    name: {
      type: "String",
    },
    published_at: {
      type: "Date",
    },
    createdAt: {
      type: "Date",
    },
    updatedAt: {
      type: "Date",
    },
    __v: {
      type: "Number",
    },
    id: {
      type: "ObjectId",
    },
  },
  id: {
    type: "ObjectId",
  },
});
