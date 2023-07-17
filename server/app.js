import express from "express";
import dotenv from "dotenv";
import {connectDB}  from "./db/connect.js";
import {startAdmin} from "./admin/index.js";
import {router} from "./routes/news.js"
import cors from "cors";
const app = express();
dotenv.config();

// middleware
app.use(express.json());
app.use(cors());

// routers

app.use('/api/v1/news' , router)

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    // connectDB
    await connectDB(process.env.MONGO_URI);
    startAdmin(app); 

    app.listen(port, () => console.log(`Server is listening port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();



