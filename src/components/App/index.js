import React from 'react';
import Header from '../Header/index';
import Main from '../Main/index';
import UserProvider from '../../context/UserContext';
import '../../styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return(
    <div className="container">
      <UserProvider>
        <Header/>
        <Main/>
      </UserProvider>
    </div>        
    );
}

export default App;