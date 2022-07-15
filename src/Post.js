import './Post.css';
import React from 'react';
function Post({name,avasrc,imgsrc}) {
  return (
      <div className="post">
            <div className="box">
              <div className="avatar"><img src={avasrc} className="imgstr"/></div>
              <p className="user">{name}</p>
              <img src={require('./image/3dots.png')}  className="icon"/>
            </div>
            <img src={imgsrc} className="pic"/>
            <div className="react">
              <div>
                <img src={require('./image/react/likes.png')} className="icon"/>
                <img src={require('./image/react/comments.png')}  className="icon"/>
                <img src={require('./image/react/share.png')}  className="icon"/>
              </div>
              <img src={require('./image/react/save.png')}  className="icon right"/>
            </div>
            <p className="name">91,570 likes</p>
            <p className="name">{name} <span className="caption">chưa chắc đã giống đâu hâhhahha hhhhh hhhhhh hhhhhh hhhhh hhhh hhhshshsh </span></p>
            <p className="name view">View all 1,136 comments</p>
            <div className="day"><p className="left">7 DAYS AGO</p></div>
            <div className="comment">
              <div className="comment-left">
                <img src={require('./image/react/emoji.png')}  className="icon left"/>
                <input type="text" className="input-comment" placeholder="Add a comment..."/>
              </div>
                <p className="right post-button" >Post</p>
            </div>
      </div>
    )
}

export default Post;