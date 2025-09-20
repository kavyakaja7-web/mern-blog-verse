import Navbar from "./Navbar"
import {Link} from 'react-router-dom'
import { Mail } from 'lucide-react';
import { LockKeyhole } from 'lucide-react';
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import {useState} from 'react';

const Signin = () => {

const [showPassword ,setShowPassword]=useState(false);

    const handlePassword=() =>{
        setShowPassword((password)=>!password)

    }
    return (

        <div className=" flex items-center  flex-col h-screen  bg-blue-50">
            <Navbar/>
            <div className="flex items-center flex-col gap-5 border-2 rounded-2xl border-gray-50 h-120 w-100 bg-gray-50 mt-50 shadow-2xl shadow-gray-500">
                <div className="flex items-center  flex-col gap-3 mt-10">
                    <h1 className="font-bold">Sign in</h1>
                    <p>Access your account</p>
                </div>
                <form >
                    <div>
                    <div className="relative">
                        <p className="pb-4">Email Address</p>
                        <input type="text" placeholder="sample @gmail.com" className=" border-1 flex flex-col p-2 rounded-2xl w-70 h-11 pl-12"></input>
                         <Mail  className="absolute top-12 text-gray-400 left-3"/>
                    </div>
                    </div>
                    <div>
                        <div className="relative">
                        <p className="pb-4 pt-2">Password</p>
                        <input type={showPassword?"password":"text "} placeholder="sample 123" className="border-1 flex flex-col  pl-12 p-2 rounded-2xl w-70 h-11"></input>
                        <LockKeyhole className="absolute   top-15 left-3 text-gray-400"/>
                        <p onClick={handlePassword}>{showPassword ?<Eye  className="absolute right-3 top-15"/>:<EyeOff className="absolute right-3 top-15"/>}</p>
                   </div>
                   </div>
                    <div className="flex justify-between gap-5 mt-4">
                        <div className="flex justify-between gap-1 ">
                            <input type="checkbox" name="" id="" className='h-5 w-5'
                            />
                            <p className="text-color-black ">Remember me</p>
                        </div>
                        <p className="text-blue-700" >Forgot password?</p>
                    </div>

                </form>
                <div>
                    <button className="font-semibold text-gray-100 cursor-pointer  rounded-2xl bg-blue-700 h-11 w-70">signin</button>
                </div>
                <div className="border-[0.5px] w-90 border-gray-200"></div>

                <div className="flex flex-hr gap-5">


                    <p className="text-black-700 font-semibold">Don't you have account?<Link className="text-blue-700">create one here
                    </Link></p>
                </div>
            </div>
        </div>

    )
}
export default Signin