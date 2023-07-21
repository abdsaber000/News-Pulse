import { StatusCodes } from "http-status-codes";
import {User} from "../models/User.js";

export const register = async (req, res) =>{
    try{
        const user = await User.create({...req.body});
        const token = user.createJWT();
        res.status(StatusCodes.CREATED).json({
            user_name : user.user_name,
            token
        })
    }catch(error){
        res.status(StatusCodes.BAD_REQUEST).send({error});
    }
}