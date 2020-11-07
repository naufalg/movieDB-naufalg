import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Search, Cart2 } from "react-bootstrap-icons";
import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
  InputGroup,
  Modal,
  Spinner,
} from "react-bootstrap";
import { Film } from "react-bootstrap-icons";

// redux
// import { getSearchActions } from "../../redux/actions/search.action";

// components
import reactWord from "../assets/react-word.png";

import "../../styles/navbar.scss";

export default function NavbarBootstrap() {
  const history = useHistory();
  const dispatch = useDispatch();

  // const userData = useSelector((state) => state.userProfileReducer);
  // console.log("userId", userData);

  const [searchState, setSearchState] = useState({
    name: "",
  });

  const changeSearch = (event) => {
    // console.log("event", event);
    setSearchState({
      ...searchState,
      [event.target.name]: event.target.value,
    });
  };

  const searchMovie = (value, event, history) => {
    console.log("value", value);
    event.preventDefault();
    history.push(`/search/${value}/1`);
  };

  // loading modal variables
  const [showLoading, setShowLoading] = useState(false);
  const handleClose = () => setShowLoading(false);
  const handleShow = () => setShowLoading(true);
  // loading modal variables

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
          <Link
            onClick={() => {
              setShowLoading(true);
              window.location.href = `/`;
            }}
            // to="/"
          >
            <Navbar.Brand className="NavBrand goldman">
              <Film size={30} />
              &nbsp;&nbsp;MovieDB
            </Navbar.Brand>{" "}
          </Link>
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
                  <FormControl
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
