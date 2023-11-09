import React from 'react';
import { Link } from 'react-router-dom';
import {app} from "./firebase"
import Login from './Login';
import Create_user from './Create_user';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

const App = () => {
  
 return(
  <>
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/create-user" element={<Create_user/>} />
        </Routes>
      </div>
    </Router>
  </>
 )
}

export default App;
