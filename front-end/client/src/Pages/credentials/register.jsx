import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


export const Register = ()=>{
    const[nameRegister, setNameRegister]= useState("")
    const[emailRegister, setEmailRegister]= useState("")
    const[passwordRegister, setPasswordRegister]= useState("")
    const[confirmPasswordRegister, setConfirmPasswordRegister]= useState("")
   
  
    const navigate= useNavigate();

    const handleForm = (e)=>{
        e.preventDefault()
    }

    const registerUser = async()=>{
        if (nameRegister =="" || emailRegister =="" || passwordRegister == "" || confirmPasswordRegister == ""){
            alert("complete the form");
            return;
        }
        if(passwordRegister != confirmPasswordRegister){
            alert("passwords should match");
            return;
        }
        try{
            var obj={
                "name": nameRegister,
                "email": emailRegister,
                "password": passwordRegister
            };
          var response= await axios.post("http://localhost:8080/api/user/register", obj)
          if(response.status!= 200){
            alert("try again");
            return;
          }
          alert("Congratulations!!! you are already registered")
        }catch(e){
            alert(e.response.data.message)
        }
        
        navigate("/login")
            
    }
    return(
        <div className="flex min-h-full flex-col justify-center py-20">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register</h2>
            </div>
            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
                <form className="space-y-6 " onSubmit={handleForm}>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-900">Name</label>
                    <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-5 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-5" type ="text" name="name" id="name" placeholder="enter your name" value={nameRegister} onChange={(e)=>setNameRegister(e.target.value)}></input>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email</label>
                    <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-5 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-5" type="email" name="email" id="email" placeholder="enter your email" value={emailRegister} onChange={(e)=>setEmailRegister(e.target.value)}></input>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-900">Password</label>
                    <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-5 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-5" type="password" name="password" id="password" placeholder="enter your password" value={passwordRegister} onChange={(e)=>setPasswordRegister(e.target.value)}></input>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-900">Confirm Password</label>
                    <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-5 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-5" type="password" name="confirmPassword" id="confirmPassword" placeholder="enter your password" value={confirmPasswordRegister} onChange={(e)=>setConfirmPasswordRegister(e.target.value)}></input>
                    <button className="flex w-full justify-center rounded-md bg-green-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 " onClick={registerUser}>Register</button>
                </form>
            </div>
        </div>
    )
}