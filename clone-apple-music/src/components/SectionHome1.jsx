import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const SectionHome1 = () => {
  return (
    <Container fluid>
      <div className="box-title mt-3">
        <h2>Novità</h2>
      </div>
      <Row className=" flex-nowrap overflow-x-auto mt-4 g-3 p-5 row-songs">
        <Col xs={12} md={6}>
          <div className="d-flex flex-column">
            <div className="box-title">
              <h6>NUOVA STAZIONE RADIO</h6>
            </div>
            <p>Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill</p>
            <img
              src="/images/1a.png"
              alt="immagine di copertina"
              className="img-fluid img-editRadio"
            />
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="d-flex flex-column">
            <div className="box-title">
              <h6>NUOVA STAZIONE RADIO</h6>
            </div>
            <p>Ecco la nuova casa della musica latina</p>
            <img
              src="/images/1b.png"
              alt="immagine di copertina"
              className="img-fluid img-editRadio"
            />
          </div>
        </Col>
      </Row>

      <div className="mt-5 mb-3 box-title">
        <h5>Nuove episodi radio</h5>
      </div>
      <Row className=" flex-nowrap overflow-x-auto p-5 row-songs">
        <Col xs={6} md={4} lg={3}>
          <Card className="h-100 " id="card-song">
            <Card.Img
              variant="top"
              src="/images/2a.png"
              className="img-fluid img-song"
            />
            <Card.Body className="text-center bg-dark text-light">
              <Card.Title className="fs-6">Prologo con Abùelo</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={4} lg={3}>
          <Card className="h-100 " id="card-song">
            <Card.Img
              variant="top"
              src="/images/2b.png"
              className="img-fluid img-song"
            />
            <Card.Body className="text-center bg-dark text-light">
              <Card.Title className="fs-6">The Wandere</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={4} lg={3}>
          <Card className="h-100 " id="card-song">
            <Card.Img
              variant="top"
              src="/images/2c.png"
              className="img-fluid img-song"
            />
            <Card.Body className="text-center bg-dark text-light">
              <Card.Title className="fs-6">
                Michael Bublé & Carly Pearce
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={4} lg={3}>
          <Card className="h-100 " id="card-song">
            <Card.Img
              variant="top"
              src="/images/2e.png"
              className="img-fluid img-song"
            />
            <Card.Body className="text-center bg-dark text-light">
              <Card.Title className="fs-6">
                Stephan Moccio: The Zane Lowe Interview
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={4} lg={3}>
          <Card className="h-100 " id="card-song">
            <Card.Img
              variant="top"
              src="/images/2f.png"
              className="img-fluid img-song"
            />
            <Card.Body className="text-center bg-dark text-light">
              <Card.Title className="fs-6">
                Chart Spotlight: Julia Michaels
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SectionHome1;
