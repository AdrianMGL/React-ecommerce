import { configureStore } from "@reduxjs/toolkit";
import cartsSlice from "./slices/carts.slice";
import isLoadingSlice from "./slices/isLoading.slice";
import productsSlice from "./slices/products.slice";
import purchasesSlice from "./slices/purchases.slice";

export default configureStore({
  reducer: {
    isLoading: isLoadingSlice,
    products: productsSlice,
    purchases: purchasesSlice,
    carts: cartsSlice,
  },
});
