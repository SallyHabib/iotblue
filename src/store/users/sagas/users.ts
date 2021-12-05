import { put } from "redux-saga/effects";
import axios from "axios";
import {
  CREATE_USER_SUCCESS,
  GET_USERS_SUCCESS,
  GET_USER_DETAILS_SUCCESS,
} from "../actions";

const headers = {
  "app-id": "61a96330663476b5ce42d3bd",
};

export function* getUsers(action: any) {
  let data = null;
  console.log(action.payload);
  yield axios
    .get(`https://dummyapi.io/data/v1/user?page=${action.payload.offset}`, {
      headers,
    })
    .then(function (response) {
      // handle success
      data = response.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });

  if (data) {
    yield put({ type: GET_USERS_SUCCESS, payload: data });
  }
}

export function* getUserDetails(action: any) {
  let userDetails = null;
  yield axios
    .get(`https://dummyapi.io/data/v1/user/${action.payload.id}`, { headers })
    .then(function (response) {
      // handle success
      userDetails = response.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });

  if (userDetails) {
    yield put({ type: GET_USER_DETAILS_SUCCESS, payload: userDetails });
  }
}

export function* createUser(action: any) {
  let data = JSON.stringify(action.payload);
 yield axios.post("https://dummyapi.io/data/v1/user/create", {  headers, data })
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });

  yield put({ type: CREATE_USER_SUCCESS, payload: {} });
}
