const Signin = () => {
    return (

        <div className=" flex items-center  h-screen justify-center bg-blue-50">
            <div className="flex items-center flex-col gap-5 border-2 rounded-2xl border-gray-50 h-120 w-100 bg-gray-50 shadow-2xl shadow-gray-500">
                <div className="flex items-center  flex-col gap-3 mt-10">
                    <h1 className="font-bold">Sign in</h1>
                    <p>Access your account</p>
                </div>
                <form >
                    <div>
                        <p className="pb-4">Email Address</p>
                        <input type="text" placeholder="sample @gmail.com" className=" border-1 flex flex-col p-2 rounded-2xl w-70 h-11"></input>
                    </div>
                    <div>
                        <p className="pb-4 pt-2">Password</p>
                        <input type="text" placeholder="sample 123" className="border-1 flex flex-col p-2 rounded-2xl w-70 h-11"></input>
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


                    <p className="text-black-700 font-semibold">Don't you have account?<span className="text-blue-700">create one here
                    </span></p>
                </div>
            </div>
        </div>

    )
}
export default Signin