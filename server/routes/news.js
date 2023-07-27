import express from 'express'
import {IsPublisher , getBlog , updateBlog , deleteBlog , createBlog} from "../controllers/news.js"
import {auth} from "../middleware/auth.js";
const router = express.Router()

router.route('/').get(IsPublisher).post(createBlog);

router.route('/:id').get(getBlog).patch(updateBlog).delete(deleteBlog);

export {router}
