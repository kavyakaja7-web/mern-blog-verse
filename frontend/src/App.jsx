
import Navbar from "./Navbar"
import Signup from "./Signup"
import Signin from "./Signin"
import Home from "./Home"
import { Routes,Route} from "react-router-dom"
function App() {
  

  return (
    
      // <div className="">
      //   <Navbar/>
      //   <Signup/>
      //   <Signin/>
      //   <Home/>
      //   </div>
      <Routes>

        <Route  path="/Signup" element={<Signup/>}/> 
        <Route path="/Signin" element={<Signin/>}/> 
        <Route path="/" element={<Home/>}/> 
          
      </Routes>
        
  )
}

export default App
