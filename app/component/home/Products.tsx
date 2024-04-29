import React from "react";
import Heading from "../general/Heading";
import products from "@/utils/Products";
import ProductCard from "./ProductCard";

const Products = () => {
  const productsArray = products.products;
  return (
    <div className="">
      <Heading center text="Products" />
      <div className="p-10  justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {productsArray.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
