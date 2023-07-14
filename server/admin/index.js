import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import {Database , Resource} from "@adminjs/mongoose";
import {Blog} from "../models/Blog.js";
AdminJS.registerAdapter({
    Database , Resource 
  });
const port = process.env.PORT || 3000;
export const startAdmin = (app)=>{
    const admin = new AdminJS({
        resources : [Blog]
      });
      const adminRouter = AdminJSExpress.buildRouter(admin);
      app.use(admin.options.rootPath, adminRouter);
      console.log(`AdminJS started on http://localhost:${port}${admin.options.rootPath}`);
}

