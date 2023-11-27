import Post from "../models/postModels.js"

const createPost = async (req,res)=>{

    try{
        var newPost = await Post.create(req.body)
        res.status(201).json(newPost)

    }catch(e){
        console.log("error " + e)
        res.status(400).json({
            "message": e.message
        })
    }
    
}

const getPost = async(req,res)=>{
    var postList= await Post.find();
    res.json(postList)
}


const getOnePost = async (req,res)=>{
    var idPost = req.params.idPost;
    var post =  await Post.findById(idPost)

    res.status(200).json(post)
}

const updatePost= async(req,res)=>{
    
    var idPost = req.params.idPost;
    var dataUpdate = req.body;

    await Post.findByIdAndUpdate(idPost, dataUpdate, {runValidators: true})
    res.status(200).json("se actualizó")
}


const deletePost = async (req,res)=>{
    var id = req.params.idPost;
    await Post.findByIdAndDelete(id);
    res.status(200).json()
}
export{createPost, getPost, getOnePost, updatePost, deletePost}