// packages
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// react-bootstrap
import { Form, Button, InputGroup } from "react-bootstrap";
import { Search, Film } from "react-bootstrap-icons";

// components
import "../styles/home.scss";
import "../styles/font.scss";

export default function Home() {
  const history = useHistory();

  const [searchState, setSearchState] = useState({
    name: "",
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

  return (
    <div className="outer">
      <div className="centerDiv text-center">
        <h4 className=" homeTitle goldman">
          <Film />
          &nbsp;Movie DB
        </h4>
        <small className="nameClass">by: naufalg</small>
        <Form
          autoComplete="off"
          onSubmit={(event) => {
            searchMovie(searchState.name, event, history);
          }}
        >
          <InputGroup>
            <Form.Control
              className="lato searchInput"
              name="name"
              placeholder="Search Movie"
              onChange={(event) => changeSearch(event)}
              value={searchState.name}
              type="text"
              size=""
            />
            <InputGroup.Append>
              <Button variant="secondary">
                <Search className="m-auto" size={20} />
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
      </div>
    </div>
  );
}
