// import React from "react";
import React, { Component } from 'react'; //lets you export multiple times

// import Card from "./components/Card";
// import Header from "./components/Header";
// import Wrapper from "./components/Wrapper";
import Game from "./components/Game";

// import pictures from "./pictures.json";
// import { Container, Row, Col } from 'reactstrap';

class App extends Component {      


  
  // render the header, score, wrapper, and footer on the page using the current state values
  render() {
    return (
      <Game />
    );
  }
}

export default App;



// function App() {
//   return (
//     <div className = "container">
//       <Header />
//       <br></br>
//       <Container className="rows">
//       <Row>
//         <Col xs={3} md={4}> 
//           <Card image={pictures[0].image}/>
//         </Col>
//         <Col xs={3} md={4}>
//           <Card image={pictures[1].image}/>
//         </Col>
//         <Col xs={3} md={4}>
//           <Card image={pictures[2].image}/>
//         </Col>
//         <Col xs={3} md={4}>
//           <Card image={pictures[3].image}/>
//         </Col>
//       </Row>
//       <Row>
//         <Col xs={3} md={4}> 
//           <Card image={pictures[4].image}/>
//         </Col>
//         <Col xs={3} md={4}>
//           <Card image={pictures[5].image}/>
//         </Col>
//         <Col xs={3} md={4}>
//           <Card image={pictures[6].image}/>
//         </Col>
//         <Col xs={3} md={4}>
//           <Card image={pictures[7].image}/>
//         </Col>
//       </Row>
//       <Row>
//         <Col xs={3} md={4}> 
//           <Card image={pictures[8].image}/>
//         </Col>
//         <Col xs={3} md={4}>
//           <Card image={pictures[9].image}/>
//         </Col>
//         <Col xs={3} md={4}>
//           <Card image={pictures[10].image}/>
//         </Col>
//         <Col xs={3} md={4}>
//           <Card image={pictures[11].image}/>
//         </Col>
//       </Row>
//       </Container>
//     </div>
//   )


// }

// export default App;