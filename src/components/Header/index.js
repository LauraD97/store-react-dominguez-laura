import React from 'react';
import '../../styles/header.css';
import cover from '../../utils/images/cover.png';

const Header = () => {
  return(
    <div className="col-md-12 np">
      <div className="col-md-12 bar"></div>
      <div className="col-md-12 header np">
        <img src={cover} alt='cover page'></img>
        <h1>Reward Store</h1>
      </div>
      <div className="col-md-12 bar"></div>
    </div>
    
    
  );
}

export default Header;