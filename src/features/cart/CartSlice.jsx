

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItem: [],
    numberOfItem: 9,
    total: 0,
    isLoading: true
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducer: {

    }
})

export default cartSlice.reducer

// export const { addToCart } = cartSlice.actions
