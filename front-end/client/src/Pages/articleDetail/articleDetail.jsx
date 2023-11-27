import { useState } from "react"
import { NavBar } from "../../Components/header/navBar"
import { CommentImput } from "../../Components/comments/commentImput"
import { AllComments } from "../../Components/comments/allComments"


export const ArticleDetail= ()=>{

    const[textArea, setTextArea]=useState("")

    const handleForm = (e)=>{
        e.preventDefault()
    }

    return (
        <div>
            <NavBar></NavBar>
            <section className="max-w-4xl mx-auto p-10">
                    <article className=" mx-auto border-t  sm:mt-8 sm:pt-8  ">
                        <div className=" text-5xl text-center py-12 ">
                                <h3 className=" font-semibold  text-gray-900 group-hover:text-gray-600 align-center">
                                <a href="link">
                                    <span className="absolute inset-0" />
                                    post title
                                </a>
                                </h3>
                        </div>

                        <div>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Akashi_Bridge.JPG/1024px-Akashi_Bridge.JPG"></img>
                        </div>
                        <div className="flex items-center gap-x-4 text-xs">
                            <time className="text-gray-500">
                            post date
                            </time>
                            <p className="py-5">post category</p>
                   
                        </div>
                        <div className="group relative">
                            
                            <p className="mt-5  text-sm leading-6 text-gray-600">post description
                            
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
                </section>
                <CommentImput></CommentImput>
                <AllComments></AllComments>
        </div>
    )
}