import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import Tacha from "../../images/Tach.png";
import cheat from "../../images/cheat.png";
import alpha from "../../images/alphamale.png";
import osinwin from "../../images/osiwin.png";
import Vec1 from "../../images/vec1.png";
import Vec2 from "../../images/vec2.png";
import Vec3 from "../../images/vec3.png";

const Services = () => {
  return (
    <div className="services">
      <div className="serv-navbar">
        <div className="sn-left">R'O'M</div>
        <div className="sn-mid">
          <textarea
            type="text"
            className="sn-location"
            placeholder="Victoria Island"
          ></textarea>
        </div>
        <Link to="/">
          <div className="sn-right">back</div>
        </Link>
      </div>
      <div className="serv-main">
        <Link to="/Tacha">
          <div className="container">
            <span>
              <p id="tp-rate">Top rated</p>
            </span>
            <img src={Tacha} alt="" />
            <div className="bottom-left">
              <b>TACHA CLOWN</b>
              <p> 24 parties hosted </p>
            </div>
            <div className="bottom-right">
              <div className="price">$40/hr</div>
              <div className="rating">80%</div>
            </div>
          </div>
        </Link>
        <Link to="/Reno">
          <div className="container">
            <span>
              <p id="tp-rate">Top rated</p>
            </span>
            <img src={cheat} alt="" />
            <div className="bottom-left">
              <b>RENO MOCKING</b>
              <p> 24 parties hosted </p>
            </div>
            <div className="bottom-right">
              <div className="price">$40/hr</div>
              <div className="rating">80%</div>
            </div>
          </div>
        </Link>
        <Link to="/Osiwin">
          <div className="container">
            <span>
              <p id="tp-rate">Top rated</p>
            </span>
            <img src={osinwin} alt="" />
            <div className="bottom-left">
              <b>OSIWIN ZEEH</b>
              <p> 24 parties hosted </p>
            </div>
            <div className="bottom-right">
              <div className="price">$40/hr</div>
              <div className="rating">80%</div>
            </div>
          </div>
        </Link>
        <Link to="/Alpha">
          <div className="container">
            <span>
              <p id="tp-rate">Top rated</p>
            </span>
            <img src={alpha} alt="" />
            <div className="bottom-left">
              <b>ALPHA MALE</b>
              <p> 24 parties hosted </p>
            </div>
            <div className="bottom-right">
              <div className="price">$40/hr</div>
              <div className="rating">80%</div>
            </div>
          </div>
        </Link>
      </div>
      <div className="serv-map-container">
        <img src={Vec1} alt="" className="maps" />
        <img src={Vec3} alt="" className="lands" />
        <img src={Vec2} alt="" className="wat" />
        <div className="s-logo">CLOWN MAP</div>
      </div>
      <div className="faux-cont"></div>
    </div>
  );
};

export default Services;
