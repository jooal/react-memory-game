import React from "react";
import "../styles/Card.css";

// set properties for the image and the onClick event to see if the card has been clicked or not already
const Card = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image}/>

    </div>
  </div>
);

export default Card;
// export { default } from "./Card";