import { createSlice, nanoid ,current} from "@reduxjs/toolkit";

const initialState = {
  todos: JSON.parse(localStorage.getItem("card1Todos")) || [],
};

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
      localStorage.setItem("card1Todos",card1todos);
    },

    removeCard1Todo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      let card1todos = JSON.stringify(current(state).todos);
      localStorage.setItem("card1Todos",card1todos);
    },
  },
});

export const { addCard1Todo, removeCard1Todo } = card1Slice.actions;

export default card1Slice.reducer;
