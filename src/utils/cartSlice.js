import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items : []
    },
    reducers : {
        addItem : (state,action) => {
            //mutating the state over here 
            state.items.push(action.payload);
        },
        removeItem : (state,action) => {
            //mutating the state over here 
            state.items.pop();
        },
        clearCart : (state,action) => {
            //mutating the state over here 
            state.items = [];
        }
    }
    }
);

export const {addItem,removeItem,clearCart} = cartSlice.actions;

export default cartSlice.reducer;
