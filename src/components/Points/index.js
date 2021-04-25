import React, { useContext, useState, useEffect, useRef } from "react";
import { AppContext } from "../../context/UserContext";
import { paths, fetchData, pointsOptions } from "../../data";
import coin from "../../utils/icons/coin.svg";
import "../../styles/points.css";

const Points = () => {
  const { user, setUser } = useContext(AppContext);
  const [selected, setSelected] = useState(pointsOptions[0]);
  const [message, setMessage] = useState("Add points to your account");
  let isMounted = useRef(true);

  const handlePost = () => {
    
    fetchData({ data: paths.points, body: { amount: selected } })
      .then((res) => {
         setUser({ ...user, points: res["New Points"] });
         isMounted.current && setMessage(res.message);
      
      }).catch(
        isMounted.current && setMessage('Oh! Something went wrong')
      )
  };

  useEffect(()=> {
    return() => {
      isMounted.current = false;
    }
  },[]);

  return (
    <div className="col-md-12 points-container">
      <h1 className="col-md-12">Add points</h1>
      <div className="col-md-12 buttons-container">
        {pointsOptions.map((element) => (
          <button
            key={element}
            className={              
              selected === element ? "button-active points-button col-md-4" : "button points-button col-md-4"
            }
            onClick={() => setSelected(element)}
          >
            <img className="coin-icon" src={coin} alt="coin" />
            <p>{element}</p>
          </button>
        ))}
      </div>
      <div className="col-md-12 add-container">
        <button className="col-md-3 offset-md-1" onClick={() => handlePost()}>
          Let's do it!
        </button>
        <h3 className="col-md-7">{message}</h3>
      </div>
    </div>
  );
};

export default Points;