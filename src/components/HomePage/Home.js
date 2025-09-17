import React from "react";

import { useState } from "react";
import "./home.css";
import NavigationBar from "../Navbar/Navbar";

function Home() {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: "../assets/phone1.avif ",
      titleName: "Samsung",
      brand: "Samsung",
      productinfo:
        "The Samsung Galaxy series encompasses a wide range of smartphones. ",
      price: "55000/-",
      button: "Buy Product",
    },
    {
      id: 2,
      image: "../assets/phone7.png",
      titleName: "Vivo",
      brand: "Vivo",
      productinfo:
        "More budget-friendly options while still maintaining a focus on performance and user experience.",
      price: "35000/-",
      button: "Buy Product",
    },
    {
      id: 3,
      image: "../assets/phone2.webp",
      titleName: "One+",
      brand: "One+",
      productinfo:
        "This line is exclusive to the Chinese market and offers mid-range phones with a focus on performance . ",
      price: "25000/-",
      button: "Buy Product",
    },
    {
      id: 4,
      image: "../assets/phone3.png",
      titleName: "Redmi",
      brand: "Redmi",
      productinfo:
        "Three sleek and modern OnePlus smartphones in black, mint green, and white colors.",
      price: "15000/-",
      button: "Buy Product",
    },
    {
      id: 5,
      image: "../assets/phone3.png",
      titleName: "Redmi",
      brand: "Redmi",
      productinfo:
        "Three sleek and modern OnePlus smartphones in black, mint green, and white colors.",
      price: "15000/-",
      button: "Buy Product",
    },
    {
      id: 6,
      image: "../assets/phone3.png",
      titleName: "Redmi",
      brand: "Redmi",
      productinfo:
        "Three sleek and modern OnePlus smartphones in black, mint green, and white colors.",
      price: "25000/-",
      button: "Buy Product",
    },
    {
      id: 7,
      image: "../assets/phone3.png",
      titleName: "Redmi",
      brand: "Redmi",
      productinfo:
        "Three sleek and modern OnePlus smartphones in black, mint green, and white colors.",
      price: "35000/-",
      button: "Buy Product",
    },
    {
      id: 8,
      image: "../assets/phone3.png",
      titleName: "Redmi",
      brand: "Redmi",
      productinfo:
        "Three sleek and modern OnePlus smartphones in black, mint green, and white colors.",
      price: "9000/-",
      button: "Buy Product",
    },
    {
      id: 9,
      image: "../assets/phone3.png",
      titleName: "Redmi",
      brand: "Redmi",
      productinfo:
        "Three sleek and modern OnePlus smartphones in black, mint green, and white colors.",
      price: "15000/-",
      button: "Buy Product",
    },
    {
      id: 10,
      image: "../assets/phone3.png",
      titleName: "Redmi",
      brand: "Redmi",
      productinfo:
        "Three sleek and modern OnePlus smartphones in black, mint green, and white colors.",
      price: "25000/-",
      button: "Buy Product",
    },
    {
      id: 11,
      image: "../assets/phone3.png",
      titleName: "Redmi",
      brand: "Redmi",
      productinfo:
        "Three sleek and modern OnePlus smartphones in black, mint green, and white colors.",
      price: "35000/-",
      button: "Buy Product",
    },
    {
      id: 12,
      image: "../assets/phone3.png",
      titleName: "Redmi",
      brand: "Redmi",
      productinfo:
        "Three sleek and modern OnePlus smartphones in black, mint green, and white colors.",
      price: "9000/-",
      button: "Buy Product",
    },
    {
      id: 13,
      image: "../assets/phone3.png",
      titleName: "Redmi Advanced",
      brand: "Redmi",
      productinfo:
        "Three sleek and modern OnePlus smartphones in black, mint green, and white colors.",
      price: "900000/-",
      button: "Buy Product",
    },
    {
      id: 14,
      image: "../assets/phone1.avif ",
      titleName: "Samsung New",
      brand: "Samsung",
      productinfo:
        "The Samsung Galaxy series encompasses a wide range of smartphones. ",
      price: "85000/-",
      button: "Buy Product",
    },
    {
      id: 15,
      image: "../assets/phone1.avif ",
      titleName: "Samsung",
      brand: "Samsung",
      productinfo:
        "The Samsung Galaxy series encompasses a wide range of smartphones. ",
      price: "95000/-",
      button: "Buy Product",
    },
    {
      id: 16,
      image: "../assets/phone1.avif ",
      titleName: "Samsung",
      brand: "Samsung",
      productinfo:
        "The Samsung Galaxy series encompasses a wide range of smartphones. ",
      price: "15000/-",
      button: "Buy Product",
    },
    {
      id: 17,
      image: "../assets/phone2.webp",
      titleName: "One+",
      brand: "One+",
      productinfo:
        "This line is exclusive to the Chinese market and offers mid-range phones with a focus on performance . ",
      price: "68000/-",
      button: "Buy Product",
    },
    {
      id: 18,
      image: "../assets/phone2.webp",
      titleName: "One+",
      brand: "One+",
      productinfo:
        "This line is exclusive to the Chinese market and offers mid-range phones with a focus on performance . ",
      price: "6000/-",
      button: "Buy Product",
    },
    {
      id: 19,
      image: "../assets/phone2.webp",
      titleName: "One+",
      brand: "One+",
      productinfo:
        "This line is exclusive to the Chinese market and offers mid-range phones with a focus on performance . ",
      price: "5000/-",
      button: "Buy Product",
    },
    {
      id: 20,
      image: "../assets/phone2.webp",
      titleName: "One+",
      brand: "One+",
      productinfo:
        "This line is exclusive to the Chinese market and offers mid-range phones with a focus on performance . ",
      price: "95000/-",
      button: "Buy Product",
    },
  ]);

  return (
    <div>
      <NavigationBar />
      <div className="product-list">
        {products.map((product) => {
          return (
            <div className="product" key={product.id}>
              <img
                className="productimg"
                src={product.image}
                alt={product.titleName}
              ></img>
              <p>Product Id: {product.id}</p>
              <p>Product Name: {product.titleName}</p>
              <p>Product Price: {product.price}</p>
              <button>Buy Now</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
