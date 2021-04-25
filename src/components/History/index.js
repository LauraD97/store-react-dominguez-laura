import React, { useContext } from "react";
import { AppContext } from "../../context/UserContext";
import Products from "../Products/index";
import Points from '../Points/index';
import user from "../../utils/icons/user.svg";
import '../../styles/history.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const History = ({ info, render }) => {
  const {
    user: { name, points, createDate = "" },
  } = useContext(AppContext);

  return (
    <div className="col-md-12">
      <div className="col-md-12 user-info">
        <div className="col-md-5 user-container">
          <div className="name-info">
            <img className="user-icon" src={user} alt="coin" />
            <h1>{name}</h1>
          </div>
          
          <h2>Points available: {points}</h2>
          <p>Count created on: {createDate.substr(0, 10)}</p>
        </div>
        <div className="col-md-7">
            <Points />
        </div>
      </div>
      <div className="col-md-12 bar2"></div>
      <h1 className='col-md-12 title'>BUY HISTORY</h1>
      <Products info={info} render={render}/>
    </div>
  );
};

export default History;