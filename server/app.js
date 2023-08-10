import express from "express";
import dotenv from "dotenv";
import {connectDB}  from "./db/connect.js";
import {startAdmin} from "./admin/index.js";
import {router} from "./routes/news.js"
import { uploadRouter } from "./routes/uploads.js";
import {report} from "./routes/contact.js";
import { authRouter } from "./routes/auth.js";
import { AboutUsRouter } from "./routes/about-us.js";
import cors from "cors";
import fileUpload from "express-fileupload";
import {errorHandlerMiddleware} from "./middleware/error-handler.js"
const app = express();
dotenv.config();

// middleware
app.use(cors());
app.use('/uploads',express.static('./public'));
app.use(express.json());
app.use(fileUpload());
// routes

app.use('/api/v1/news' , router)
app.use('/api/v1/contact' , report);
app.use('/uploads' , uploadRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/about-us' , AboutUsRouter);
app.use(errorHandlerMiddleware);



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
