import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Form, FormControl, Button, InputGroup } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

import "../styles/home.scss";
import "../styles/font.scss";

export default function Home() {
  const history = useHistory();
  const dispatch = useDispatch();

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
    console.log("value", value);
    event.preventDefault();
    history.push(`/search/${value}/1`);
  };

  return (
    <div className="outer">
      <div className="centerDiv text-center">
        <h4 className=" homeTitle goldman">Home Movie DB</h4>
        <small className="nameClass">by: naufalg</small>
        <Form
          autoComplete="off"
          onSubmit={(event) => {
            searchMovie(searchState.name, event, history);
          }}
        >
          <InputGroup>
            <Form.Control
              name="name"
              placeholder="Search Movie"
              onChange={(event) => changeSearch(event)}
              value={searchState.name}
              type="text"
              size="lg"
            />
            <InputGroup.Append>
              <Button variant="secondary">
                <Search className="m-auto" size={30} />
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
      </div>
    </div>
  );
}
