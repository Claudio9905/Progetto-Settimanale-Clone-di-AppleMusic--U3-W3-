import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <>
      <Container fluid className=" text-light p-3" id="footer-box">
        <Row className="flex-column">
          <Col xs={12}>
            <div>
              <h6>
                Italia|<span>English (UK)</span>{" "}
              </h6>
            </div>
          </Col>
          <Col xs={12}>
            <div>
              <p>
                Copyright 2024 <span>Apple Inc.</span> Tutti i diritti riservati
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div>
              <h6>Condizione dei servizi Internet</h6>
            </div>
          </Col>
          <Col xs={12}>
            <div>
              <h6>Apple Music e privacy</h6>
            </div>
          </Col>
          <Col xs={12}>
            <div>
              <h6>Avviso sui Cookie</h6>
            </div>
          </Col>
          <Col xs={12}>
            <div>
              <h6>Supporto</h6>
            </div>
          </Col>
          <Col xs={12}>
            <div>
              <h6>Feedback</h6>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
