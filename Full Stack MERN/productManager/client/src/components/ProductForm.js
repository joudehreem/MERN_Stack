import React, { useState } from "react";
import axios from "axios";

const ProductForm = () => {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/product', {
      title: product.title,
      price: product.price,
      description: product.description,
    })
      .then(res => {
        console.log(res);
        setProduct({ title: "", price: "", description: "" });
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>Title</label>
          <input
            type="text"
            onChange={(e) => setProduct({ ...product, title: e.target.value })}
            value={product.title}
          />
        </div>
        <div>
          <label>Price</label>
          <input
            type="text"
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
            value={product.price}
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type="text"
            onChange={(e) => setProduct({ ...product, description: e.target.value })}
            value={product.description}
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default ProductForm;
