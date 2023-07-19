
import express from 'express';
import { addreport } from "../controllers/contact.js";
const report = express.Router();
report.route('/').post(addreport);
export { report };
