import { call, cancel, fork, put, take } from "redux-saga/effects";
import axios from "axios";
import { history } from "../..";
import { GET_USERS_SUCCESS } from "../actions";

const headers = {
  "app-id": "61a96330663476b5ce42d3bd",
};
export function* getUsers() {
  let data = null;
  yield axios
    .get("https://dummyapi.io/data/v1/user", { headers })
    .then(function (response) {
      // handle success
      data = response.data.data;
      console.log(response.data.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });

  if (data) {
    console.log("heee")
    yield put({ type: GET_USERS_SUCCESS, payload: data });
  }
}
