import { NavBar } from "../../Components/header/navBar"


export const MyProfile = ()=>{

    return(
        <div>
            <NavBar></NavBar>
            <div className="flex min-h-full flex-col justify-center py-20">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Profile</h2>
            </div>
            
           
                    <p className="block w-full text-center  py-1.5 text-gray-900 ">Name</p>
                    <p className="block w-full text-center  py-1.5 text-gray-900 ">Rol</p>
                    <p className="block w-full text-center  py-1.5 text-gray-900 ">email</p>
            </div>
        </div>
        
    )
}