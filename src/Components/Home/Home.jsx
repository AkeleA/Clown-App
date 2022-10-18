import React from "react";
import "./Home.css";
import Clown from "../../images/pngwing1.png";
import talk1 from "../../images/Ellipse1.png";
import talk2 from "../../images/Ellipse2.png";
import thought from "../../images/haha.png";
import shapes from "../../images/Vector1.png";
import reno from "../../images/clown21.png";
import arrow from "../../images/arrow.png";
import dxb from "../../images/dxb.png";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <div className="headings">
        <h1 className="h-top"> WELCOME TO </h1>
        <h1 className="h-second"> RENT-O-MOCKERY </h1>
        <p>Find and rent clowns close to your location in minutes </p>
        <textarea
          type="text"
          className="h-location"
          placeholder="Type in your location..."
        ></textarea>
        <img src={dxb} alt="" className="ropes" />
        <Link to="/Services">
          <button className="h-search">
            <img src={arrow} alt="" className="pro" />
          </button>
        </Link>
      </div>

      <img src={Clown} className="kolade" alt="" />
      <img src={talk1} alt="" className="michael" />
      <img src={talk2} alt="" className="smd" />
      <img src={thought} alt="" className="melp" />
      <img src={shapes} alt="" className="meep" />
      <img src={reno} alt="" className="pdp" />
    </div>
  );
};

export default Home;
