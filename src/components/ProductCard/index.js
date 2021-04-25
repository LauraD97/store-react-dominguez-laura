import React, { useContext, useState } from "react";
import { AppContext } from "../../context/UserContext";
import { fetchData, paths } from "../../data";
import Modal from "../../utils/modal/modal";
import buyBlueIcon from "../../utils/icons/blue-bag.svg";
import buyWHiteIcon from "../../utils/icons/white-bag.svg";
import coin from "../../utils/icons/coin.svg";
import mess from "../../utils/icons/message.svg";

const ProductCard = ({ _id, name, cost, category, img: { url } }) => {
  const { user, setUser } = useContext(AppContext);
  const [showModal, setShowModal] = useState(false);
  const [resultMessage, setResultMessage] = useState("");
  
  const handleRedeem = () => {
    fetchData({
      data: paths.redeem,
      body: { productId: _id },
    })
      .then((res) => {
        setShowModal(true);
        res.message === "You've redeem the product successfully"
          ? setResultMessage(res.message)
          : setResultMessage("Oh no, something went wrong!");

        fetchData({ data: paths.profile }).then((result) =>
          setUser(result)
        );
      })
      .catch(() => {
        setShowModal(true);
        setResultMessage("Oh no, something went wrong!");
      });
  };
  
  const difference = user.points - cost;

  return (
    <div className="card">
      { (difference > 0) ? 
        ( <img className="icon buy-icon-size" src={ buyBlueIcon } alt="Buy Icon"></img> )
        : (
            <div className="icon">
              <div className="need">
                <p> You need { -difference }</p>
                <img className="icon-size" src={coin} alt="Coin" />
              </div>
            </div>
          )
      }
      
      <img className="product" src={ url } alt="Product"></img>
  
      <div className="info">
        <div className="line"></div>
        <p>{category}</p>
        <h3>{name}</h3>
        <div className="points">
          <img className="coin-icon-size" src={coin} alt="Coin" />
          <p>{cost}</p>
        </div>
      </div>
  
      { (difference > 0) && (
        <div className="card-hover">
          <img className="icon buy-icon-size" src={ buyWHiteIcon } alt="Buy Icon"></img>
          <div className="buy-info">
            <div className="redeem-points">
              <p>{cost}</p>
              <img className="coin-icon-size" src={coin} alt="Coin" />
            </div>
            <button onClick={() => handleRedeem()}>
              Redeem now
            </button>
          </div>
        </div>
      )}
  
      {showModal && (
        <Modal setShowModal={setShowModal} showModal={showModal}>
          <div className="modal-container">
            <div className="modal-card">
              <button
                className="modal-close"
                onClick={() => setShowModal(!showModal)}
              >
                x
              </button>
              <div className="modal-confirmation">
                <img className="modal-icon" src={mess} alt="Coin" />
                <h1>{resultMessage}</h1>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
  
export default ProductCard;