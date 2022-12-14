import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "./isLoading.slice";

/*** */
export const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    setProducts: (state, action) => {
      const products = action.payload;
      return products;
    },
  },
});

/*** Get  */
export const getProductsThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get("https://ecommerce-api-react.herokuapp.com/api/v1/products")
    .then((res) => dispatch(setProducts(res.data.data.products)))
    .catch((error) => console.log(error.response))
    .finally(() => dispatch(setIsLoading(false)));
};

/*** Filter */
export const filterTitleThunk = (searchValue) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(
      `https://ecommerce-api-react.herokuapp.com/api/v1/products?query=${searchValue}` 
    )
    .then((res) => dispatch(setProducts(res.data.data.products)))
    .catch((error) => console.log(error.response))
    .finally(() => dispatch(setIsLoading(false)));
};

/*** Category */
export const filterCategoryThunk = (id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(
      `https://ecommerce-api-react.herokuapp.com/api/v1/products/?category=${id}`
    )
    .then((res) => dispatch(setProducts(res.data.data.products)))
    .catch((error) => console.log(error.response))
    .finally(() => dispatch(setIsLoading(false)));
};

/*** */
export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
