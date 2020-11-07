import {
  GET_SEARCH_REQUEST,
  GET_SEARCH_SUCCESS,
  GET_SEARCH_FAILED,
} from "../actions/getSearch.action";

const initialSearchState = {
  data: [],
  isLoading: false,
  error: null,
  isError: false,
};
const getSearchReducer = (state = initialSearchState, action) => {
  switch (action.type) {
    case GET_SEARCH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_SEARCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: null,
        isError: false,
      };
    case GET_SEARCH_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        isError: true,
      };
    default:
      return state;
  }
};

export default getSearchReducer;
