import { useState } from "react"

export const Register = ()=>{
    const[nameRegister, setNameRegister]= useState("")
    const[emailRegister, setEmailRegister]= useState("")
    const[passwordRegister, setPasswordRegister]= useState("")
    const[confirmPasswordRegister, setConfirmPasswordRegister]= useState("")
   
  

    const handleForm = (e)=>{
        e.preventDefault()
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
                <label htmlFor="password">Confirm Password</label>
                <input type="password" name="password" id="password" placeholder="enter your password" value={confirmPasswordRegister} onChange={(e)=>setConfirmPasswordRegister(e.target.value)}></input>
                <button>Register</button>
            </form>
        </div>
    )
}