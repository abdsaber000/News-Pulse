import express from "express";
import dotenv from "dotenv";
import {connectDB}  from "./db/connect.js";
import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import {Database , Resource} from "@adminjs/mongoose";
import {Test} from "./models/Test.js";
const app = express();
dotenv.config();
AdminJS.registerAdapter({
  Database , Resource 
});
// middleware
app.use(express.json());


const port = process.env.PORT || 3000;

const start = async () => {
  try {
    // connectDB
    await connectDB(process.env.MONGO_URI);
    const admin = new AdminJS({
      resources : [Test]
    });
    const adminRouter = AdminJSExpress.buildRouter(admin);
    app.use(admin.options.rootPath, adminRouter);
    console.log(`AdminJS started on http://localhost:${port}${admin.options.rootPath}`);
    app.listen(port, () => console.log(`Server is listening port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();



