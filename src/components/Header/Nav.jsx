import React from "react";
import Home from "../public/images/Home.svg";
import Cart from "../public/images/Cart.svg";
import Profile from "../public/images/Profile.svg";
import Info from "../public/images/Info.svg";
import List from "./List";

function Nav() {
  return (
    <div>
      <ul className="grid grid-cols-7 font-normal bg-purple-300">
        <li className="col-span-3 italic font-bold flex justiy-items-start">
          Products Company
        </li>
        <List image={Home} Topic='Home' page="/"/>

        <List image={Cart} Topic='Cart' page="/cart" />
        <List image={Info} Topic='About Us' page="/about" />
        <List image={Profile} Topic='Profile' page="/" />

        
      </ul>
    </div>
  );
}

export default Nav;
