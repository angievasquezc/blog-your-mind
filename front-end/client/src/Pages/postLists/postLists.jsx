import { useEffect } from "react"
import { NavBar } from "../../Components/header/navBar"
import { useNavigate } from "react-router-dom";

export const PostList = ()=>{

    const navigate=useNavigate()
//NOTA: agregar este useEffect en todas las páginas, de no estar loggeado lo redirige a la pag del login
    useEffect(()=>{
        var isLogged = localStorage.getItem("isLogged");
        if(isLogged == null){//navegando nuevamente al login en caso de no estar logeado

            navigate("/login")
        }
    })

    return(
        <div >
            <NavBar></NavBar>
            <p>here goes the articles</p>
        </div>
    )
        
    
}