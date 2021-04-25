import React from "react"; 
import coin from "../../utils/icons/coin.svg";
import '../../styles/card.css';

const Product = ({ _id, name, cost, category, img: { url } }) => {
  return (
    <div className="history-card">
      <img src={url} alt="Product"></img>
  
      <div className="info-container">
        <p>{category}</p>
        <h3>{name}</h3>
        <div className="card-points">
          <img src={coin} alt="Coin" />
          <p>{cost}</p>
        </div>
      </div>
    </div>
  );
};
  
export default Product;