import UnauthenticatedError from '../errors/unauthenticated.js';
import jsonwebtoken from 'jsonwebtoken';
import {errorHandler} from "../errors/error-handler.js";
const auth = async (req, res, next) => {
    try{
        // check header
        const authHeader = req.headers.authorization
        if (!authHeader || !authHeader.startsWith('Bearer')) {
            throw new UnauthenticatedError('Authentication invalid')
        }
        const token = authHeader.split(' ')[1]
    
    
        const payload = jsonwebtoken.verify(token, process.env.JWT_SECRET)
        // attach the user to the job routes
        req.user = { userId: payload.userId, name: payload.name }
        next()
    } catch (error) {
        errorHandler(error , res);
    }
}

export {auth}
