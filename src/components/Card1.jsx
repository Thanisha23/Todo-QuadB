import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCard1Todo } from "../features/card1/card1Slice";
import Todos1 from "./Todos1";

// eslint-disable-next-line react/display-name, react/prop-types
const Card1 = ({ action, cardName, classAdd }) => {
  const todos = useSelector((state) => state.card1.todos);

  // State for storing the input value
  const [input, setInput] = useState("");

  // Accessing the Redux dispatch function
  const dispatch = useDispatch();

  //function for adding a new todo
  const addTodoHandler = (e) => {
    // Preventing the default form submission
    e.preventDefault();

    // Dispatching the addCard2Todo action with the input value
    dispatch(addCard1Todo(input));

    // Clearing the input field
    setInput("");
  };

  return (
    <div
      onClick={action}
      className={`${classAdd} card bg-purple-300 h-[22rem] md:h-97 w-[19rem] md:w-96 rounded-3xl text-center font-crisis pt-[0.5rem]`}
    >
      <div>
        <h3 className="font-semibold text-lg">{cardName}</h3>
      </div>

      {/* Container for input field and add button */}
      <div className="relative items-center flex flex-wrap gap-1 p-5 md:p-7 pt-2 md:pt-1">
        {/* Taking input from user */}
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="w-[14rem] md:w-72 h-9 md:h-10 text-xl border-2 border-[#d1d3d4] rounded-3xl pl-3 relative focus:outline-none focus:border-[#A971B3]"
          placeholder="Task to be done...."
        />

        {/* Add todo button */}
        <div className="cursor-pointer pt-2">
          <span
            className="material-symbols-outlined text-4xl"
            onClick={addTodoHandler}
          >
            add_circle
          </span>
        </div>
      </div>

      {/* Container for rendering todo items */}
      <div
        id="tasks"
        className="cursor-pointer items-center justify-start h-66 w-full bg-purple-300 overflow-x-auto pb-[10px] px-[1.5rem]"
      >
        <ul>
          {todos.length > 0 ? (
            todos.map((todo) => <Todos1 key={todo.id} todo={todo} />)
          ) : (
            <p className="text-xl font-medium">No Study Tasks added yet.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Card1;
