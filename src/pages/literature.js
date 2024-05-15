import React, { Component } from "react";
import "./contactUs.css";
import baghvad from "../images/baghvad.jpg";
import srimadb from "../images/srimadb.jpg";
import isop from "../images/isop.jpg";
import prabhu_bok from "../images/prabhu_bok.jpg";
import krisnabok from "../images/krisnabok.jpg";
import cc_bok from "../images/cc_bok.jpg";
import nektar_bok from "../images/nektar_bok.jpg";
class Literature extends Component {
  render() {
    return (
      <div>
        <h2 className="contactHeading">Literature</h2>
        <div className="contactDesc">
          <div id="literatureContent">
            <div className="row1">
            <div class="littC1">
              <img src={baghvad} alt="bhagadavita" />
              <br />
              <br />
              Bhagavad-gita som den är översatt och kommenterad av
              A.C.Bhaktivedanta Swami Prabhupada
              <br />
              <br />
              Bhagavad-gita betyder Herrens lovsång och är den viktigaste
              litterära källan om yoga. Den utgör en komprimerad sammanfattning
              av Indiens vediska visdom. <br />
              Den talades av Krishna, Gudomens Högsta Personlighet, vid en
              mycket kritisk situation, då visdom är som mest behövd. Arjuna,
              den mäktige krigaren och Krishnas kära hängiven och vän, befann
              sig i ett djupt dilemma. Ödet hade tvingat in honom i ett enormt
              krig, där han skulle vara tvungen att döda sina vänner, gurus och
              släktingar. Hur löser man ett sådant problem på ett ansvarsfullt
              sätt och med ett rent samvete?
            </div>
            <div class="littC2">
              <img src={srimadb} alt="srimad bhagavatam" />
              <br />
              <br />
              Shrimad-Bhagavatam (12 böcker) Översatt och kommenterad av A.C.
              Bhaktivedanta Swami Prabhupada
              <br />
              <br />
              Shrimad-Bhagavatam, även kallad Bhagavata-purana, tillhör den
              femte Veda-boken. Detta är den främsta och mest lästa puranan,
              (krönikan) och den anses vara den naturliga kommentaren till
              Vedanta-sutra (Veda-skrifternas slutsatser), eftersom Vyasadeva är
              författare till båda. Shrimad-Bhagavatam börjar där Bhagavad-gita
              slutar och handlar om Bhagavan Shri Krishnas andliga lekar. För
              sökaren som undrar över Guds utseende, egenskaper, hemvist och
              aktiviteter, är Shrimad-Bhagavatam unik i sina detaljerade
              avslöjanden om Honom.
            </div>
            <div class="littC3">
              <img src={isop} alt="srimad bhagavatam" />
              <br />
              <br />
              Shri Ishopanishad Översatt och kommenterad av A.C. Bhaktivedanata
              Swami Prabhupada
              <br />
              <br />
              Shri Ishopanisad beskriver hur man kan leva i denna värld utan att
              bli bunden till den av karma-lagen. Karma-lagen är lagen om
              handlingar och dess återverkan. Boken beskriver den Högste Herrens
              transcendentala aktiviteter på Upanishadernas karakteristiska
              sätt, anpassat till de filosofiskt lagda som är i ständigt behov
              av intellektuell akrobatik.
            </div>
            </div>
            <div className="row2">
            <div class="littC1">
              <img src={prabhu_bok} alt="Prabhupada" />
              <br />
              <br />
              Prabhupada - Människan, helgonet, hans liv, hans arv Skildrad av
              Satsvarupa das Goswami, lärjunge till A.C. Bhaktivedanta Swami
              Prabhupada
              <br />
              <br />
              Prabhupada-lilamrita är en historisk bok om hur en gammal indisk
              man vid 70-års ålder gör det omöjliga. Efter flera decennier av
              förberedelser, åker han till New York för att utföra sitt livs
              mission. På 12 år lyckas han lägga grunden för Krishnarörelsen
              eller ISKCON, därefter har hans lärjungar fortsatt att bevara och
              utveckla Krishnarörelsen.
            </div>
            <div class="littC2">
              <img src={krisnabok} alt="krishna" />
              <br />
              <br />
              Krishna - all glädjes källa (3 böcker)
              <br />
              Av A.C. Bhaktivedanta Swami Prabhupada
              <br />
              <br />
              En prosaskildring om Krishnas transcendentala lekar på denna
              jordplanet. Krishna uppenbarade sig i Mathura Vrindavana utanför
              New Delhi för 5 000 år sedan. Hans gärningar nedtecknades i
              versform i Shrimad-Bhagavatams 10:e bok. Shrila Prabhupada valde
              att skriva en prosa skildring av den med filosofin inspunnen i
              berättelserna.
            </div>
            <div class="littC3">
              <img src={cc_bok} alt="chaitanya" />
              <br />
              <br />
              Chaitanya-charitamrita (4 böcker)
              <br />
              Översatt och kommenterad av A.C. Bhaktivedanata Swami Prabhupada
              <br />
              <br />
              Chaitanya-charitamrita är ett av världens mest betydelsefulla
              filosofiska verk. Författaren till detta oslagbara verk om Herren
              Chaitanya är Krishnadasa Kaviraja Gosvami. Krishnadasa var ett
              stort helgon och en förtrolig lärjunge till Ragunatha Dasa
              Gosvami. Raghunatha var en välkänd asket och ett helgon och han
              var en av Herren Chaitanys intima följeslagare.
            </div>
            </div>
           <div className="row3">
           <div class="littC1">
              <img src={nektar_bok} alt="srimad bhagavatam" />
              <br />
              <br />
              Hängivenhetens nektar
              <br />
              Översatt av A.C. Bhaktivedanta Swami Prabhupada
              <br />
              <br />
              Hängivenhetens nektar är en sammanfattning av filosofen och
              helgonet Shrila Rupa Gosvamis Bhakti-rasamrita-sindhu. Rupa
              Gosvami var Herren Chaitanyas främsta lärjunge och denna bok är
              hans litterära mästerverk. Hängivenhetens nektar är en klassiker
              bland litteratur om bhakti-yoga.
            </div>
           </div>
            
          </div>
        </div>
      </div>
    );
  }
}
export default Literature;
