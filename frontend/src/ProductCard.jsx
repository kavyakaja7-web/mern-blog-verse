const ProductCard=() =>{
return(
    <div className="border-1 border-black w-[350px] flex flex-col items-center gap-10 pt-4 pb-4 rounded-2xl bg-green-100">
        <img src="vite.svg" alt="" className="w-[150px] h-[150px] border-3 border-black-100 rounded-full
        "/>
        <div className="flex flex-col gap-5 items-center font-serif">
        <h2 className="font-bold text-[50px] text-blue-500">Product 1</h2>
        <p className="text-xl text-black text-center">this is a sample Product for sample</p>
        <p className=" font-bold text-xl text-black ">$29.99</p>
        </div>
        <button className="bg-blue-600 text-white w-[90%] py-4 rounded-xl cursor-pointer hover:bg-blue-900">Add to Cart</button>
    </div>
)
}
export default ProductCard