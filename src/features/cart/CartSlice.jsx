

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItem: [],
    numberOfItems: 0,
    total: 0,
    isLoading: true
}

const cartSlice = createSlice({
    name: cart,
    initialState,
    reducers: {

    }
})

export default cartSlice.reducer

// export const { cartItems, numberOfItems, total } = cartSlice.actions
