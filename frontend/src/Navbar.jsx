const Navbar =() =>{
    return(
        <div className=" flex justify-around h-16 items-center border-2 border-gray-500">
            <h1 className=" text-xlfont-bold">BlogVerse</h1>
            <button className="text-gray-500    hover:bg-gray-200 px-5 py-2 rounded-xl ">Home</button>
            <div className="flex gap-10 ">
                <button className="font-semibold text-gray-700 cursor-pointer">signin</button>
                <button className="bg-blue-600 text-white px-5 rounded-xl cursor-pointer">signup</button>
            </div>
           
        </div>
    )
}
export default Navbar