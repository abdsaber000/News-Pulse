import mongoose from "mongoose";

export const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}

// module.exports = connectDB