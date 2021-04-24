import React, { useContext, useState } from "react";
import { AppContext } from "../../context/UserContext";
import { fetchData, paths } from "../../data";
import Modal from "../../utils/modal/modal";
import buyBlueIcon from "../../utils/icons/blue-bag.svg";
import buyWHiteIcon from "../../utils/icons/white-bag.svg";
import coin from "../../utils/icons/coin.svg";
import '../../styles/products.css';

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
      res.message === 'You have redeem the product successfully'
        ? setResultMessage(res.message)
        : setResultMessage("Oh no, something went wrong!");
  
        fetchData({ data: paths.profile })
        .then((result) =>
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
    <div className="">
      { (difference > 0) ? 
        ( <img className="" src={ buyBlueIcon } alt="Buy Icon"></img> )
        : (
            <div className="">
              <div className="">
                <p> You need { -difference }</p>
                <img src={coin} alt="Coin" />
              </div>
            </div>
          )
      }
      
      <img className="" src={ url } alt="Product"></img>
  
      <div className="">
        <div className=""></div>
        <p>{category}</p>
        <h3>{name}</h3>
        <div className="">
          <img src={coin} alt="Coin" />
          <p>{cost}</p>
        </div>
      </div>
  
      { (difference > 0) && (
        <div className="">
          <img className="" src={ buyWHiteIcon } alt="Buy Icon"></img>
          <div className="">
            <div className="">
              <p>{cost}</p>
              <img src={coin} alt="Coin" />
            </div>
            <button className="btn btn-add" onClick={() => handleRedeem()}>
              Redeem now
            </button>
          </div>
        </div>
      )}
  
      { showModal && (
        <Modal setShowModal={setShowModal} showModal={showModal}>
          <div className="">
            <div className="modal">
              <button
                className=""
                onClick={() => setShowModal(!showModal)}
              >
                x
              </button>
              <div className="">
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