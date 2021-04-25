import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { paths, fetchData } from "../../data";
import { AppContext } from "../../context/UserContext";
import Modal from "../../utils/modal/modal";
import Points from "../Points/index";
import logo from "../../utils/images/aerolab_logo.png";
import shop from "../../utils/icons/shopping.svg";
import product from "../../utils/icons/product.svg";
import user from "../../utils/icons/user.svg";
import coin from "../../utils/icons/coin.svg";
import '../../styles/navBar.css';

const NavBar = () => {
  
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="col-md-12 nav-container np">
      <div className="col-md-2 np">
        <img className="logo" src={logo} alt="Logo" />
      </div>
      
      <ul className="col-md-4 offset-md-1 links">
        <li>
          <img className="info-icon" src={shop} alt="Logo" />
          <Link className="link" to="/store-react-dominguez-laura/history">
            Shopping history
          </Link>
        </li>
        <li>
          <img className="nav-icon" src={product} alt="Logo" />
          <Link className="link" to="/store-react-dominguez-laura/">
            Products
          </Link>
        </li>
      </ul>

      <ProfileCard setShowModal={setShowModal} showModal={showModal} /> 
      
      {showModal && (
        <Modal>
          <div className="modal-container">
            <div className="modal-card">
              <button
                className="modal-close"
                onClick={() => setShowModal(!showModal)}
              >
                x
              </button>
              <div className="modal-profile">
                <Points />
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export const ProfileCard = ({ setShowModal, showModal}) => {
  const {
    user: { name, points },
    setUser,
  } = useContext(AppContext);

  useEffect(() => {
    fetchData({ data: paths.profile }).then((res) => setUser(res));
  }, [setUser]);

  return(
    <div className="col-md-4  offset-md-1 user-info">    
      <button className="user-points" onClick={() => setShowModal(!showModal)}>
        <img className="info-icon"  src={coin} alt="coin" />
        <p>{points} points</p>        
      </button>

      <p className="">{name}</p>
      <img className="info-icon" src={user} alt="coin" />      
    </div>    
  )
}

export default NavBar;
