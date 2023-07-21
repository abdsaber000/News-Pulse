import express from 'express'
const authRouter = express.Router()
import { register, login } from '../controllers/auth.js';
authRouter.route('/signup').post(register);
authRouter.route('/login').post(login);

export {authRouter}