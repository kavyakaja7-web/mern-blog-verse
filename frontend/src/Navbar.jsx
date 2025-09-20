import {Link} from 'react-router-dom'
const Navbar =() => {
    return (
        <div className=" flex justify-around h-16 items-center border-2 border-gray-500 w-full">
            <h1 className=" text-2xl font-bold">BlogVerse</h1>
            <Link  to="/" className="text-gray-500    hover:bg-gray-200 px-5 py-2 rounded-xl ">Home</Link>
            <div className="flex gap-10 ">
                <Link to="/Signin" className="font-semibold text-gray-700 cursor-pointer">signin</Link>
                <Link to="/Signup" className="bg-blue-600 text-white px-5 rounded-xl cursor-pointer">signup</Link>
            </div>
           
        </div>
    )
}
export default Navbar