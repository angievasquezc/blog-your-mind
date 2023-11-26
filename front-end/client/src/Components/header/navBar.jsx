import { useNavigate } from "react-router-dom"
import { NavLink} from "react-router-dom";
export const NavBar = ()=>{

    const navigate=useNavigate();
    

    const backToProfile =()=>{
        navigate('/myProfile')
    }
    const backToPostLists =()=>{
        navigate('/')
    }

    //metodo logout
    const logOut = ()=>{
        localStorage.removeItem("isLogged")
        navigate("/login")
    }

    return(
        <header className="bg-green-800 text-white top-0 z-10 ">
            
            <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
                <h1 className="text-3xl font-medium">BlogYourMind</h1>
                
                    <div className="flex">
                        <input type="text" placeholder="Search"></input>
                        <p className="text-2xl">🔍</p>
                    </div>
                    <button className="text-3xl sm:hidden focus:outline-none">
                        &#9776;
                    </button>
                    
                    <nav className="hidden sm:block space-x-8 text-xl" aria-label="main">
                        <button className="px-6  mx-5 hover:opacity-90" onClick={backToProfile}>Profile</button>
                        <button className="px-6  mx-5 hover:opacity-90" onClick={backToPostLists}>Articles</button>
                        <button className="px-6 hover:opacity-90"  onClick={logOut}>Logout</button>
                        
                    </nav>
            </section>
        </header>
    )
}