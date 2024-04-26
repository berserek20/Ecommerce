import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../../features/products/productSlice";
import Sort from "./Sort";
import { ResponseSorting } from "./ResponseSorting";
import Category from "./Category";

function Main() {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();
  const sorttype = useSelector((state) => state.sort);

 

  useEffect(() => {
    async function findProducts() {
      try {
        const arr = await fetch("https://fakestoreapi.com/products");
        const response = await arr.json();

        if (response === null) {
          console.log("error occured");
        } else {
          setProducts(response);
          dispatch(addProducts(response));
        }
      } catch (e) {
        console.log("error", e);
      }
    }

    findProducts();
    // eslint-disable-next-line
  }, []);
  const sortedProducts = ResponseSorting(sorttype, products);

  return (
    <>
      <div>
        <Sort />
      </div>
      {sortedProducts? <div>
          <Category sortedProducts={sortedProducts} category="Men's Clothing" />
          <Category sortedProducts={sortedProducts} category="Women's Clothing" />
          <Category sortedProducts={sortedProducts} category="Jewelery" />
          <Category sortedProducts={sortedProducts} category="Electronics" />
        </div>:<h1 className=" text-2xl text-rose-500">Loading....</h1>
}
    </>
  );
}

export default Main;
