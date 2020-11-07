import { combineReducers } from "redux";

import getSearchReducer from "./getSearch.reducer";
import getDetailReducer from "./getDetail.reducer";

const rootReducer = combineReducers({ getSearchReducer, getDetailReducer });

export default rootReducer;
