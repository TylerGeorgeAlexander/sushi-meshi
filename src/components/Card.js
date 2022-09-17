import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsCartPlusFill } from "react-icons/bs";

export default function MenuCard({ dataElement, cart, setCart }) {
  // console.log(dataElement);

  return (
    <Card className="box-shadow m-2" style={{ width: "18rem" }}>
      <p>{JSON.stringify(dataElement)}</p>
      <Card.Img
        className="card-image-top img-fluid p-2"
        variant="top"
        src={dataElement.img}
      />
      <Card.Body className="flex-fill row align-items-end justify-content-center">
        <Card.Title>{dataElement.name}</Card.Title>
        <Card.Text>{dataElement.desc}</Card.Text>
        <div className="col">
          <Card.Text className="d-flex align-items-end justify-content-center">
            ${dataElement.price}
          </Card.Text>
          <div className="row justify-content-center">
            <Button
              variant="primary"
              className="col-6 d-flex align-items-center justify-content-around"
              onClick={() =>
                setCart({
                  totalPrice: cart.totalPrice + dataElement.price,
                  name: dataElement.name,
                })
              }
            >
              Add to Cart <BsCartPlusFill />
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
