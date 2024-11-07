import React, { Component } from "react";
import "./home.css";
import Hero from "../hero.js";
import iskon1 from "../images/iskon1.jpg";
import iskon2 from "../images/iskon2.jpg";
import iskon3 from "../images/iskon3.jpg";
import AlokaiCheckout from 'alokai-checkout-component';

const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is a description for product 1',
    price: 20,
    image: 'https://via.placeholder.com/150',
  },
  // Add more products here
];
class Home extends Component {
  render() {
    return (
      <>
        <div>
          <Hero />
          <AlokaiCheckout products={products}  ></AlokaiCheckout> 
        </div>
        <div class="information">
          <div class="information-col">
            <h2> Foods Cafe </h2>
            <p>Monday to Saturday: 11.30 AM to 2.20 PM</p>
            <p>Sunday: 11.00 AM – 2.00 PM</p>
          </div>
          <div class="information-col">
            <h2> TEMPLE Darshan Timings</h2>
            <div class="details-col">
              <p>Monday: 7:15 AM - 5:00 AM</p>
              <p>Tuesday: 7:15 AM - 11:20 AM</p>
              <p>Wednesday: 12:00 PM - 12:30 PM</p>
              <p>Thursday: 4:30 PM - 5:50 PM</p>
              <p>Friday: 6:30 PM - 7:00 PM</p>
              <p>Saturday: 8:00 PM - 8:30 PM</p>
            </div>
          </div>
          <div class="information-col">
            <h2> Gift Shop </h2>
            <p> This is third column of our grid system</p>
          </div>
        </div>
        <h3 className="tilesContainerHeading">Upcoming Events new</h3>
        <div className="tilesContainer">
          <div className="tilesSection">
            <img src={iskon1}></img>
          </div>
          <div className="tilesSection">
            <img src={iskon2}></img>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
