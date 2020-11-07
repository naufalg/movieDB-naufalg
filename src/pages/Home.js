import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Form, FormControl, Button, InputGroup } from "react-bootstrap";

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
      console.log("value",value);
    event.preventDefault();
    history.push(`/search/${value}/1`);
  };

  return (
    <div>
      <h4>Home Movie DB</h4>
      <form
        autoComplete="off"
        onSubmit={(event) => {
          searchMovie(searchState.name, event, history);
        }}
      >
        <input
          name="name"
          placeholder="search movie"
          onChange={(event) => changeSearch(event)}
          value={searchState.name}
          type="text"
        />
        <button>search</button>
      </form>
    </div>
  );
}
