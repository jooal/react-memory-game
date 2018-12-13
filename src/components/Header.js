import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <h1>Bob's Burgers Memory Game</h1>
      <p className="directions">Click on an image. The images will reshuffle. Don't click on the same image twice or the game will start over.</p>
      {/* <div className = "score-board">
      <h4 className="your-score">Your Score: </h4> */}
      {/* <h4 className="highest-score">Highest Score: </h4> */}
      {/* <h4 className="left">Tiles left: </h4> */}
      {/* </div> */}

    </header>
  );
}

export default Header;
