import { useEffect, useState } from "react"
import { NavBar } from "../../Components/header/navBar"
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";

export const PostList = ()=>{

    const[postList, setPostList]=useState([])
    const [listPost, setListPost]=useState([]);
    

    const navigate=useNavigate()
//NOTA: agregar este useEffect en todas las páginas, de no estar loggeado lo redirige a la pag del login
    useEffect(()=>{
        var isLogged = localStorage.getItem("isLogged");
        if(isLogged == null){//navegando nuevamente al login en caso de no estar logeado

            navigate("/login")
        }
        callListApi()
    },[])

    const callListApi=async ()=>{
        var result= await axios.get("http://localhost:8080/api/post/get")
        setPostList(result.data)
    }

    const addNew=()=>{
        navigate('/Article/new')
    }

    const goToDetail = (id)=>{
        navigate("/Article/" + id)
    
    }

    const deletePost = async (idPost)=>{
        var result = await axios.delete("http://localhost:8080/api/post/delete/" + idPost)
    
        if(result.status == 200){
            var listPostTemp = postList.filter((item)=> item._id != idPost)
            setPostList(listPostTemp)
            navigate('/')   
            alert("post has been deleted")
            
        }else{
            alert("there was an error")
        }
    }

    return(
        
        <div >
            <header>
                <NavBar></NavBar>
            </header>
           
            <body class="max-w-4xl mx-auto">
                <div className="flex justify-between">
                    <p className="text-3xl my-7 ">Search by category
                        <select name="" id="" className="mx-10 border-solid border-2 border-black"> 
                            <option value="">Art</option>
                            <option value="">Travel</option>
                            <option value="">Music</option>
                            <option value="">Tourism</option>
                            <option value="">Tech</option>
                            <option value="">Photography</option>
                        </select>
                    </p>
                    <p onClick={addNew} className="text-3xl my-7 cursor-pointer">Add article</p>
                </div>
            
          
            <main className="max-w-3xl mx-auto p-4 flex-col justify-between items-center ">
            {
                postList.map((item,idx)=>{
                    return(
                        <section key={idx} className="max-w-4xl mx-auto p-10 flex justify-between items-center">
                        <article className=" mx-auto gap-y-5 border-t  sm:mt-4 sm:pt-1 ">
                        <div className="max-w-4xl mx-auto p-10  flex justify-between ">
                                <button  className="my-4 mx-4 w-full justify-center rounded-md bg-green-800 px-3 py-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-700 " >Update Post</button>
                                <button onClick={()=> deletePost(item._id)} className="my-4  mx-4 w-full justify-center rounded-md bg-green-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 " >Delete Post</button>
                                
                            </div>
                            <div>
                                
                               <img onClick={()=>goToDetail(item._id)} className="w-screen max-h-auto" src={item.images}></img>
                            </div>
                            <div className="flex items-center gap-x-4 text-xs">
                                <time className="text-gray-500">
                                {item.created_at}
                                </time>
                                <select className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100" name="" id="">
                                    <option value="">{item.category}</option>
                                </select>
                       
                            </div>
                            <div className="group relative">
                            <NavLink to='/Article/'>
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                               
                                    <span className="absolute inset-0" ></span>
                                    {item.title}
                                </h3>
                            </NavLink>
                                <NavLink to='/Article/'>
                                 <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{item.description}
                                 </p>
                                </NavLink>
                               
                            </div>
    
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <img src="https://cdn.pixabay.com/photo/2021/12/14/23/11/woman-6871495_1280.jpg" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                <div className="text-sm leading-6">
                                <p className="font-semibold text-gray-900">
                                    <a href="author profile">
                                    <span className="absolute inset-0" />
                                    lola
                                    </a>
                                </p>
                                <p className="text-gray-600">author rol</p>
                                </div>
                            </div>
                            
                        </article>
                    </section>           
                            )
                    })
            }
                
           
            </main>

            </body>
            
        </div>
    )
        
    
}