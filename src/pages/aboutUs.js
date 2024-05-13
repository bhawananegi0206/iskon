import React, { Component } from "react";
import iskonBG2 from "../images/iskonBG2.jpeg";
import iskonBG3 from "../images/iskonBG3.jpeg";
import "./about.css";
class Contact extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <div class="row">
            <div class="bg_Festival aboutus_title">
              Welcome to ISKCON Göttingen
            </div>
            <div class="row mt-3 mb-3 align-items-center">
              <div class="col-xl-6 col-sm-12 col-lg-6 desc">
                <div class="desc">
                  <p>
                  ISKCON is called the International Society for Krishna Consciousness.
                  In Swedish they say Iskcon or the Krishna movement and colloquially Hare Krishna. 
                  We are a worldwide spiritual community established in 1966 by His Divine Grace A. C. Bhaktivedanta Swami Prabhupada in New York, USA (but our religion is not new but ancient.)
                  </p>
                  <p>
                  The primary purpose of the Krishna movement is to spread knowledge about God and help all living beings to regain their spiritual power and meaning. 
                  We place great emphasis on meditating on God's name and chanting it together (mantra meditation). We mainly use Mahamantrat: </p>
                </div>
              </div>
              <div class="col-xl-6 col-sm-12 col-lg-6">
                <img src={iskonBG3} width="100%" alt="" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="bg_Festival aboutus_subTitle">Hare Krishna Hare Krishna Krishna Krishna Hare Hare<br></br>
Hare Rama Hare Rama Rama Rama Hare Hare
</div>
            <div
              class="row mt-3 mb-3 align-items-center"
            >
              <div class="col-xl-6 col-sm-12 col-lg-6">
                <img src={iskonBG2} width="100%" alt="" />
              </div>
              <div class="col-xl-6 col-sm-12 col-lg-6 desc">
                <div class="desc">
                It is through this mantra that we have made ourselves known and therefore we are commonly called Hare Krishna.
We are a Hindu community in a denomination called Vaishnavism. In its present form, our spiritual community was founded by Chaitanya Mahaprabhu in Bengal about five hundred years ago. Through Srila Prabhupada's mission, it has spread throughout the world during the 20th century and is today found on all continents and in most countries.

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
