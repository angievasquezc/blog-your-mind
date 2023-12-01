import axios from "axios"
import { useEffect, useState } from "react";
import { useNavigate, useParams} from "react-router-dom"
import { CommentImput } from "../../Components/comments/commentImput";
import { AllComments } from "../../Components/comments/allComments";
import { NavLink } from "react-router-dom";
import { NavBar } from "../../Components/header/navBar";


export const PostDetail = ()=>{
    const [listPost, setListPost]=useState([]);

    const navigate= useNavigate()

const[title, setTitle]= useState("")
const[description, setDescription]= useState("")
const[category, setCategory]= useState("")
const[images, setImages]= useState("")
const[author, setAuthor]= useState("")
const[date, setDate]= useState("")

const params =useParams();
var postId = params.id;

useEffect(()=>{
    getPostData()
    // getUserData()
},[]);


const getPostData = async ()=>{
    var result = await axios.get("http://localhost:8080/api/post/getOne/" + postId)
    console.log(result)
    console.log(result.data)
    setTitle(result.data.title)
    setImages(result.data.images)
    setDate(result.data.created_at)
    setCategory(result.data.category)
    setDescription(result.data.description)
   
    // setAuthor(result.data.author)

}



    return(
        <div>
           <NavBar></NavBar>
           
           <section className="max-w-4xl mx-auto p-10">
                    <article className=" mx-auto border-t  sm:mt-8 sm:pt-8  ">
                        <div className=" text-5xl text-center py-12 ">
                                <h3 className=" font-semibold  text-gray-900 group-hover:text-gray-600 align-center">
                                
                                    {title}
                                
                                </h3>
                        </div>
                        <div>
                            <img src={images}></img>
                        </div>
                        <div className="flex items-center gap-x-4 text-xs">
                            <time className="text-gray-500">
                            {date}
                            </time>
                            <p className="py-5">{category}</p>
                   
                        </div>
                        <div className="group relative">
                            
                            <p className="mt-5  text-sm leading-6 text-gray-600">{description}
                            
                            </p>
                        </div>
                            <div>
                                <div className=" grid wrap gap-x-8 gap-y-16  sm:pt-16 lg:grid-cols-3">
                                    <img className="max-w-1xl h-48 " src="https://cdn.pixabay.com/photo/2016/05/03/22/35/pagoda-1370346_1280.jpg" alt=""></img>
                                    <img className="max-w-1xl h-48" src="https://cdn.pixabay.com/photo/2016/08/24/16/19/aviles-street-1617325_1280.jpg" alt="" ></img>
                                    <img className="max-w-1xl h-48" src="https://cdn.pixabay.com/photo/2017/02/18/08/49/phang-nga-bay-2076833_1280.jpg" alt="" ></img>
                                </div>
                            </div>
                            
                           

                        <div className="relative mt-8 flex items-center gap-x-4">
                            <img src="https://cdn.pixabay.com/photo/2021/12/14/23/11/woman-6871495_1280.jpg" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                            <div className="text-sm leading-6">
                            <p className="font-semibold text-gray-900">
                                <a href="author profile">
                                <span className="absolute inset-0" />
                                author name
                                </a>
                            </p>
                            <p className="text-gray-600">author rol</p>
                            </div>
                        </div>
                    </article>
                </section> */
          
                <CommentImput></CommentImput>
                <AllComments></AllComments>
        </div>
        
    )
}