import { Col, Container, Row } from "react-bootstrap";

const SettingsBody = () => {
  return (
    <main className="bg-light">
      <div className="d-flex justify-content-center ">
        <Container className="d-flex flex-column mx-5">
          <Row className="col-4">
            <h1>Account</h1>
          </Row>
          <Row className=" border-bottom border-secondary">
            <Col className="col-12 col-lg-4 d-flex flex-lg-column">
              <h2 className="fs-5 me-3 my-0">MEMBERSHIP & BILLING</h2>
              <button className="px-3 bg-gradient-lightGray border border-0" style={{ maxWidth: "300px" }}>
                Cancel Membership
              </button>
            </Col>
            <Col xs={12} lg={8}>
              <div className="d-flex flex-column border-bottom border-secondary">
                <div className="d-flex justify-content-between">
                  <p>student@strive.shool</p>
                  <a href="#">Change account email</a>
                </div>
                <div className="d-flex justify-content-between">
                  <p>password : ***********</p>
                  <a href="#">Change password</a>
                </div>
                <div className="d-flex justify-content-between">
                  <p>phone: 321 044 1279</p>
                  <a href="#">change phone number</a>
                </div>
              </div>
              <div className="d-flex justify-content-between flex-column flex-md-row">
                <div className="d-flex">
                  <i className="bi bi-paypal"></i>
                  <p className="ms-1 fw-bold fst-italic mx-2">PayPal</p>
                  <div>
                    <p>admin@strive.school</p>
                  </div>
                </div>
                <div className="d-flex flex-column">
                  <a href="#">update payment info</a>
                  <div className="d-flex justify-content-md-end justify-content-start">
                    <a href="#">Billing details</a>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column align-items-md-end align-item-start">
                <a href="#">reedem gift card or promo code</a>
                <a href="#">Where to buy gift cards</a>
              </div>
            </Col>
          </Row>
          <Row className=" border-bottom border-secondary">
            <Col xs={12} lg={8}>
              <h3>PLAN DETAILS</h3>
            </Col>
            <Col className="col-lg-8">
              <div className="d-flex justify-content-between flex-column flex-md-row">
                <div className="d-flex me-5 align-items-center">
                  <p className="my-2 me-2">premium</p>
                  <button className="px-2 bg-light border border-2 border-dark">ULTRA HD</button>
                </div>
                <div className="d-flex align-items-center">
                  <a href="#">Change Plan</a>
                </div>
              </div>
            </Col>
          </Row>
          <Row className=" border-bottom border-secondary">
            <Col xs={12} lg={4} className="my-3">
              <h3>SETTINGS</h3>
            </Col>
            <Col xs={12} lg={4} className="my-3">
              <div>
                <a href="#">Parental Controls</a>
              </div>
              <div>
                <a href="#">Test Partecipation </a>
              </div>
              <div>
                <a href="#">Manage download device</a>
              </div>
              <div>
                <a href="#">Activate a device</a>
              </div>
              <div>
                <a href="#">Recent device streaming activity</a>
              </div>
              <div>
                <a href="#">Sign out of all devices</a>
              </div>
            </Col>
          </Row>
          <Row className=" border-bottom border-secondary">
            <Col xs={12} lg={4}>
              <h3>MY PROFILE</h3>
            </Col>
            <Col xs={12} lg={8}>
              <div className="d-flex justify-content-between flex-column flex-md-row">
                <div className="d-flex img-sett-container align-items-center">
                  <img
                    src="https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    alt=""
                    className="img-fluid me-2"
                    width="60px"
                  />
                  <p className="my-0">Strive Student</p>
                </div>
                <div className="d-flex flex-column">
                  <a href="#">Manage Profiles</a>
                  <a href="#">add profiles email</a>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="">
            <Col xs={12} lg={4} className="d-none d-lg-block"></Col>
            <Col xs={12} lg={8}>
              <Row className="">
                <Col className="col-12 col-lg-6">
                  <a href="#" className="d-block">
                    Language
                  </a>
                  <a href="#" className="d-block">
                    Payback settings
                  </a>
                  <a href="#" className="d-block">
                    Subtitle apperance
                  </a>
                </Col>
                <Col className="col-12 col-lg-6">
                  <a href="#" className="d-block">
                    Viewing activity
                  </a>
                  <a href="#" className="d-block">
                    Ratings
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
};

export default SettingsBody;
