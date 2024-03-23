"use client";

import { useEffect } from "react";

const ProductsError = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl">
        {error.message || "Something went wrong"}
      </h1>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
};

export default ProductsError;
