import { Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Cart from "./pages/Cart";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Productlist from "./pages/Productlist";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/sign-in" element={<Login />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/product-list" element={<Productlist/>}></Route>
        <Route path="/product" element={<Product/>}></Route>


      </Routes>

   
     
    </div>
  );
}

export default App;
