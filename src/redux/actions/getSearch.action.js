import axios from "axios";
export const GET_SEARCH_REQUEST = "GET_SEARCH_REQUEST";
export const GET_SEARCH_SUCCESS = "GET_SEARCH_SUCCESS";
export const GET_SEARCH_FAILED = "GET_SEARCH_FAILED";

export const getSearchRequest = () => {
  return {
    type: GET_SEARCH_REQUEST,
  };
};

export const getSearchSuccess = (result) => {
  return {
    type: GET_SEARCH_SUCCESS,
    payload: result,
  };
};

export const getSearchFailed = (error) => {
  return {
    type: GET_SEARCH_FAILED,
    error,
  };
};

export function getSearchActions(searchInput, pageInput = 1) {
  return function (dispatch) {
    dispatch(getSearchRequest(searchInput));
    const searchParams = searchInput;
    const pageShow = ``;
    // console.log("movie_id", movie_id);
    const api_key = process.env.REACT_APP_OMDB_API_KEY;
    const url1 = `http://www.omdbapi.com/?apikey=${api_key}&s=${searchParams}&page=${pageInput}`;
    axios
      .get(url1)
      .then((result) =>
        result.data.Response === "True"
          ? dispatch(getSearchSuccess(result.data))
          : dispatch(getSearchFailed(result))
      )
      .catch((error) => dispatch(getSearchFailed(error)));
  };
}
