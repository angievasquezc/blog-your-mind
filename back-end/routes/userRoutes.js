import express from 'express';
import * as userCtrl from '../controllers/userController.js'
const router = express.Router();
import { middleware} from "../middleware/middleware.js"


router.post("/api/user/login", userCtrl.loginUser)
// router.get("/api/user/get", userCtrl.getUsers)
router.get("/api/user/:idUser",  middleware, userCtrl.getOneUser)
// router.post("/api/user/upload-file", upload.single("profile-image"), userCtrl.uploadFile)
router.get("/api/user", userCtrl.getUser)


export {router};