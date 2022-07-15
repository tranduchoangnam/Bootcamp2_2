import React from 'react'
import './Sidebar.css'
function Sidebar(){
    return(
        <div className="sug-bar">
          <div className="box">
            <div className="info">
              <img src={require('./image/profile.jpg')} className="imgstr" />
              <p className="name">
                psychonion
                <br />
                <stan className="caption" style={{ color: "grey" }}>
                  Hoàng Nam
                </stan>
              </p>
            </div>
            <p
              className="post-button"
              style={{ fontSize: 13, fontFamily: '"Roboto"' }}
            >
              Switch
            </p>
          </div>
          <div className="box">
            <p
              className="name"
              style={{ fontSize: 14, marginLeft: 0, color: "rgb(142,142,142)" }}
            >
              Suggestions for you
            </p>
            <p
              style={{
                fontSize: 13,
                fontFamily: '"Roboto"',
                cursor: "pointer"
              }}
            >
              See All
            </p>
          </div>
          <div className="box">
            <div className="info">
              <img
                src={require('./image/post/post2.png')}
                className="imgstr"
                style={{ height: 40, width: 40 }}
              />
              <p className="name" style={{ marginLeft: 5 }}>
                user_name
                <br />
                <stan
                  className="caption"
                  style={{ color: "rgb(142,142,142)", fontSize: 12 }}
                >
                  Suggested for you
                </stan>
              </p>
            </div>
            <p
              className="post-button right"
              style={{ fontSize: 13, fontFamily: '"Roboto"' }}
            >
              Follow
            </p>
          </div>
          <div className="box">
            <div className="info">
              <img
                src={require('./image/post/post2.png')}
                className="imgstr"
                style={{ height: 40, width: 40 }}
              />
              <p className="name" style={{ marginLeft: 5 }}>
                user_name
                <br />
                <stan
                  className="caption"
                  style={{ color: "rgb(142,142,142)", fontSize: 12 }}
                >
                  Suggested for you
                </stan>
              </p>
            </div>
            <p
              className="post-button right"
              style={{ fontSize: 13, fontFamily: '"Roboto"' }}
            >
              Follow
            </p>
          </div>
          <div className="box">
            <div className="info">
              <img
                src={require('./image/post/post2.png')}
                className="imgstr"
                style={{ height: 40, width: 40 }}
              />
              <p className="name" style={{ marginLeft: 5 }}>
                user_name
                <br />
                <stan
                  className="caption"
                  style={{ color: "rgb(142,142,142)", fontSize: 12 }}
                >
                  Suggested for you
                </stan>
              </p>
            </div>
            <p
              className="post-button right"
              style={{ fontSize: 13, fontFamily: '"Roboto"' }}
            >
              Follow
            </p>
          </div>
          <div className="box">
            <div className="info">
              <img
                src={require('./image/post/post2.png')}
                className="imgstr"
                style={{ height: 40, width: 40 }}
              />
              <p className="name" style={{ marginLeft: 5 }}>
                user_name
                <br />
                <stan
                  className="caption"
                  style={{ color: "rgb(142,142,142)", fontSize: 12 }}
                >
                  Suggested for you
                </stan>
              </p>
            </div>
            <p
              className="post-button right"
              style={{ fontSize: 13, fontFamily: '"Roboto"' }}
            >
              Follow
            </p>
          </div>
          <div className="box">
            <div className="info">
              <img
                src={require('./image/post/post2.png')}
                className="imgstr"
                style={{ height: 40, width: 40 }}
              />
              <p className="name" style={{ marginLeft: 5 }}>
                user_name
                <br />
                <stan
                  className="caption"
                  style={{ color: "rgb(142,142,142)", fontSize: 12 }}
                >
                  Suggested for you
                </stan>
              </p>
            </div>
            <p
              className="post-button right"
              style={{ fontSize: 13, fontFamily: '"Roboto"' }}
            >
              Follow
            </p>
          </div>
          <div className="info ">
            <p
              className="caption"
              style={{
                marginRight: 30,
                color: "rgb(207,207,207)",
                fontSize: 12
              }}
            >
              <br />
              About Help Press API Jobs Privacy Terms Locations Language{" "}
            </p>
          </div>
          <div className="info">
            <p
              className="caption"
              style={{ color: "rgb(207,207,207)", fontSize: 12 }}
            >
              © 2022 INSTAGRAM FROM HOANG NAM:))))
            </p>
          </div>
        </div>
    );
}
export default Sidebar