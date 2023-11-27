import { useState } from "react"



export const CommentImput= ()=>{

    const[textArea, setTextArea]=useState("")

    const handleForm = (e)=>{
        e.preventDefault()
    }

    return (
        <div>
           
                <section className="max-w-4xl mx-auto p-10">
                    <form onSubmit={handleForm}>
                        <h2 className="text-center text-2xl py-10">Share your comments with us!!</h2>
                        <div className="flex flex-col  border rounded-lg p-4">
                            <textarea
                            className="w-full-focus:outline-none"
                            rows="5"
                            placeholder="leave your comment"
                            value={textArea}
                            onChange={(e) =>setTextArea(e.target.value)}
                            />
                            <button type="submit" className="flex justify-center rounded-md bg-green-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 w-40 my-5 ">
                            
                                Add your comment
                            </button>

                            
                        </div>
                    </form>
                </section>
        </div>
    )
}