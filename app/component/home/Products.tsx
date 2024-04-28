import React from "react";
import Heading from "../general/Heading";
import products from "@/utils/Products";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div>
      <Heading center text="Products" />
      {/* {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))} */}
    </div>
  );
};

export default Products;
