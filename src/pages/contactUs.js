import React, { Component } from "react";
import "./contactUs.css";
class Contact extends Component {
  render() {
    return (
      <div>
        <h2 className="contactHeading">Contact</h2>
        <div className="contactDesc">
        <p>
          Welcome to the Hare Krishna temple! We are located at Karl Johansgatan
          57 in Göteborg, where we also have the vegetarian/vegan restaurant,
          Govindas.</p>
          <p>
         The opening hours for the temple are the same as for</p>
         <p>Govindas: Wednesday - Friday 11.30-15.00 </p>
         <p>Saturday 12.00-15.00</p>
         <p> If You
          wish to visit at another time, please contact us. </p>
          <p>Our regular
          programs: Meditation evening - Wednesdays 18 o'clock Bhagavad Gita
          reading - Friday 18 o'clock Saturday feast - 15.30 o'clock CONTACT US
          IN FOREHAND to make sure the program isn't cancelled. Are You
          interested in a study visit? Read more in the menu for "Studiebesök"
        </p>
        </div>
      </div>
    );
  }
}
export default Contact;
