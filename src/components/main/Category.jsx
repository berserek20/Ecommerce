import React from "react";
import Card from "../card/Card";

function Category({ sortedProducts, category }) {
  return (
    <div>
      <div>
        <p className="bg-purple-300">{category}</p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sortedProducts
            .filter((e) => e.category === category.toLowerCase())
            .map((e) => {
              return (
                <Card
                  key={e.id}
                  id={e.id}
                  source={e.image ?? ""}
                  title={e.title ?? ""}
                  rating={e.rating?.rate ?? 0}
                  price={e.price ?? 0}
                  btnName="Add to Cart"
                />
              );
            })}
        </div>
      </div>
      
    </div>
  );
}

export default Category;
