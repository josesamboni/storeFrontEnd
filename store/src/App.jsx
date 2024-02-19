import { Routes, Route } from "react-router-dom"; // import all the files created 
import { useState } from 'react';
//import Login from './pages/logIn';
import  AllProducts from "./components/allProducts";
//import SingleProduct from "./components/singleProduct";
import Navigation from "./components/navBar";

function App() {
  //const [token, setToken] = useState(null)

  return (
    <div>
      <div className="App">
<Routes>
<Route index element={<AllProducts/>}/>
{/* 
<Route path={"/logIn"} element={<Login token={token} setToken={setToken} />}/> */}
{/* <Route path={"/allProducts"} element={<AllProducts />}/> */}
{/* <Route path={"/singleProduct"} element={<SingleProduct />}/> */}
<Route path={"/navBar"} element={<Navigation />}/>


</Routes>


      </div>


    </div>
  );
} 
  
  


export default App;
