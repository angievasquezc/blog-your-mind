import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { NavLink } from "react-router-dom"


export const Login = ()=>{
    const[emailLogin, setEmailLogin]= useState("")
    const[passwordLogin, setPasswordLogin]= useState("")

    const navigate = useNavigate();


    const handleForm = (e)=>{
        e.preventDefault()
    }


    // const loginUser = async () => {
    //     if(emailLogin == "" || passwordLogin == ""){
    //         alert("Llene el formulario de Login");
    //         return;
    //     }

    //     var obj = {
    //         "email": emailLogin,
    //         "password": passwordLogin
    //     };

    //     try{
    //         var result = await axios.post("http://localhost:8080/api/user/login", obj);
    //         localStorage.setItem("jwt", result.data);
    //         localStorage.setItem("isLogged", true);
    //         navigate("/");
    //     }catch(e){
    //         alert("Usuario o contraseña invalidos");
    //     }
    // }
    const loginUser= async()=>{
        if(emailLogin =="" || passwordLogin==""){
            alert("complete the form");
            return;
        }
        var obj ={
            "email": emailLogin,
            "password": passwordLogin
    }
    try{
        var result= await axios.post("http://localhost:8080/api/user/login", obj)
            localStorage.setItem("jwt", result.data);
            localStorage.setItem("isLogged", true);
            navigate("/");
    }catch(e){
        alert("wrong password or email");
    }

   
    
    };
   

    return(
        <div className="flex min-h-full flex-col justify-center py-20">

            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
            </div>
            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
            <form className="space-y-6 " onSubmit={handleForm}>
               
                <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email</label>
                <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-5 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-5" type="email" name="email" id="email" placeholder="enter your email" value={emailLogin} onChange={(e)=>setEmailLogin(e.target.value)}></input>
                <label htmlFor="password" className="block text-sm font-medium text-gray-900">Password</label>
                <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-5 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-5" type="password" name="password" id="password" placeholder="enter your password" value={passwordLogin} onChange={(e)=>setPasswordLogin(e.target.value)}></input>
                <button className="flex w-full justify-center rounded-md bg-green-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 " onClick={loginUser}>Login</button>
                <p class="mt-10 text-center text-sm text-gray-500">
                 
                    <NavLink to="/register">Register</NavLink>
                </p>
            </form>
            </div>
        </div>
    )
}