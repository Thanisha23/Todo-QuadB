import { createSlice, nanoid, current } from "@reduxjs/toolkit";

const initialState = {
  todos: JSON.parse(localStorage.getItem("card3Todos")) || [],
};

//reducers for updating the store
export const card3Slice = createSlice({
  name: "cardThree",
  initialState,
  reducers: {
    addCard3Todo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
      let card3todos = JSON.stringify(current(state).todos);
      localStorage.setItem("card3Todos", card3todos);
    },
    removeCard3Todo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      let card3todos = JSON.stringify(current(state).todos);
      localStorage.setItem("card3Todos", card3todos);
    },
    updateCard3Todo: (state, action) => {
      const { id, text } = action.payload;
      const todoIndex = state.todos.findIndex((todo) => todo.id === id);
      if (todoIndex !== -1) {
        state.todos[todoIndex].text = text;
        let card3todos = JSON.stringify(current(state).todos);
        localStorage.setItem("card3Todos", card3todos);
      }
    },
  },
});

export const { addCard3Todo, removeCard3Todo,updateCard3Todo } = card3Slice.actions;

export default card3Slice.reducer;
