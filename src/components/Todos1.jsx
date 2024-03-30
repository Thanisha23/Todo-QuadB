import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { removeCard1Todo } from "../features/card1/card1Slice";
const Todos1 = () => {
    const todos = useSelector(state => state.card1.todos);
    const dispatch = useDispatch();
  return (
<div id="tasks"
          className="cursor-pointer items-center justify-start h-64 w-full bg-purple-300 mt-2 overflow-x-auto pt-[10px] pb-[10px] pl-[5px] pr-[5px]"
        >
          {todos? todos.map((todo) => (
            <div
              key={todo.id}
              className="task h-3 mb-1 pt-5 pb-5 pl-3 pr-3 items-center flex justify-between cursor-pointer bg-white rounded-3xl"
            >
              <span id="taskname" className="font-normal">
                {todo.text}
              </span>

              <div>
                <button onClick={() => dispatch(removeCard1Todo(todo.id))}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
               
              </div>
            </div>
          )) :""}
        </div>
  )
}

export default Todos1