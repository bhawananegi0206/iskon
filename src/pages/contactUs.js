import React, { Component } from "react";
import "./contactUs.css";
class Contact extends Component {
  render() {
    return (
      <div>
        <h2 className="contactHeading">Contact</h2>
        <div className="contactDesc">
          <p>
            Vi finns på Karl Johansgatan 57 i Göteborg, där vi också har den
            vegetariska/veganska serveringen, Govindas.
          </p>
          <p>
            Öppettiderna för templet under veckorna är samma som för Govindas:
          </p>

          <p>
           <b>Måndag - Fredag 11.30-15.00</b>  <br/>
           <b>Lördag 12.00-15.00</b> 
        
            <br/>
            <br/>
           <i>Önskar Ni besöka andra tider, vänligen kontakta oss.</i> 
          </p>
          <p>
            Våra regelbundna program: Meditationskväll - Onsdagar kl 18 Läsning
            ur Bhagavad Gita - Fredag kl 18 Lördagsfest - kl 15.30
          </p>
          <p>
            KONTAKTA OSS INNAN och försäkra Er om attt programmet inte är
            inställt. Är Ni intresserade av STUDIEBESÖK kan Ni läsa mer om det i
            menyn.
          </p>
          <p>
            Welcome to the Hare Krishna temple! We are located at Karl
            Johansgatan 57 in Göteborg, where we also have the vegetarian/vegan
            restaurant, Govindas. 
            <br/>The opening hours for the temple are the same
            as for Govindas:<br/>
             <b>Wednesday - Friday 11.30-15.00 </b><br/><b>Saturday 12.00-15.00</b>
             <br/>
             <br/>
            If You wish to visit at another time, please contact us. Our regular
            programs: Meditation evening - Wednesdays 18 o'clock Bhagavad Gita
            reading - Friday 18 o'clock Saturday feast - 15.30 o'clock CONTACT
            US IN FOREHAND to make sure the program isn't cancelled. Are You
            interested in a study visit? Read more in the menu for
            "Studiebesök".
          </p>
        </div>
      </div>
    );
  }
}
export default Contact;
