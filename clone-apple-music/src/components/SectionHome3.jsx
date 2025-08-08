import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SectionHome3 = () => {
  return (
    <Container fluid>
      <Row className="mt-5">
        <Col xs={12}>
          <div>
            <h4 className="fs-5">Altro da esplorare</h4>
          </div>
        </Col>
      </Row>
      <Row className=" mt-2 p-3 g-3">
        <Col xs={12} md={6} lg={4}>
          <button className="buttonExplore">Esplora per genere</button>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <button className="buttonExplore">Decenni</button>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <button className="buttonExplore">Attività e stati d'animo</button>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <button className="buttonExplore">Worldwide</button>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <button className="buttonExplore">Classifiche</button>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <button className="buttonExplore">Audio Spaziale</button>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <button className="buttonExplore">Video musicali</button>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <button className="buttonExplore">Nuovi Artisti</button>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <button className="buttonExplore">Hit del passato</button>
        </Col>
      </Row>
    </Container>
  );
};

export default SectionHome3;
