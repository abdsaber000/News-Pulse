import express from 'express'
import {getAllBlogs , getBlog , updateBlog , deleteBlog , createBlog} from "../controllers/news.js"
const router = express.Router()

router.route('/').get(getAllBlogs).post(createBlog);

router.route('/:id').get(getBlog).patch(updateBlog).delete(deleteBlog);

export {router}