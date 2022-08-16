import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function MenuCard({ props }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body className="flex-fill row align-items-end">
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.desc}</Card.Text>
        <Button variant="primary" className="col">
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
}
