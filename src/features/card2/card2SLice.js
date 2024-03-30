import { createSlice, nanoid, current } from "@reduxjs/toolkit";

const initialState = {
  todos: JSON.parse(localStorage.getItem("card2Todos")) || [],
};

//reducers for updating the store
export const card2Slice = createSlice({
  name: "cardTwo",
  initialState,
  reducers: {
    addCard2Todo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
      let card2todos = JSON.stringify(current(state).todos);
      localStorage.setItem("card2Todos", card2todos);
    },
    removeCard2Todo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      let card2todos = JSON.stringify(current(state).todos);
      localStorage.setItem("card2Todos", card2todos);
    },
    updateCard2Todo: (state, action) => {
        const { id, text } = action.payload;
        const todoIndex = state.todos.findIndex((todo) => todo.id === id);
        if (todoIndex !== -1) {
          state.todos[todoIndex].text = text;
          let card2todos = JSON.stringify(current(state).todos);
          localStorage.setItem("card2Todos", card2todos);
        }
      },


  },
});

export const { addCard2Todo, removeCard2Todo,updateCard2Todo } = card2Slice.actions;

export default card2Slice.reducer;
