import Card from "react-bootstrap/Card";

function CardDepoimento({ id, nome, depoimento, foto }) {
  return (
    <Card
      key={id}
      style={{ width: "22rem" }}
      className="ms-5 shadow bg-body rounded mb-5"
    >
      <Card.Img variant="top" src={foto} />
      <Card.Body>
        <Card.Title>{nome}</Card.Title>
        <Card.Text>{depoimento}</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default CardDepoimento;
