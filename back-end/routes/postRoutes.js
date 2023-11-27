import express from 'express';
import * as postCtrl from '../controllers/postController.js'
const router = express.Router();


router.post("/api/post/create", postCtrl.createPost)
router.get("/api/post/get", postCtrl.getPost)
router.get("/api/post/getOne/:idPost", postCtrl.getOnePost)
router.put("/api/post/update/:idPost", postCtrl.updatePost)
router.delete("/api/post/delete/:idPost", postCtrl.deletePost)

export {router};