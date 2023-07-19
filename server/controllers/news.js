import express from "express";
import statusCodes from "http-status-codes";
import {Blog} from "../models/Blog.js"; 

export const getAllBlogs = async (req , res)=>{
    try{
        const blogs = await Blog.find({});
        res.status(statusCodes.ACCEPTED).json(blogs);
    }catch(error){
        res.status(statusCodes.BAD_REQUEST).json({msg:error});
    }
}


export const getBlog = async (req , res)=>{
    try{
        const BlogId = req.params.id;
        const blog = await Blog.findOne({_id:BlogId})
        if(!blog){
            return res.status(statusCodes.NOT_FOUND).json(`No Blog found with id ${BlogId}`);
        }
        res.status(statusCodes.ACCEPTED).json({blog});
    }catch(error){
        res.status(statusCodes.BAD_REQUEST).json({msg:error});
    }
}

export const createBlog = async (req , res)=>{
    try{
        const blog = await Blog.create(req.body)
        res.status(statusCodes.ACCEPTED).json({blog});
    }catch(error){
        res.status(statusCodes.BAD_REQUEST).json({msg:error});
    }
}

export const updateBlog = async (req , res)=>{
    try{
        const BlogId = req.params.id;
        const blog = await Blog.findOneAndUpdate({_id:BlogId} , req.body)
        if(!blog){
            return res.status(statusCodes.NOT_FOUND).json(`No Blog found with id ${BlogId}`);
        }
        res.status(statusCodes.ACCEPTED).json({blog});
    }catch(error){
        res.status(statusCodes.BAD_REQUEST).json({msg:error});
    }
}

export const deleteBlog = async (req , res)=>{
    try{
        const BlogId = req.params.id;
        const blog = await Blog.findOneAndDelete({_id:BlogId})
        if(!blog){
            return res.status(statusCodes.NOT_FOUND).json(`No Blog found with id ${BlogId}`);
        }
        res.status(statusCodes.ACCEPTED).json('Blog has been deleted successfully');
    }catch(error){
        res.status(statusCodes.BAD_REQUEST).json({msg:error});
    }
}

// export {getAllBlogs , getBlog , createBlog , updateBlog , deleteBlog};