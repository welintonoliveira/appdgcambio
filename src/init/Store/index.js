import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import Reducers from "../../Reducers";

const Store = createStore(Reducers, applyMiddleware(ReduxThunk));

export default Store;