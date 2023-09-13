import { Col, Container, Row } from "react-bootstrap";

const MyFooter = () => {
  return (
    <footer>
      <Container className="d-flex justify-content-center mb-0 mt-5 px-5">
        <Container style={{ color: "gray" }}>
          <Row className="row text-light">
            <Col>
              <i className="mx-2 bi bi-facebook"></i>
              <i className="mx-2 bi bi-instagram"></i>
              <i className="mx-2 bi bi-twitter"></i>
              <i className="mx-2 bi bi-youtube"></i>
            </Col>
          </Row>
          <Row className="text-light">
            <div className="d-flex"></div>
            <Col xs={6} lg={3}>
              <p className="my-0">Audio and Subtitles</p>
              <p className="my-0">Media Center</p>
              <p className="my-0">Privacy</p>
              <p className="my-0">Concact US</p>
            </Col>
            <Col xs={6} lg={3}>
              <p className="my-0">Audio Description</p>
              <p className="my-0">investor Relaction</p>
              <p className="my-0">Legal notices</p>
            </Col>
            <Col xs={6} lg={3} className="mt-2">
              <p className="my-0">Help center</p>
              <p className="my-0">Jobs</p>
              <p className="my-0">cookies Preferences</p>
            </Col>
            <Col xs={6} lg={3} className="mt-2">
              <p className="my-0">Gift cards</p>
              <p className="my-0">terms of use</p>
              <p className="my-0">corporate information</p>
            </Col>
          </Row>
          <Col className="mt-2">
            <button className="border border-secondary text-secondary py-1 px-4">EDIT</button>
          </Col>
          <div>
            <p className="mt-3 mb-0" style={{ fontSize: "15px" }}>
              © 1997-2016 netflix.inc
            </p>
          </div>
        </Container>
      </Container>
    </footer>
  );
};

export default MyFooter;
