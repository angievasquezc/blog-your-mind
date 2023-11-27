import express from 'express';
import cors from 'cors';
import mongoose from "mongoose"
import * as userRoutes from './routes/userRoutes.js';
import * as postRoutes from './routes/postRoutes.js'

const app = express();
app.use(cors());

mongoose.connect("mongodb://localhost:27017/blog")
.then(()=>{
    console.log("se conectó a la BD")
})
.catch((err)=>{
    console.log("hubo un error" + err)
})


app.use(express.json());

app.use(userRoutes.router);
app.use(postRoutes.router)

app.listen(8080)
