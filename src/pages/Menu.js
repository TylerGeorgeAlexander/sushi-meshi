import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// const dummyData = [
//   {
//     name: "Rainbow Roll",
//     price: 11.99,
//     img: "./assets/horizontal-pictures/rainbow-roll.jpg",
//     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum voluptates voluptatibus maiores illum dicta animi debitis ad aperiam omnis molestias! Corporis corrupti iure sed ex eos? Ad accusantium minus a!",
//   },
//   {
//     name: "Salmon Nigiri",
//     price: 9.99,
//     img: "./assets/horizontal-pictures/salmon-nigiri.jpg",
//     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum voluptates voluptatibus maiores illum dicta animi debitis ad aperiam omnis molestias!",
//   },
//   {
//     name: "Rainbow Roll",
//     price: 11.99,
//     img: "./assets/horizontal-pictures/rainbow-roll.jpg",
//     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum voluptates voluptatibus maiores illum dicta animi debitis ad aperiam omnis molestias! Corporis corrupti iure sed ex eos? Ad accusantium minus a!",
//   },
//   {
//     name: "Salmon Nigiri",
//     price: 9.99,
//     img: "./assets/horizontal-pictures/salmon-nigiri.jpg",
//     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum voluptates voluptatibus maiores illum dicta animi debitis ad aperiam omnis molestias!",
//   },
// ];

export default function Menu({ cart, setCart }) {
  const [data, setData] = useState(null);

  //   setData(
  //  // Simple GET request using fetch
  // fetch("http://localhost:2121/menu")
  // .then((response) => response.json())
  // .then((data) => this.setState({ data: data }))
  //   )

  useEffect(() => {
    const url = "http://localhost:2121/menu";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setData(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="menu-font">Menu</h1>
      <Container fluid className="d-flex justify-content-center">
        <Row className="h-100">
          {data &&
            data.map((dataElement, index) => (
              <Col className="d-flex justify-content-center" key={index}>
                <Card dataElement={dataElement} cart={cart} setCart={setCart} key={index} />
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
}
