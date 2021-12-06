import { put } from "redux-saga/effects";
import axios, { AxiosRequestConfig } from "axios";
import {
  CREATE_USER_SUCCESS,
  GET_USERS_SUCCESS,
  GET_USER_DETAILS_SUCCESS,
} from "../actions";

console.log(process.env.REACT_APP_APPID)
const headers = {
  "app-id": process.env.REACT_APP_APPID!
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
  let response = null;
  var config: AxiosRequestConfig = {
    method: "post",
    url: "https://dummyapi.io/data/v1/user/create",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    data: data,
  };

  yield axios(config)
    .then(function (response) {
      response = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });

  yield put({ type: CREATE_USER_SUCCESS, payload: response });
}
