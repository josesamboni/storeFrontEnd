import { Routes, Route } from "react-router-dom"; // import all the files created 
//import { useState } from 'react';
import LoginForm from "./pages/LoginForm"
import  AllProducts from "./components/allProducts";
import SingleProduct from "./components/singleProduct";
import Register from "./pages/register";


function App() {
  // const [token, setToken] = useState(null)

  return (
    <div>
      <div className="App">
<Routes>
<Route index element={<AllProducts/>}/>
 
{/* <Route path={"/logIn"} element={<Login token={token} setToken={setToken} />}/> */}
<Route path={"/allProducts"} element={<AllProducts />}/> 
 <Route path={"/singleProduct/:id"} element={<SingleProduct />}/> 
 <Route path={"/loginForm"} element={<LoginForm/>}/> 
 <Route path={"/register"} element={<Register />} />


</Routes>


      </div>


    </div>
  );
} 
  
  


export default App;