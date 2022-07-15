import './Header.css';
import React from 'react';
function Header() {
  return (
    <nav className="navbar">
        <div className= "navmain">
            <img src={require('./image/Instagram.png')} className="brand"/>
            <input type="text" className="input-search" placeholder="Search"/>
            <div className="navicon">
                <img src={require('./image/home.png')} className="icon"/>
                <img src={require('./image/message.png')} className="icon"/>
                <img src={require('./image/post.png')} className="icon"/>
                <img src={require('./image/explore.png')}className="icon"/>
                <img src={require('./image/like.png')} className="icon"/>
                <div className="icon profile"></div>
            </div>
        </div>  
    </nav>
  );
}

export default Header;