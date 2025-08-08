import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { GET_CARD } from "../redux/actions";

const SectionHome2 = () => {
  const songs = useSelector((state) => {
    return state.song.content;
  });
  console.log("Songs: ", songs);

  const dispatch = useDispatch();

  return (
    <>
      <Container fluid className="mt-5">
        <div className="box-title mb-3">
          <h4>Nuove Uscite</h4>
        </div>
        <Row className=" overflow-x-auto flex-nowrap p-5 row-songs">
          {songs.map((song) => {
            return (
              <Col xs={6} md={4} lg={3} key={song.id}>
                <Card className="h-100" id="card-song">
                  <Card.Img
                    variant="top"
                    src={song.album.cover_medium}
                    className="img-fluid img-song"
                  />
                  <Card.Body className="text-center bg-dark text-light">
                    <Card.Title className="fs-6">{song.title}</Card.Title>
                    <Card.Text>{song.artist.name}</Card.Text>
                    <Button
                      className="btn btn-danger border border-1 border-light rounded-3"
                      onClick={() => {
                        dispatch({
                          type: GET_CARD,
                          payload: song,
                        });
                      }}
                    >
                      Add to Favourite
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default SectionHome2;
