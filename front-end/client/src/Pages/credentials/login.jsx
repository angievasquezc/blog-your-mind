import { useState } from "react"

export const Login = ()=>{
    const[emailLogin, setEmailLogin]= useState("")
    const[passwordLogin, setPasswordLogin]= useState("")

    return(
        <div>
            <h1>Login</h1>
            <form action="">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="enter your email" value={emailLogin} onChange={(e)=>setEmailLogin(e.target.value)}></input>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="enter your password" value={passwordLogin} onChange={(e)=>setPasswordLogin(e.target.value)}></input>
                <button>Login</button>
            </form>
        </div>
    )
}