import axios from "axios";
import config from "../../config";
// import { hasError } from "./app";

export const SET_ALL_TICKER = "SET_ALL_TICKER";

export const getAllTicker = data => async dispatch => {
    try {
        let tickers = await axios.get(`${config.api}/api/market/ticker`);
        dispatch(setAllTciker(tickers.data));
    } catch (error) {
        console.log(error)
        // dispatch(hasError(error));
    }
};

export const loadMoreNews = data => dispatch => { };

export const setAllTciker = data => ({
    type: SET_ALL_TICKER,
    payload: data
});
