import { useNavigate } from "react-router-dom"
export const NavBar = ()=>{

    const navigate = useNavigate();

    const backToProfile =()=>{
        navigate=('/profile')
    }

    return(
        <header>
            <nav>
                <h1>BlogYourMind</h1>
                <input type="text" placeholder="Search"></input>
                <button onClick={backToProfile}>Profile</button>
                <button>Logout</button>
            </nav>
        </header>
    )
}