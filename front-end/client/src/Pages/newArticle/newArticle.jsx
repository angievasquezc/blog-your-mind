import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { NavBar } from "../../Components/header/navBar"

const categories= [
    
    "Art",
    "Photography",
    "Music",
    "Travel",
    "Tech"
]

export const NewArticle= ()=>{
    const navigate = useNavigate()

    const [category, setCategory]=useState("")

    const[title, setTitle]=useState("")
    
    const[description, setDescription]=useState("")
    // const[author, setAuthor]=useState("")
    const[images, setImages]=useState("")
    const[date, setDate]=useState("")


    const createPost = async()=>{

        var dataPost={
            "title": title,
            "description": description,
            // "author": author,
            "images": images,
            "created_at":date,
            "category": category
        };
        try{
            var result = await axios.post("http://localhost:8080/api/post/create", dataPost)
            if(result.status == 201){
                navigate("/")
            }
        }catch(e){
            alert(e.response.data.message)
        }
    }
    
    const onImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
          setImages(URL.createObjectURL(e.target.files[0]));
        }
       }
    
       const handleForm = (e)=>{
        e.preventDefault()
    }
 

 return(
    <div>
            <header>
                <NavBar></NavBar>
            </header>
            <div className="flex min-h-full flex-col justify-center py-20">
                <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create new Post</h2>
                </div>
                <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
                    <form className="space-y-6 " onSubmit={handleForm}>
                        <input type="text" placeholder="Add Tile" value={title} onChange={(e)=>setTitle(e.target.value)}></input>
                        <br></br>
                        <textarea placeholder="Write Post" value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
                        <br></br>
                        {/* <input type="text" placeholder="Author Name" va lue={author} onChange={(e)=>setAuthor(e.target.value)}></input> */}
                        {/* <input type="text" id="image" multiple value={images} onChange={(e)=>setImages(e.target.value)}></input> */}
                    
                        <input type="date" value={date} onChange={(e)=>setDate(e.target.value)}></input>
                        <select value={category} onChange={(e)=>setCategory(e.target.value)}>
                            <option>Select category</option>
                                {
                                    categories.map((item, index)=>{
                                        return(
                                            <option value={item} key={item.label + index}>{item}</option>
                                            )
                                        })
                                }

                        </select>
                        <input type="file" onChange={onImageChange} className="filetype" multiple/>
                        <img className="max-w-screen max-h-screen" alt="preview image" src={images}/>
                       

                        <button className="flex w-full justify-center rounded-md bg-green-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 " onClick={createPost}>Create post</button>
                    </form>
                </div>
               
            </div>
            
    </div>
 )

    
}