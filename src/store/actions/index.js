import axios from "axios";
import { FETCH_USER, GET_STREAM } from "./types";

export const fetchUser = () => async (dispatch) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
  };
  const res = await axios.get("/auth/getUser", headers);
  console.log("reducer", res);
  dispatch({
    type: FETCH_USER,
    payload: res.data,
  });
};

export const getStream = (payload) => {
  return {
    type: GET_STREAM,
    payload,
  };
};
