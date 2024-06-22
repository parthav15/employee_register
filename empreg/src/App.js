import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import List from './components/List';
import Add from './components/Add';
import Update from './components/Update';

import {Routes, Route, Link} from "react-router-dom"; 

function App() {
  return (
    <div className="container">
      {/* Header Start */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Employee Register</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">List</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/add">Add</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Header End */}
      <Routes>
        <Route path="/" Component={List} exact/>
        <Route path="/add" Component={Add}/>
        <Route path="/update/:id" Component={Update}/>
      </Routes>
    </div>
  );
}

export default App;
