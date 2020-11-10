import React, { useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";

// react bootstrap
import { Search } from "react-bootstrap-icons";
import {
  Navbar,
  Nav,
  Form,
  Container,
  InputGroup,
  Modal,
  Spinner,
} from "react-bootstrap";
import { Film } from "react-bootstrap-icons";

// components
import "../../styles/navbar.scss";

export default function NavbarBootstrap() {
  // req
  const history = useHistory();
  const params = useParams();

  // search movie
  const searchInput = params.search || "";

  const [searchState, setSearchState] = useState({
    name: searchInput,
  });

  const changeSearch = (event) => {
    setSearchState({
      ...searchState,
      [event.target.name]: event.target.value,
    });
  };

  const searchMovie = (value, event, history) => {
    event.preventDefault();
    history.push(`/search/${value}/1`);
  };

  // loading modal variables
  const [showLoading, setShowLoading] = useState(false);
  const handleClose = () => setShowLoading(false);
  // const handleShow = () => setShowLoading(true);

  return (
    <div>
      <Navbar className="lato shadowNavbar" fixed="top" bg="light" expand="lg">
        {/* loading modal */}
        <Modal
          style={{ position: "fixed", left: "25%", top: "25%" }}
          show={showLoading}
          onHide={handleClose}
          className="w-50"
        >
          <Modal.Header className="text-center">
            <Modal.Title className="text-center">Please Wait...</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <Spinner className="mx-auto " animation="border" variant="info" />
          </Modal.Body>
        </Modal>
        {/* loading modal */}

        <Container>
          <Navbar.Brand
            onClick={() => {
              setShowLoading(true);
              window.location.href = `/`;
            }}
            className="NavBrand goldman"
          >
            <Link to="/">
              <Film size={30} />
              &nbsp;&nbsp;MovieDB
            </Link>
          </Navbar.Brand>{" "}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto my-1">
              <Form
                autoComplete="off"
                onSubmit={(event) => {
                  searchMovie(searchState.name, event, history);
                }}
                inline
              >
                <InputGroup className="search-group mx-sm-auto mx-md-auto">
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <Search size={15} />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    size="sm"
                    className="input-search nunito"
                    name="name"
                    type="text"
                    placeholder=""
                    //   className="mr-sm-2"
                    onChange={(event) => changeSearch(event)}
                    value={searchState.name}
                  />
                </InputGroup>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
