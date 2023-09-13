import { Container, Dropdown } from "react-bootstrap";

const MyHeader = () => {
  return (
    <Container className="my-4 bg-transparent">
      <Container className="d-flex align-content-center align-items-center">
        <h1 className="text-light">TV Shows</h1>
        <Dropdown>
          <Dropdown.Toggle variant="dark" id="dropdown-basic" className="ms-3 text-light border border-light">
            Genres
          </Dropdown.Toggle>

          <Dropdown.Menu className="bg-dark">
            <Dropdown.Item href="#/action-1" className="text-light">
              Action
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2" className="text-light">
              magic
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3" className="text-light">
              horror
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <div className="d-flex align-content-center align-items-center ms-auto">
          <button className="border border-light">
            <i className="bi bi-list text-light"></i>
          </button>
          <button className="border border-light">
            <i className="bi bi-grid-fill text-light"></i>
          </button>
        </div>
      </Container>
    </Container>
  );
};

export default MyHeader;
