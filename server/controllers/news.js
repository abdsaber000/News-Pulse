import express from "express";
import statusCodes from "http-status-codes";
import {Blog} from "../models/Blog.js"; 
import jwt from "jsonwebtoken";

export const getAllBlogs = async (req, res) => {
  const blogs = await Blog.find({});
  res.status(statusCodes.ACCEPTED).json(blogs);
};

export const getPublisherNews = async (req, res) => {
  const authHeader = req.headers.authorization;
  const token = authHeader.split(" ")[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const person = decoded.name;
  const blogs = await Blog.find({ publisher: person });
  res.status(statusCodes.ACCEPTED).json(blogs);
};

export const handleBlogsRequest = async (req, res, requestHandler) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return getAllBlogs(req, res);
    }
    return requestHandler(req, res);
  } catch (error) {
    res.status(statusCodes.BAD_REQUEST).json({ msg: error });
  }
};

export const IsPublisher = async (req, res) => {
  handleBlogsRequest(req, res, getPublisherNews);
};

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
        if(req.user.name === req.body.publisher){
            const blog = await Blog.create(req.body)
            res.status(statusCodes.ACCEPTED).json({blog});
        }
        else{
            res.status(statusCodes.BAD_REQUEST).json({msg:"Publisher name must be same as user_name"})
        }
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
