import {  Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/main/Main";
import ItemDetails from "./components/detailsPage/ItemDetails";
import Nav from "./components/Header/Nav";
import Cart from "./components/cart/Cart";
import About from "./components/about/About";
import Register from "./components/Credentials/Register";
import Login from "./components/Credentials/Login";

function App() {
  return (
    <div className="App" >
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/details" element={<ItemDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

        </Routes>
    
      
    </div>
  );
}

export default App;
