import React from "react";
import logo from "./logo.svg";
import "./App.css";

const products = [
  {
    img: "https://plchldr.co/i/500x250",
    title: "slipknot",
    price: "$12",
  },
  {
    img: "https://plchldr.co/i/500x250",
    title: "cake",
    price: "$15",
  },
  {
    img: "https://plchldr.co/i/500x250",
    title: "metallica",
    price: "$11",
  },
];

const Product = ({ img, title, price }) => {
  return (
    <div className="product">
      <img src={img} alt="#" />
      <p className="title">{title}</p>
      <p className="price">{price}</p>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      {products.map((product) => (
        <Product
          img={product.img}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default App;
