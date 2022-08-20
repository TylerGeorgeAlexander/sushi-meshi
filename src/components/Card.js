import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsCartPlusFill } from "react-icons/bs";

export default function MenuCard({ props }) {
  return (
    <Card className="box-shadow" style={{ width: "18rem" }}>
      <Card.Img className="card-image-top img-fluid" variant="top" src={props.img} />
      <Card.Body className="flex-fill row align-items-end justify-content-center">
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.desc}</Card.Text>
        <div className="col">
          <Card.Text className="d-flex align-items-end justify-content-center">
            ${props.price}
          </Card.Text>
          <div className="row justify-content-center">
            <Button
              variant="primary"
              className="col-6 d-flex align-items-center justify-content-around"
            >
              Add to Cart <BsCartPlusFill />
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
