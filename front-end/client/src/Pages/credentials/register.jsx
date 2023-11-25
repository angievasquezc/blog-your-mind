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
        <div>
            <h1>Register</h1>
            <form onSubmit={handleForm}>
                <label htmlFor="name">Name</label>
                <input type ="text" name="name" id="name" placeholder="enter your name" value={nameRegister} onChange={(e)=>setNameRegister(e.target.value)}></input>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="enter your email" value={emailRegister} onChange={(e)=>setEmailRegister(e.target.value)}></input>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="enter your password" value={passwordRegister} onChange={(e)=>setPasswordRegister(e.target.value)}></input>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" name="confirmPassword" id="confirmPassword" placeholder="enter your password" value={confirmPasswordRegister} onChange={(e)=>setConfirmPasswordRegister(e.target.value)}></input>
                <button onClick={registerUser}>Register</button>
            </form>
        </div>
    )
}