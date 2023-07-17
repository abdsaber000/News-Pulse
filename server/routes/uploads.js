import express  from "express";
import {uploadMethod} from "../controllers/uploads.js";
const uploadRouter = express.Router();

uploadRouter.route('/').post(uploadMethod);
uploadRouter.route('/:image');

export {uploadRouter};