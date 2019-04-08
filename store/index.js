import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import ticker from '../store/reducers/tickerReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(
    ticker,
    composeEnhancers(applyMiddleware(thunk))
);
export default Store;