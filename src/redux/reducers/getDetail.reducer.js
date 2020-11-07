import {
  GET_DETAIL_REQUEST,
  GET_DETAIL_SUCCESS,
  GET_DETAIL_FAILED,
} from "../actions/getDetail.action";

const initialDetailState = {
  data: [],
  isLoading: false,
  error: null,
  isError: null,
};
const getDetailReducer = (state = initialDetailState, action) => {
  switch (action.type) {
    case GET_DETAIL_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: null,
        isError: false,
      };
    case GET_DETAIL_FAILED:
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

export default getDetailReducer;