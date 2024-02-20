import { Routes, Route } from "react-router-dom"; // import all the files created
import Login from "./pages/LoginForm";
import AllProducts from "./components/allProducts";
import SingleProduct from "./components/singleProduct";
import Register from "./pages/register";
import Account from "./pages/account";

function App() {
  // const [token, setToken] = useState(null)

  return (
    <div>
      <div className="App">
        <Routes>
          <Route index element={<AllProducts />} />

         
          <Route path={"/allProducts"} element={<AllProducts />} />
          <Route path={"/singleProduct/:id"} element={<SingleProduct />} />
          <Route path={"/loginForm"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/account"} element={<Account />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
