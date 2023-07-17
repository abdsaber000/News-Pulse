import express  from "express";
import {uploadMethod , getImage} from "../controllers/uploads.js";
const uploadRouter = express.Router();

uploadRouter.route('/').post(uploadMethod);
uploadRouter.route('/:image').get(getImage);

export {uploadRouter};