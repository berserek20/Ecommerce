import React, {  useState } from "react";
import Home from "../public/images/Home.svg";
import Cart from "../public/images/Cart.svg";
import Profile from "../public/images/Profile.svg";
import Info from "../public/images/Info.svg";
import hamburger from "../public/images/hamburger.svg";
import List from "./List";
import { useSelector } from "react-redux";

function Nav() {
  const [open, setOpen] = useState("false");
  // const [width, setWidth] = useState(0);

  const selector = useSelector((state)=>state.cart)
  const totalItems =selector.totalItems;//total items in cartSlice
  // var innw= window.innerWidth
  // useEffect(()=>{
  //   setWidth(window.innerWidth)
  //   console.log(window.innerWidth)
  //   if(window.innerWidth>675){
  //     setOpen(false)
  //   }
  // },[innw])

  console.log(open);
  return (
    <div className=" grid grid-cols-3 md:grid-cols-7  sticky top-0 left-0">
      <span className=" col-span-2 md:col-span-3 font-bold flex-col justify-center">
       <p className=" bg-black text-white flex justify-center top-5">
         Products Company
        </p>
      </span>
      <span className=" col-span-1 bg-red-300 md:hidden " onClick={() => setOpen((prev) => !prev)}>
        <List image={hamburger} Topic="" page="" />
      </span>

      <ul
        className={` bg-red-300 col-span-4 grid sm:grid-cols-1 md:grid-cols-4 font-normal md:static z-10   ${
          open ? `hidden md:grid` : ""
        }	`}
      >
        <List image={Home} Topic="Home" page="/" />

        <div>
          <span className={` absolute z-10 border-r-8 bg-red-500 text-white top-30 md:top-0 ${!totalItems?"hidden":""}`} >
            {totalItems}
          </span>
          <List image={Cart} Topic="Cart" page="/cart" />
        </div>

        <List image={Info} Topic="About Us" page="/about" />

        <List image={Profile} Topic="Profile" page="/" />
      </ul>
    </div>
  );
}

export default Nav;
