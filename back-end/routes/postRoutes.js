import express from 'express';
import * as postCtrl from '../controllers/postController.js'
const router = express.Router();
import { middleware} from "../middleware/middleware.js"

/*READ */

router.get("/api/post/get", middleware, postCtrl.getPost)
router.get("/api/post/getOne/:idPost", postCtrl.getOnePost)

// router.get("api/post/:idUser", middleware, postCtrl.getUserPosts) para ir al feed del usuario al que le doy clieck y que me muestra sus articulos


/*UPDATE */
router.put("/api/post/update/:idPost", postCtrl.updatePost)
// router.put("/api/post/like/:idPost", middleware, postCtrl.likePost)

router.delete("/api/post/delete/:idPost", postCtrl.deletePost)

export {router};