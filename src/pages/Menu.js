import React from "react";
import Card from "../components/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const data = [
  {
    name: "Rainbow Roll",
    price: 11.99,
    img: "./assets/horizontal-pictures/rainbow-roll.jpg",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum voluptates voluptatibus maiores illum dicta animi debitis ad aperiam omnis molestias! Corporis corrupti iure sed ex eos? Ad accusantium minus a!",
  },
  {
    name: "Salmon Nigiri",
    price: 9.99,
    img: "./assets/horizontal-pictures/salmon-nigiri.jpg",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum voluptates voluptatibus maiores illum dicta animi debitis ad aperiam omnis molestias!",
  },
  {
    name: "Rainbow Roll",
    price: 11.99,
    img: "./assets/horizontal-pictures/rainbow-roll.jpg",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum voluptates voluptatibus maiores illum dicta animi debitis ad aperiam omnis molestias! Corporis corrupti iure sed ex eos? Ad accusantium minus a!",
  },
  {
    name: "Salmon Nigiri",
    price: 9.99,
    img: "./assets/horizontal-pictures/salmon-nigiri.jpg",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum voluptates voluptatibus maiores illum dicta animi debitis ad aperiam omnis molestias!",
  },
];
export default function Menu() {
  return (
    <div>
      <h1>Menu</h1>
      <Container fluid className="d-flex">
        <Row className="h-100">
          {data.map((props) => (
            <Col className="d-flex justify-content-center">
              <Card
                props={props}
                className=""
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
