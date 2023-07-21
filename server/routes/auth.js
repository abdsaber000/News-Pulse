import express from 'express'
const authRouter = express.Router()
import { register } from '../controllers/auth.js';
authRouter.route('/signup').post(register);
// authRouter.route('/login');

export {authRouter}