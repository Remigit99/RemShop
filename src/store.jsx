import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./features/cart/CartSlice";
// import ModalSlice from "./features/modal/ModalSlice";

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        // modal: ModalSlice,
    }
})



