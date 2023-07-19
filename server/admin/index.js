import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import { Database, Resource } from "@adminjs/mongoose";
import { Blog } from "../models/Blog.js";
import {User} from "../models/User.js";
import {NewReport} from "../models/contact.js";
AdminJS.registerAdapter({
    Database, Resource
});

const port = process.env.PORT || 3000;

const DEFAULT_ADMIN = {
    email: "admin@admin.com",
    password: "1234"
}

const authenticate = async (email, password) => {
    if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
        return DEFAULT_ADMIN;
    }
    return null;
}

export const startAdmin = (app) => {
    const admin = new AdminJS({
        resources: [Blog, User , NewReport]
    });
    const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
        admin,
        {
            cookieName: 'adminjs',
            cookiePassword: 'sessionsecret',
            authenticate
        },
        null,
        {
            resave: false,
            saveUninitialized: true,
            secret: 'sessionsecret'
        }
    );
    app.use(admin.options.rootPath, adminRouter);
    console.log(`AdminJS started on http://localhost:${port}${admin.options.rootPath}`);
}

