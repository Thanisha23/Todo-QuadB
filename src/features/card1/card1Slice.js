// card1Slice.js
import { createSlice, nanoid, current } from "@reduxjs/toolkit";

const initialState = {
  todos: JSON.parse(localStorage.getItem("card1Todos")) || [],
};

//reducers for updating the store
export const card1Slice = createSlice({
  name: "cardOne",
  initialState,
  reducers: {
    addCard1Todo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
      let card1todos = JSON.stringify(current(state).todos);
      localStorage.setItem("card1Todos", card1todos);
    },

    removeCard1Todo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      let card1todos = JSON.stringify(current(state).todos);
      localStorage.setItem("card1Todos", card1todos);
    },

    updateCard1Todo: (state, action) => {
      const { id, text } = action.payload;
      const todoIndex = state.todos.findIndex((todo) => todo.id === id);
      if (todoIndex !== -1) {
        state.todos[todoIndex].text = text;
        let card1todos = JSON.stringify(current(state).todos);
        localStorage.setItem("card1Todos", card1todos);
      }
    },
  },
});

export const { addCard1Todo, removeCard1Todo, updateCard1Todo } = card1Slice.actions;

export default card1Slice.reducer;