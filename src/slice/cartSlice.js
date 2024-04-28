// slice/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1; // Increase quantity if item already exists
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); // Add as a new item
      }
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
    updateQuantity: (state, action) => {
      const { id, change } = action.payload;
      const itemToUpdate = state.items.find((item) => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.quantity += change;
        if (itemToUpdate.quantity < 1) {
          // Ensure quantity doesn't go below 1
          itemToUpdate.quantity = 1;
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
