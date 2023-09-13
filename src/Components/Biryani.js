import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Biryani() {
  return (
    <div className="bg-dark vh-100">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Foodie</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Biryani</Nav.Link>
            <Nav.Link href="/pasta">Pasta</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="d-flex gap-3 p-5">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/03/56/29/67/240_F_356296725_99B7HWo96NcVPFxYbvB3Vx834717I97H.jpg" />
          <Card.Body>
            <Card.Title>Chicken Biryani</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Buy Now!</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/05/13/36/19/240_F_513361994_mW8NmkpSX6RHoaA6KLpQxGiLTKa2ku28.jpg" />
          <Card.Body>
            <Card.Title>Chicken Biryani</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Buy Now!</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/04/36/36/55/240_F_436365522_DIAObZGkRo3yoRCKcRGsf2Wf43kJn3iq.jpg" />
          <Card.Body>
            <Card.Title>Chicken Biryani</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Buy Now!</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/06/07/30/22/240_F_607302267_FcoQV4B4Kl8BetPBVx9Bipeb0y7ghwBm.jpg" />
          <Card.Body>
            <Card.Title>Chicken Biryani</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Buy Now!</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="d-flex gap-3 p-5">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/04/18/22/51/240_F_418225186_OCtaNADfMMtBWBwTTOTJYcyjuRMQIqjW.jpg" />
          <Card.Body>
            <Card.Title>Chicken Biryani</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Buy Now!</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/04/36/36/57/240_F_436365754_z3i5Es0sFmZuLY6GZIzdiU01v9HqpGZe.jpg" />
          <Card.Body>
            <Card.Title>Chicken Biryani</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Buy Now!</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/05/70/58/72/240_F_570587233_QnGdwC3XCpDQlbJk9akBtye6BN0Y97ZA.jpg" />
          <Card.Body>
            <Card.Title>Chicken Biryani</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Buy Now!</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/04/18/22/51/240_F_418225186_OCtaNADfMMtBWBwTTOTJYcyjuRMQIqjW.jpg" />
          <Card.Body>
            <Card.Title>Chicken Biryani</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Buy Now!</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Biryani;