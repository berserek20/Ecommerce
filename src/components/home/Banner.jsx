import React from "react";

function Banner({ image,category }) {
  return (
    <div className=" relative bg-transparent bg-gradient-to-br from-blue-300" style={{height:"250px ",border:"2px solid red"}}>
        <img className=" absolute top-0 z-0" height={100} width={100} src={image} alt="" style={{border:"2px solid green"}}/>
        <p style={{border:"2px solid black"}}>{category}</p>
    </div>
  );
}

export default Banner;
