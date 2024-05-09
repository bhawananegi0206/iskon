import React, { Component } from "react";
import "./home.css";
class Home extends Component {
  render() {
    return (
      <div>
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
    );
  }
}

export default Home;
