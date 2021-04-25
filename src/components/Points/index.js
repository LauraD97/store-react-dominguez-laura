import React, { useContext, useState, useEffect, useRef } from "react";
import { AppContext } from "../../context/UserContext";
import { paths, fetchData, pointsOptions } from "../../data";
import coin from "../../utils/icons/coin.svg";
import "../../styles/points.css";

const Points = () => {
  const { user, setUser } = useContext(AppContext);
  const [selected, setSelected] = useState(pointsOptions[0]);
  const [message, setMessage] = useState("Add points to your account now");
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
    <div className="points-comp">
      <h1>Add points</h1>
      <div className="options">
        {pointsOptions.map((element) => (
          <button
            key={element}
            className={
              selected === element ? "btn-active number" : "btn number"
            }
            onClick={() => setSelected(element)}
          >
            <img src={coin} alt="coin" />
          <p>{element}</p>
          </button>
        ))}
      </div>
      <button className="" onClick={() => handlePost()}>
        Go!
      </button>
      <h3>{message}!</h3>
    </div>
  );
};


export default Points;
