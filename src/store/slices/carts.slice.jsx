import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfig from "../../utils/getConfig";
import { setIsLoading } from "./isLoading.slice";

/*** carts Slice */
export const cartsSlice = createSlice({
  name: "carts",
  initialState: [],
  reducers: {
    setCarts: (state, action) => {
      const carts = action.payload;
      return carts;
    },
  },
});

/*** Get Carts */
export const getCartsThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get("https://ecommerce-api-react.herokuapp.com/api/v1/cart", getConfig())
    .then((res) => dispatch(setCarts(res.data.data.cart)))
    .catch((error) => console.log(error.response))
    .finally(() => dispatch(setIsLoading(false)));
};

/*** Add Cart*/
export const addCartThunk = (productCart) => (dispatch) => {
  dispatch(setIsLoading(true));
  dispatch(setIsLoading(true));
  return axios
    .post(
      "https://ecommerce-api-react.herokuapp.com/api/v1/cart",
      productCart,
      getConfig()
    )
    .then(() => dispatch(getCartsThunk()))
    .catch((error) => console.log(error.response))
    .finally(() => dispatch(setIsLoading(false)));
};

/*** Delete Carts */
export const deleteCartThunk = (productId) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .delete(
      `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${productId}`,
      getConfig()
    )
    .then(() => dispatch(getCartsThunk()))
    .catch((error) => console.log(error.response))
    .finally(() => setIsLoading(false));
};

/*** Buy Cart 'add purchases'  */
export const buyCart = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .post(
      "https://ecommerce-api-react.herokuapp.com/api/v1/purchases",
      {},
      getConfig()
    )
    .then(() => dispatch(setCarts([])))
    .finally(() => dispatch(setIsLoading(false)));
};

/*** */
export const { setCarts } = cartsSlice.actions;

export default cartsSlice.reducer;
