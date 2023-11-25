import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


export const Login = ()=>{
    const[emailLogin, setEmailLogin]= useState("")
    const[passwordLogin, setPasswordLogin]= useState("")

    const navigate = useNavigate();


    const handleForm = (e)=>{
        e.preventDefault()
    }


    const loginUser= async()=>{
        if(emailLogin =="" || passwordLogin==""){
            alert("complete the form");
            return;
        }
        var obj ={
            "email": emailLogin,
            "password": passwordLogin
    }

    var result= await axios.post("http://localhost:8080/api/user/login", obj)
    if(result.data != true){
        alert("wrong password or email");
        return;
    }
        navigate("/")
    
    };
   

    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={handleForm}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="enter your email" value={emailLogin} onChange={(e)=>setEmailLogin(e.target.value)}></input>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="enter your password" value={passwordLogin} onChange={(e)=>setPasswordLogin(e.target.value)}></input>
                <button onClick={loginUser}>Login</button>
            </form>
        </div>
    )
}