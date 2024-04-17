import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Card from './Cards';
import Sdata from './DataComponent/Sdata';
import App from './App';
import NextPage from './NextButtonComponent/NextPage';
import "./index.css"
console.log(Sdata);

ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/NextPage' element={<NextPage />}></Route>
    </Routes>
  </Router>,
  document.getElementById("root")
)