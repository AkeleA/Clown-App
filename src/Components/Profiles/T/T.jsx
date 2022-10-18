import React from "react";
import { Link } from "react-router-dom";
import "./T.css";
import Ta from "../../../images/Tach.png";
import Ta1 from "../../../images/girl1.png";
import Ta2 from "../../../images/girl2.png";
import Ta3 from "../../../images/girl3.png";
import rj from "../../../images/rj.png";

const Tacha = () => {
  return (
    <div className="T">
      <div className="top">
        <div className="tt-left">R'O'M</div>
        <Link to="/Services">
          <div className="tt-right">back</div>
        </Link>
      </div>
      <div className="curv-cont">
        <div>
          <span className="tt-rat">
            <p>Top rated</p>
          </span>
          <img src={Ta} alt="" className="cc-img" />
        </div>
        <div className="cc-imh"></div>
        <div className="textbox">
          <h3 className="c-name">TACHA CLOWN</h3>
          <p className="rate">$40/hr</p>
          <p className="t-up">24 parties hosted</p>
        </div>
        <button className="t-clown">
          <span>Book Me</span>
        </button>
        <div className="butshad"></div>
        <div className="bio-container">
          <h3 className="bio-head">MY BIO</h3>
          <div className="bio-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
            sed mauris, mattis fringilla leo in donec egestas quam. Duis
            facilisis senectus aliquet nulla. Lobortis vitae sed nulla nulla
            amet mattis facilisis. Sem vulputate pretium, non pellentesque
            porttitor quam vel. Enim tristique integer quis pellentesque ornare.
            Et tortor, eu sed in. Eu arcu sit integer pellentesque. Nulla donec
            arcu diam, etiam lorem. Orci lectus gravida facilisis lacus, nunc.
          </div>
        </div>
      </div>
      <hr />
      <div className="img-container">
        <img src={Ta1} alt="" className="Ta1" />
        <img src={Ta2} alt="" className="Ta2" />
        <img src={Ta3} alt="" className="Ta3" />
      </div>
      <hr className="sep" />
      <div className="c-reviews">
        <h3 className="c-rev">CLOWN REVIEWS</h3>
        <span className="t-rev">12 reviews</span>
        <div className="rev-left">
          <img src={rj} alt="" />
          <span className="rev-name">Rahman Jago</span>
        </div>
        <div className="rev-right">
          <span className="textin">
            Fun clown. was exceptional at the party...
          </span>
        </div>
      </div>
    </div>
  );
};

export default Tacha;
