import express from 'express';
import cors from 'cors';
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import multer from "multer"
import helmet from "helmet"
import morgan from "morgan"
import path from "path"
import { fileURLToPath } from "url"

import * as userRoutes from './routes/userRoutes.js';
import * as postRoutes from './routes/postRoutes.js'
import { registerUser } from './controllers/userController.js';
import { createPost } from './controllers/postController.js'
import { middleware } from './middleware/middleware.js';



/*CONFIGURATION */

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json({limit: "30mb", extended:true}))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}))
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, 'public/assets')))//this sets the directory wehere we are going to keep our assets




/*FILE STORAGE */
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"public/assets");
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
});
const upload = multer({ storage })


/*ROUTES WITH FILES */
app.post("/auth/register", upload.single("picture"), registerUser) /*esta ruta la uso aquí por el upload*/
app.post("/api/post/create", middleware, upload.single("picture"), createPost)

/*MONGOOSE SET UP */
const PORT = process.env.PORT || 8080
mongoose.connect("mongodb://localhost:27017/blog")
.then(()=>{
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`))
})
.catch((err)=>{
    console.log(`${err} did not connect`)
})



/*ROUTES */
app.use(userRoutes.router);
app.use(postRoutes.router);




// app.listen(8080)
