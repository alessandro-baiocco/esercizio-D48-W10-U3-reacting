import { useEffect, useState } from "react";
import { Alert, Card, Col, Container, ListGroup, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CommentZone from "./CommentZone";
import FormComment from "./FormComment";

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [alert, setAlert] = useState(true);
  const [status, setStatus] = useState(200);

  const ricerca = async () => {
    const request = await fetch(`https://www.omdbapi.com/?apikey=20548f09&i=${params.id}`);
    if (request.ok) {
      const data = await request.json();
      setMovie(data);
      setLoading(false);
    } else {
      setError(true);
      setAlert(true);
      setLoading(false);
      setStatus(request.status);
    }
  };

  useEffect(() => {
    ricerca();
    console.log(params);
  }, []);
  return (
    <>
      {error && alert && (
        <Alert variant="danger" onClose={() => setAlert(false)} dismissible className="mb-5">
          <Alert.Heading>oh no</Alert.Heading>
          <p>non è stato possibile reperire le info di questo film status code : {status}</p>
        </Alert>
      )}

      {loading && <Spinner animation="grow" variant="info" className="display-5" />}
      {/* {movie && (
        <img
          src={movie.Poster}
          alt={movie.Title}
          height={"150px"}
          width={"100%"}
          style={{ objectFit: "cover" }}
          className="mb-3"
        />
      )} */}
      {movie && (
        <Container className="d-flex ">
          <Card style={{ maxWidth: "30%" }}>
            <Card.Body>
              <Card.Title>{movie.Title}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <span className="fw-bold">DESCRIPTION</span> <br />
                {movie.Plot}
              </ListGroup.Item>
              <ListGroup.Item>
                <span className="fw-bold">Language : </span> {movie.Language}
              </ListGroup.Item>
              <ListGroup.Item>
                <span className="fw-bold">RELEASED ON : </span>
                {movie.Released}
              </ListGroup.Item>
              <ListGroup.Item>
                <span className="fw-bold">DIRECTED BY : </span>
                {movie.Director}
              </ListGroup.Item>
              <ListGroup.Item>
                <span className="fw-bold">WRITED BY : </span>
                {movie.Writer}
              </ListGroup.Item>
              <ListGroup.Item>
                <span className="fw-bold">DURATION : </span>
                {movie.Runtime}
              </ListGroup.Item>
              <ListGroup.Item>{movie.Year}</ListGroup.Item>
              <ListGroup.Item>
                <span className="fw-bold">GENRE : </span>
                {movie.Genre}
              </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link variant="success">Guarda</Card.Link>
              <Card.Link variant="info">Compra</Card.Link>
            </Card.Body>
          </Card>
          <img src={movie.Poster} alt={movie.Title} />
          <CommentZone asinId={params.id} />
        </Container>
      )}
    </>
  );
};

export default MovieDetails;
