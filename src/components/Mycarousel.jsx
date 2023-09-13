import { Alert, Container, Spinner, Carousel, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyCarousel = (props) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [alert, setAlert] = useState(true);
  const [status, setStatus] = useState(200);
  const [data, setData] = useState();

  const close = () => {
    setAlert(false);
  };
  const request = async () => {
    try {
      const request = await fetch(`https://www.omdbapi.com/?apikey=20548f09&s=${props.search}`);
      console.log(request);
      if (request.ok) {
        const data = await request.json();
        setData(data.Search);
        setLoading(false);
      } else {
        setError(true);
        setStatus(request.status);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };
  // componentDidMount = () => {
  //   this.request();
  // };
  useEffect(() => {
    request();
  }, []);

  return (
    <Container className="mt-5">
      {error && alert && (
        <Alert variant="danger" dismissible onClose={() => close()}>
          <Alert.Heading>oggi si guarda il muro!</Alert.Heading>
          <p>qualcosa è andato storto durante il caricamento dei film! status code : {status}</p>
        </Alert>
      )}
      {loading && <Spinner animation="grow" variant="info" />}
      <h2 className="text-light fs-4 mb-3">{props.title}</h2>
      <Carousel>
        <Carousel.Item className="gx-0">
          <Row className="gx-1">
            {data &&
              data.slice(0, 6).map((film, index) => (
                <Col xs={6} md={4} lg={2} key={`film-${index}`}>
                  <img src={film.Poster} alt={film.Title} height={"200px"} width={"100%"} />
                  <Link to={`/MovieDetails/${film.imdbID}`} filmId={film.imdbID}>
                    <button className="text-light">guarda</button>
                  </Link>
                </Col>
              ))}
          </Row>
        </Carousel.Item>
        <Carousel.Item className="gx-0">
          <Row className="gx-1">
            {data &&
              data.slice(4, 11).map((film, index) => (
                <Col xs={6} md={4} lg={2} key={`film2-${index + 6}`}>
                  <img src={film.Poster} alt={film.Title} height={"200px"} width={"100%"} />
                  <Link to={`/MovieDetails/${film.imdbID}`}>
                    <button className="text-light">guarda</button>
                  </Link>
                </Col>
              ))}
          </Row>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default MyCarousel;
