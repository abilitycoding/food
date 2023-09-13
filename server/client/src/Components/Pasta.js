import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Biryani() {
  return (
    <div className="bg-dark">
      <Navbar bg="light" data-bs-theme="light" className=" position-sticky top-0 start-0 end-0 z-1">
        <Container>
          <Navbar.Brand href="/" className="fs-3 fw-bold p-0 text-warning">
            Foodie
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Biryani</Nav.Link>
            <Nav.Link href="/pasta">Pasta</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Row>
        <Row className="d-flex gap-5 p-0 p-5">
          <Col xs={12} sm={5} md={3} lg={2} className="p-0">
            <Card style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src="https://t4.ftcdn.net/jpg/02/24/04/47/240_F_224044706_GKydWTrihWdUaMyjxCSUZYsnAUVHgVKm.jpg"
              />
              <Card.Body>
                <Card.Title>Chicken Biryani</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Buy Now!</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={5} md={3} lg={2} className="p-0">
            <Card style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src="https://t3.ftcdn.net/jpg/02/71/89/10/240_F_271891053_cuzs6l2mWLfJQxawShjA46W4XaED9yhb.jpg"
              />
              <Card.Body>
                <Card.Title>Chicken Biryani</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Buy Now!</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={5} md={3} lg={2} className="p-0">
            <Card style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src="https://t4.ftcdn.net/jpg/01/17/35/31/240_F_117353118_AvOU3HkypQkWVXk7uMagcHTXQbpJwQ9x.jpg"
              />
              <Card.Body>
                <Card.Title>Chicken Biryani</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Buy Now!</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={5} md={3} lg={2} className="p-0">
            <Card style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src="https://t3.ftcdn.net/jpg/01/09/36/28/240_F_109362819_xQOWZnMKazTy9PMsYRcBH3CUtgZEmG2Z.jpg"
              />
              <Card.Body>
                <Card.Title>Chicken Biryani</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Buy Now!</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={5} md={3} lg={2} className="p-0">
            <Card style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src="https://t4.ftcdn.net/jpg/00/49/08/33/240_F_49083396_HrRzwkvT1yMZtbQVOwm6Sqr1vIhVUS8b.jpg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Buy Now!</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={5} md={3} lg={2} className="p-0">
            <Card style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src="https://t4.ftcdn.net/jpg/00/93/67/39/240_F_93673923_JLLFDXeN8VGcANkpv3v9iubvg4Dposvx.jpg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Buy Now!</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={5} md={3} lg={2} className="p-0">
            <Card style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src="https://t3.ftcdn.net/jpg/02/16/12/54/240_F_216125493_X8IK6vrdb0MabTE6nc8IcxHPe6zgYFRv.jpg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Buy Now!</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={5} md={3} lg={2} className="p-0">
            <Card style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src="https://t3.ftcdn.net/jpg/01/02/45/24/240_F_102452448_WDysmJoua3mX0RkYL5wD2m4NVzZjNUPj.jpg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Buy Now!</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Row>
    </div>
  );
}

export default Biryani;
