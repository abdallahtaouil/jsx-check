import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "./components/Image";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Greeting from "./components/Greeting";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center" >
      <Card style={{ width: "18rem" }} >
        <Image />
        <Card.Body className="text-center">
          <Card.Title >
            <Name />
            <Price />
          </Card.Title>
          <Card.Text>
            <Description />
          </Card.Text>
          <Button variant="primary"> view </Button>
        </Card.Body>
      </Card> 
      <Greeting />
    </div>
  );
}

export default App;
