import {AboutUs}  from '../models/AboutUs.js';
import { StatusCodes } from 'http-status-codes';
import { errorHandler } from '../errors/error-handler.js';
export const getAboutUs = async (req , res)=>{
    try{
        const data = await AboutUs.find({});
        res.status(StatusCodes.OK).send({data});
    }catch(error){
        errorHandler(error , res);
    }
}