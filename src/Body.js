import React, { useState } from "react";
import './Body.css';
import post1 from './image/post/post1.png'
import post2 from './image/post/post2.png'
import post3 from './image/post/post3.png'
import post4 from './image/post/post4.png'
import ava from'./image/post/avasontung.png'
import Post from'./Post.js'

function Body(){
    return(
    <>
    <div className="stories-bar">
        <div className="user-stories">
            <div className="avatar"> <img src={require('./image/post/post4.png')} className="imgstr"/></div>
            <div className="user"><p>twyndn</p></div>
        </div>
        <div className="user-stories">
            <div className="avatar"> <img src={require('./image/post/post2.png')} className="imgstr"/></div>
            <div className="user"><p>fuurie_</p></div>
        </div>
        <div className="user-stories">
            <div className="avatar"> <img src={require('./image/post/avasontung.png')}  className="imgstr"/></div>
            <div className="user"><p>sontungmtp</p></div>
        </div>
        <div className="user-stories">
            <div className="avatar"> <img src={require('./image/post/post3.png')}className="imgstr"/></div>
            <div className="user"><p>tgiangya</p></div>
        </div>
        <div className="user-stories">
            <div className="avatar"> <img src={require('./image/profile.jpg')} className="imgstr"/></div>
            <div className="user"><p>h.viviha</p></div>
        </div>
        <div className="user-stories">
            <div className="avatar"> <img src={require('./image/post/post1.png')} className="imgstr"/></div>
            <div className="user"><p>trangdee_</p></div>
        </div>
    </div>
      <Post name="sontungmtp" avasrc={ava} imgsrc={post1}/>
      <Post name="tgiangya"avasrc={post3} imgsrc={post3}/>
      <Post name="sontungmtp"avasrc={ava} imgsrc={post4}/>
      <Post name="sontungmtp"avasrc={ava} imgsrc={post2}/>
    </>
    )
}
export default Body;