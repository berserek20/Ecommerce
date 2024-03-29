import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../../features/products/productSlice";
import Sort from "./Sort";
import { ResponseSorting } from "./ResponseSorting";

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

      <p className="bg-purple-300">Men's Clothing</p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sortedProducts
          .filter((e) => e.category === "men's clothing")
          .map((e) => {
            return (
              <Card
                key={e.id}
                id={e.id}
                source={e.image}
                title={e.title}
                rating={e.rating.rate}
                price={e.price}
              />
            );
          })}
      </div>
      <p className="bg-purple-300">Electronics</p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sortedProducts
          .filter((e) => e.category === "electronics")
          .map((e) => {
            return (
              <Card
                key={e.id}
                id={e.id}
                source={e.image}
                title={e.title}
                rating={e.rating.rate}
                price={e.price}
              />
            );
          })}
      </div>

      <p className="bg-purple-300">jewelery</p>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sortedProducts
          .filter((e) => e.category === "jewelery")
          .map((e) => {
            return (
              <Card
                key={e.id}
                id={e.id}
                source={e.image}
                title={e.title}
                rating={e.rating.rate}
                price={e.price}
              />
            );
          })}
      </div>

      <p className="bg-purple-300">Women's Clothing</p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sortedProducts
          .filter((e) => e.category === "women's clothing")
          .map((e) => {
            return (
              <Card
                key={e.id}
                id={e.id}
                source={e.image}
                title={e.title}
                rating={e.rating.rate}
                price={e.price}
              />
            );
          })}
      </div>
    </>
  );
}

export default Main;
