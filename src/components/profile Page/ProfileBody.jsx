import { Container, Dropdown } from "react-bootstrap";

const ProfileBody = () => {
  return (
    <main className="text-color-gray d-flex justify-content-center ps-5 pb-5 pt-3 mb-5 mt-3">
      <div>
        <Container className="d-flex align-content-center align-items-center border-bottom border-secondary">
          <h1 className="fs-1V2 p-0 text-white fw-normal">Edit Profile</h1>
        </Container>
        <Container className="d-flex border-bottom border-secondary my-2 py-2">
          <div className="d-flex img-container ">
            <img
              src="https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt=""
              className="img-fluid"
            />
          </div>
          <div>
            <Container className="d-flex flex-column align-item-center align-content-center border-bottom border-secondary">
              <input
                type="text "
                className="bg-secondary border border-0 text-light py-2 ps-2 fw-bold"
                value="Strive student"
              />
              <div className="mb-3">
                <p className="mb-0 mt-3">Language:</p>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="dark"
                    id="dropdown-basic"
                    className="p-0 px-2 text-light border border-light rounded-0 bg-dark"
                  >
                    English
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="bg-dark text-light">
                    <Dropdown.Item href="#/action-1" className="text-light">
                      ITALIAN
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2" className="text-light">
                      SPANISH
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Container>
            <Container className=" d-flex flex-column align-items-start border-bottom border-secondary my-3 py-3">
              <h2 className="fs-4">Maturity Settings</h2>
              <button className="bg-color-lightGray border border-0 text-light px-3 py-1 ps-2 my-1 fw-bold">
                All Maturity Ratings
              </button>
              <p className="my-3">Show titles all maturity ratings for this profile</p>
              <button className="border border-secondary text-secondary py-1 px-4">EDIT</button>
            </Container>
            <Container className="d-flex flex-column align-content-center align-items-start my-3 py-3">
              <h2 className="fs-4">Autoplay controls</h2>
              <div className="d-flex align-items-center">
                <input type="checkbox" className="form-check-input border border-secondary p-3 me-2" /> Autoplay next
                episode in a series on all devices
              </div>
              <div className="d-flex align-items-center">
                <input type="checkbox" className="form-check-input border border-secondary p-3 me-2" /> Autoplay prewiew
                while browsing on all devices
              </div>
            </Container>
          </div>
        </Container>
        <div className="container d-flex align-content-center align-items-center my-3 py-3">
          <button className="bg-light border border-secondary text-secondary py-1 px-4 fs-4 mx-3">Save</button>
          <button className="border border-secondary text-secondary py-1 px-4 fs-4 mx-3">Cancel</button>
          <button className="border border-secondary text-secondary py-1 px-4 fs-4 mx-3">Delete Profile</button>
        </div>
      </div>
    </main>
  );
};

export default ProfileBody;
