import express from "express";
import { getAboutUs } from "../controllers/about-us.js";

const AboutUsRouter = express.Router();

AboutUsRouter.route('/').get(getAboutUs);

export {AboutUsRouter};