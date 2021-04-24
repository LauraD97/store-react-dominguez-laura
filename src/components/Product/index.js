import React from "react"; 
import coin from "../../utils/icons/coin.svg";
import '../../styles/products.css';

const Product = ({ _id, name, cost, category, img: { url } }) => {
  return (
    <div className="">
      <img src={url} alt="Product"></img>
  
      <div className="">
        <p>{category}</p>
        <h3>{name}</h3>
        <div className="">
          <img src={coin} alt="Coin" />
          <p>{cost}</p>
        </div>
      </div>
    </div>
  );
};
  
export default Product;