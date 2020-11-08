import axios from "axios";
export const GET_DETAIL_REQUEST = "GET_DETAIL_REQUEST";
export const GET_DETAIL_SUCCESS = "GET_DETAIL_SUCCESS";
export const GET_DETAIL_FAILED = "GET_DETAIL_FAILED";

export const getDetailRequest = () => {
  return {
    type: GET_DETAIL_REQUEST,
  };
};

export const getDetailSuccess = (result) => {
  return {
    type: GET_DETAIL_SUCCESS,
    payload: result,
  };
};

export const getDetailFailed = (error) => {
  return {
    type: GET_DETAIL_FAILED,
    error,
  };
};

export function getDetailActions(id) {
  return function (dispatch) {
    dispatch(getDetailRequest(id));
    console.log("tes action detail");
    // nowPlaying api url
    const movie_id = id;
    // console.log("movie_id", movie_id);
    const api_key = process.env.REACT_APP_OMDB_API_KEY;
    const url1 = `http://www.omdbapi.com/?i=${movie_id}&plot=full&apikey=${api_key}`;
    axios
      .get(url1)
      .then((result) =>
        result.data.Response === "True"
          ? dispatch(getDetailSuccess(result.data))
          : dispatch(getDetailFailed(result))
      )
      .catch((error) => dispatch(getDetailFailed(error)));
  };
}
