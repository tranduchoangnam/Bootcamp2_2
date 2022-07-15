import './App.css';
import React,{useState} from 'react';
import Header from './Header.js';
import Post from './Post.js';
import Body from './Body.js';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="base">
      <Header />
      <div className="main">
        <div className="bar-left">
          <Body/>
        </div>
        <div className="bar-right">
          <Sidebar/>
        </div>
      </div>
    </div>
  );
}

export default App;
