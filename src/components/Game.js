// import React from "react";
import React, { Component } from 'react'; //lets you export multiple times

import Card from "./Card";
import Header from "./Header";
import Wrapper from "./Wrapper";
import "../styles/Game.css";

import pictures from "../pictures.json";
// import { Container, Row, Col } from 'reactstrap';

class Game extends Component {      
  state = {
      pictures: pictures,
      currentScore: 0,
      highscore: 0,
    };
  
  handleCardClicked = (id, clicked) => {
    const displayPictures = this.state.pictures; 
    if (clicked) {
      displayPictures.forEach((pictures, i)=> {
        displayPictures[i].clicked = false;
      });
      return this.setState({
        pictures: pictures.sort(() => Math.random() - 0.5),
      })
    }
    else {
      displayPictures.forEach((pictures, i)=> {
        if (id === pictures.id) {
          displayPictures[i].clicked = true;
          return this.setState({
            pictures: pictures.sort(() => Math.random() - 0.5),
            currentScore: 0
          })
    
        }
      });

      const {highscore, currentScore} = this.state;
      const newScore = currentScore +1;
      const newHighScore = newScore > highscore ? newScore : highscore;


      return this.setState({
        pictures: pictures.sort(()=> Math.random() - 0.5),
        currentScore: newScore,
        highscore: newHighScore
      })

    }
  };


  
  // render the header, score, wrapper, and footer on the page using the current state values
  render() {
    return (
      <div className="container">
        <Header />
        <div className = "score-board">
          <h4>Your Score: {this.state.currentScore}  <br></br>  High Score: {this.state.highscore}</h4>
        </div>
        <Wrapper>  
          {this.state.pictures.map(pictures => (
            <Card
            // clickCount={this.clickCount}
              key = {pictures.id}
              id={pictures.id}
              image={pictures.image}
              clicked = {pictures.clicked}
              handleCardClicked = {this.handleCardClicked}
              />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default Game;