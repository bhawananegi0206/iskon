import React, { Component } from "react";
import "./home.css";
import iskon1 from "../images/iskon1.jpg";
import iskon2 from "../images/iskon2.jpg";
import iskon3 from "../images/iskon3.jpg";
class Home extends Component {
  render() {
    return (
      <><div>
        <section className="hero herobg">
          <div class="overlay1"></div>
          <div class="titlebox">
            <p class="lead1">Welcome to</p>
            <h1 class="tilSpan0">
              <span class="tilSpan1">Sri Sri Radha </span>
              <span class="tilSpan2">Rasabihari Temple</span>
            </h1>
          </div>
          <div class="text-center bg-light">
            <span class="tilSpan3">Open all days from </span>
          </div>
        </section>

      </div>
      <h3>Upcoming Events</h3>
      <div className="tilesContainer">
          <div className="tilesSection">
            <img src={iskon1}></img>
          </div>
          <div className="tilesSection">
            <img src={iskon2}></img>
          </div>
        </div></>
    );
  }
}

export default Home;
