/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { removeCard3Todo, updateCard3Todo } from "../features/card3/card3Slice";
import { useState } from "react";
const Todos3 = ({ todo }) => {
  const [input, setInput] = useState(todo.text);
  const [isEditable, setIsEditable] = useState(false);
  const dispatch = useDispatch();

  const handleEditable = () => {
    setIsEditable(true);
  };

  const handleBlurAndUpdate = () => {
    setIsEditable(false);
    if (input !== todo.text) {
      dispatch(updateCard3Todo({ id: todo.id, text: input }));
    }
  };
  return (
    <div
      key={todo.id}
      className="task h-3 mb-2 pt-5 pb-5 pl-3 pr-3 items-center flex justify-between cursor-pointer bg-white rounded-3xl"
    >
      {isEditable ? (
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onBlur={handleBlurAndUpdate}
          autoFocus
        />
      ) : (
        <span id="taskname" className="font-normal">
          {todo.text}
        </span>
      )}

      <div>
        <button onClick={() => dispatch(removeCard3Todo(todo.id))}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <button className="pl-[1rem]" onClick={handleEditable}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
      </div>
    </div>
  );
};

export default Todos3;
