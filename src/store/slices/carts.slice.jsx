import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfig from "../../utils/getConfig";
import { setIsLoading } from "./isLoading.slice";

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

/** Get Carts */
export const getCartsThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get("https://ecommerce-api-react.herokuapp.com/api/v1/cart", getConfig())
    .then((res) => dispatch(setCarts(res.data.data.cart)))
    .finally(() => dispatch(setIsLoading(false)));
};

/** Add Cart*/
export const addCartThunk = (productId, quantity) => {
  return (dispatch) => {
    const item = { id: productId, quantity };
    dispatch(setIsLoading(true));
    return axios
      .post(
        "https://ecommerce-api-react.herokuapp.com/api/v1/cart",
        item,
        getConfig()
      )
      .then(() => dispatch(getCartsThunk()))
      .finally(() => dispatch(setIsLoading(false)));
  };
};

/** Delete Carts */
export const deleteCartThunk = (productId) => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    return axios
      .delete(
        `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${productId}`,
        getConfig()
      )
      .then(() => dispatch(getCartsThunk()))
      .finally(() => setIsLoading(false));
  };
};

export const { setCarts } = cartsSlice.actions;

export default cartsSlice.reducer;
