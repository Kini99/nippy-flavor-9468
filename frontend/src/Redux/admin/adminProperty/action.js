import axios from "axios";
import {
  ADD_REQUEST_SUCCESS,
  DELETE_REQUEST_SUCCESS,
  GET_REQUEST_SUCCESS,
  PATCH_REQUEST_SUCCESS,
  REQUEST_LOADING,
  REQUEST_PENDING,
} from "./actionType";

//GET TOKEN FROM LOCAL STOREGE

// const token = localStorage.getItem("adminToken");

//GET DATA FUNCTION FOR GETTING THE DATA TO FRONTEND

export const getData = (dispatch) => {
  dispatch({ type: REQUEST_LOADING });

  axios
    .get(`https://project-backend-t6y7.onrender.com/products`)
    .then((res) => {
      dispatch({ type: GET_REQUEST_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: REQUEST_PENDING });
    });
};

//ADD PRODUCT FUNCTION TO ADD DATA TO DATABASE

export const addProduct = (payload) => (dispatch) => {
  dispatch({ type: REQUEST_LOADING });
  //   console.log(payload);
  axios
    .post(
      `https://project-backend-t6y7.onrender.com/products`,
      payload
      //   { headers: { Authorization: `${token}` } }
    )
    .then((res) => {
      //   console.log(res.data);
      dispatch({ type: ADD_REQUEST_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: REQUEST_PENDING });
    });
};

//EDIT PRODUCT FUNCTION TO UPDATE THE DATA OF DATABASE

export const editProduct = (payload, id) => (dispatch) => {
  dispatch({ type: REQUEST_LOADING });
  //   console.log(payload, id);

  axios
    .patch(
      `https://project-backend-t6y7.onrender.com/products/${id}`,
      payload
      //   { headers: { Authorization: `${token}` } }
    )
    .then((res) => {
      //   console.log(res.data);
      dispatch({ type: PATCH_REQUEST_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: REQUEST_PENDING });
    });
};

//DELETE PRODUCT FUNCTION TO DELETE THE DATA FROM DATABASE

export const deleteProduct = (id) => (dispatch) => {
  dispatch({ type: REQUEST_LOADING });
  //   console.log(id);
  //   console.log(token)
  axios
    .delete(
      `https://project-backend-t6y7.onrender.com/products/${id}`

      //   { headers: { Authorization: token } }
    )
    .then((res) => {
      console.log(res.data);
      dispatch({ type: DELETE_REQUEST_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: REQUEST_PENDING });
    });
};
