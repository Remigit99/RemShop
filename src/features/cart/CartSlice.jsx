

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    // cartItem,
    numberOfItems: 0,
    total: 0,
}

const cartSlice = createSlice({
    name: cart,
    initialState,
    reducer: {

    }
})

export default cartSlice.reducer

// export const { cartItems, numberOfItems, total } = cartSlice.actions
