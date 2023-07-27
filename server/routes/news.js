import express from 'express'
import {IsPublisher , getBlog , updateBlog , deleteBlog , createBlog} from "../controllers/news.js"
import {auth} from "../middleware/auth.js";
const router = express.Router()

router.route('/').get(IsPublisher);
router.post('/' , auth , createBlog);
router.patch('/:id' , auth , updateBlog);
router.delete('/:id' , auth , deleteBlog)
router.get('/:id' , getBlog);
export {router}
