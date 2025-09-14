const Signup =() =>
{
    return(
        <div className="flex items-center flex-col mt-10 gap-5">
            <h1 className="text-2xl text-blue-600 font -bold">Join BlogVerse</h1>
            <p className="font-semibold text-xl text-gray-600 text-center">Create your account and <br></br>start your Blogging journey today</p>
            <form className="flex flex-col border-1 border-black w-1/3 py-7 items-center gap-5 rounded-2xl">
                <div className="w-[90%]  flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold ">Full Name

                    </p>
                    <input type="text " placeholder="enter your full  name" className="border-1 w-full border-gray-700 py-4 px-5 rounded-2xl 
                   focus:outline-none
                   focus:border-purple-500"></input>
                </div>
                <div className="w-[90%] flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Email

                    </p>
                    <input type="text " placeholder="Enter your emmail " className="border-1 w-full border-gray-700 py-4 px-5 rounded-2xl 
                   focus:outline-none
                   focus:border-purple-500"></input>
                </div>
                <div className="w-[90%] flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Type Password

                    </p>
                    <input type="text " placeholder="Enter your password" className="border-1 w-full border-gray-700 py-4 px-5 rounded-2xl 
                   focus:outline-none
                   focus:border-purple-500"></input>
                </div>
                <div className="w-[90%] flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Confirm pasword

                    </p>
                    <input type="text " placeholder="confirm your password" className="border-1 w-full border-gray-700 py-4 px-5 rounded-2xl 
                   focus:outline-none
                   focus:border-purple-500"></input>
                </div>
                <div className="flex gap-2 border-1 border-gray-800 w-[90%]  py-5 px-4 rounded-xl items-center justify-center">
                    <input type="checkbox" name="" id="" className='h-5 w-5'
                    />
                    <p>i agree to the terms of service and privacy policy</p>
                </div>
                <button className="w-[90%] bg-purple-500 py-4 text-white rounded-xl font-semibold">Create Account
                    
                </button>
                <div className="border-[0.5px] border-gray-500 w-[90%]">

                </div>
             
                <p className="text-gray-700 font-semibold">Already have an account?<span className="text-purple-500">Sign in here</span></p>
                <button className="font-semibold text-gray-700 rounded-xl w-[90%] py-4 cursor-pointer hover:bg-gray-200"> Back to home</button>
            </form>
        </div>

    
    )
}
export default Signup