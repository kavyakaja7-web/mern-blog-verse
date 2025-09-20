
import Navbar from "./Navbar"
import { Link } from 'react-router-dom'
import { LockKeyhole } from 'lucide-react';
import { UserRound } from 'lucide-react';
import { MailSearch } from 'lucide-react';
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import { useState } from 'react';





const Signup = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [errors, setErrors] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""

    })
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState(" ")
    const [success, setSuccess] = useState(" ")
    const handleSubmit = (event) => {
        event.preventDefault();


        let newErrors={}
        if(!formData.fullName){
            newErrors.fullName="please enter your full name"
        }
if(!formData.email){


            newErrors.email="please enter your email"
        }
        if(!formData.password){
            newErrors.password="please enter your password"
        }
        if(!formData.confirmPassword){
            newErrors.confirmPassword="please enter your confirm password"
        }
        else if(formData.password !== formData.confirmPassword)
        {
            newErrors.confirmPassword="your password did not match"
        }
if(Object.keys(newErrors).length>0){
    setErrors(newErrors)
}else {
     setSuccess("your account is created successfully")
     setFormData({
                 fullName: "",
                 email: "",
                 password: "",
                confirmPassword: ""

     })

}

        
        // if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
        //     setError("please fill all the fields")
        // } else if (formData.password !== formData.confirmPassword) {
        //     setError("your password did not match")
        // } else {
        //     setSuccess("your account is created successfully")
        //     setError("")
        //     setFormData({
        //         fullName: "",
        //         email: "",
        //         password: "",
        //         confirmPassword: ""

        //     })
        // }
    }
    const handlePassword = () => {
        setShowPassword((password) => !password)

    }
    const handleConfirmPassword = () => {
        setShowConfirmPassword((confirmPassword) => !confirmPassword)
    }

    const handleChange = (event) => {
        setError("")
        setFormData((formData) => ({
            ...formData,
            [event.target.name]: event.target.value

        }))
         setErrors((errors) => ({
            ...errors,
            [event.target.name]: ""
         }))





    }

    return (
        <div className="flex items-center flex-col  gap-5">
            <Navbar />
            <h1 className="text-2xl text-blue-600 font -bold">Join BlogVerse</h1>
            <p className="font-semibold text-xl text-gray-600 text-center">Create your account and <br></br>start your Blogging journey today</p>
            <form onSubmit={handleSubmit} className="flex flex-col border-1 border-black w-1/3 py-7 items-center gap-5 rounded-2xl">
                <div className="w-[90%]  flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold ">Full Name

                    </p>
                    <div className="relative">
                        <input value={formData.fullName} onChange={handleChange}
                            name="fullName" type="text " placeholder="Enter your full  name" className="border-1 w-full border-gray-700 py-4 px-5 rounded-2xl 
                   focus:outline-none
                   focus:border-purple-500 pl-12"></input>
                        <UserRound className="absolute  top-4 left-3 text-blue-600" />
                        {errors.fullName && <p className="text-red-600">{errors.fullName}</p>}

                    </div>
                </div>
                <div className="w-[90%] flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Email

                    </p>
                    <div className="relative">
                        <input value={formData.email} onChange={handleChange}
                            name="email" type="text " placeholder="Enter your email " className="border-1 w-full border-gray-700 py-4 px-5 rounded-2xl 
                   focus:outline-none
                   focus:border-purple-500 pl-12"></input>
                        <MailSearch className="absolute  top-4 left-3 text-blue-600" />
                        {errors.email && <p className="text-red-600">{errors.email}</p>}
                    </div>
                </div>
                <div className="w-[90%] flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold"> Password

                    </p>
                    <div className="relative">
                        <input value={formData.password} onChange={handleChange} name="password" type={showPassword ? "password" : "text "} placeholder="Enter your password" className="border-1 w-full border-gray-700 py-4 px-5 rounded-2xl 
                   focus:outline-none
                   focus:border-purple-500 pl-12"></input>
                        <LockKeyhole className="absolute  top-4 left-3 text-blue-600" />
                        <p onClick={handlePassword}>{showPassword ? <Eye className="absolute right-3 top-4" /> : <EyeOff className="absolute right-3 top-4" />}</p>
                        {errors.password && <p className="text-red-600">{errors.password}</p>}
                    </div>
                </div>
                <div className="w-[90%] flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Confirm pasword

                    </p>
                    <div className="relative">
                        <input value={formData.confirmPassword} onChange={handleChange} name="confirmPassword" type={showConfirmPassword ? "password" : "text "} placeholder="Confirm your password" className="border-1 w-full border-gray-700 py-4 px-5 rounded-2xl 
                   focus:outline-none
                   focus:border-purple-500 pl-12"></input>
                        <LockKeyhole className="absolute  top-4 left-3 text-blue-600" />
                        <p onClick={handleConfirmPassword}>{showConfirmPassword ? <Eye className="absolute right-3 top-4" /> : <EyeOff className="absolute right-3 top-4" />}</p>
                        {errors.confirmPassword && <p className="text-red-600">{errors.confirmPassword}</p>}



                    </div>



                </div>
                <div className="flex gap-2 border-1 border-gray-800 w-[90%]  py-5 px-4 rounded-xl items-center justify-center">
                    <input type="checkbox" name="" id="" className='h-5 w-5'
                    />
                    <p>I agree to the terms of service and privacy policy</p>
                </div>
                {error && <p className="text-red-600" >{error}</p>}
                {success && <p className="text-green-600" >{success}</p>}
                <button type="submit" className="w-[90%] bg-purple-500 py-4 text-white rounded-xl font-semibold flex justify-center"> <UserRound /><p>Create Account</p>

                </button>
                <div className="border-[0.5px] border-gray-500 w-[90%]">

                </div>
                <p className="text-gray-700 font-semibold">Already have an account?<Link className="text-purple-500">Sign in here
                </Link></p>
                <Link to="/" className="font-semibold text-gray-700 rounded-xl w-[90%] py-4 cursor-pointer hover:bg-gray-200 pl-60"> Back to home</Link>
            </form>
        </div>


    )
}
export default Signup
