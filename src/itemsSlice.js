import { createSlice } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
    name: "items",
    initialState:[],
    reducers: {
        addItem(state, action) {
            return [...state, action.payload];
        },
        checkedItem(state, action) {
            return state.map((item) => item.id === action.payload ? { ...item, checked: !item.checked } : item)
        },
        deleteItem(state, action) {
            return state.filter((item) => item.id !== action.payload)
        },
        editItem: {
            prepare(id, title) {
                return {
                  payload: { id, title },
                };
              },
            reducer(state, action) {
                return state.map((item) => item.id === action.payload.id ? { ...item, title: action.payload.title } : item)
              }
        },
    }
}) 
export const { addItem, checkedItem, deleteItem, editItem } = itemsSlice.actions;

export default itemsSlice.reducer;


