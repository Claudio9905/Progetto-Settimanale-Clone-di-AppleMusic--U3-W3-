import { useDispatch, useSelector } from "react-redux";
import ListGroup from "react-bootstrap/ListGroup";
import { Row, Col, Container } from "react-bootstrap";
// import { removeFromFavouritesAction } from "../redux/actions";

const Favourites = () => {
  const cardSong = useSelector((state) => {
    return state.card.songFavourite;
  });

  console.log(cardSong);

  const dispatch = useDispatch();

  return (
    <>
      <div className="mt-4 border border-3 border-danger-subtle rounded-3 w-50 text-center ms-3 bg-dark shadow-lg p-2">
        <h1 className="fs-3 text-light">Favourite Songs</h1>
      </div>
      {/* aggiungo l'azienda che ho selezionate per inserirlo nella lista dei preferiti */}
      <Container fluid>
        <Row className="g-2">
          <Col xs="12">
            <ListGroup>
              <ListGroup.Item>{cardSong.cover_medium}</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Favourites;
