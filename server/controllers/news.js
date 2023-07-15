import express from "express";
import statusCodes from "http-status-codes"
export const getAllBlogs = async (req , res)=>{
    try{
        res.status(statusCodes.ACCEPTED).send("get all news");
    }catch(error){
        res.status(statusCodes.BAD_REQUEST).send(error);
    }
}

export const getBlog = async (req , res)=>{
    try{
        const BlogId = req.params.id;
        res.status(statusCodes.ACCEPTED).send(`Get Id ${BlogId}`);
    }catch(error){
        res.status(statusCodes.BAD_REQUEST).send(error);
    }
}

export const createBlog = async (req , res)=>{
    try{
        res.status(statusCodes.ACCEPTED).send(`Blog created`);
    }catch(error){
        res.status(statusCodes.BAD_REQUEST).send(error);
    }
}

export const updateBlog = async (req , res)=>{
    try{
        const BlogId = req.params.id;
        res.status(statusCodes.ACCEPTED).send(`update Id ${BlogId}`);
    }catch(error){
        res.status(statusCodes.BAD_REQUEST).send(error);
    }
}

export const deleteBlog = async (req , res)=>{
    try{
        const BlogId = req.params.id;
        res.status(statusCodes.ACCEPTED).send(`Delte Id ${BlogId}`);
    }catch(error){
        res.status(statusCodes.BAD_REQUEST).send(error);
    }
}

// export {getAllBlogs , getBlog , createBlog , updateBlog , deleteBlog};