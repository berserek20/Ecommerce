import {  Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/main/Main";
import ItemDetails from "./components/detailsPage/ItemDetails";
import Nav from "./components/Header/Nav";
import Cart from "./components/cart/Cart";
import About from "./components/about/About";
import Register from "./components/Credentials/Register";
import Login from "./components/Credentials/Login";
import PathNotFound from "./components/PathNotFound";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App bg-gray-100 grid grid-cols-1">
        <Nav />

        <Routes>
          <Route path="/home" element={<Home />} />

          <Route path="/" element={<Main />} />
          <Route path="/details/:id" element={<ItemDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PathNotFound />} />


        </Routes>
    
      
    </div>
  );
}

export default App;
