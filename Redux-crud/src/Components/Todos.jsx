import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove, update } from "../features/todoSlice";
import "bootstrap/dist/css/bootstrap.min.css";

function TodoComponent() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.value);

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch(add(input));
      setInput("");
    }
  };

  const handleUpdateTodo = (index, status) => {
    dispatch(update({ index, title: input ||   todos[index].title, status }));
   

  };


  function updateTitleOfTodo (index){


 setInput(todos[index].title)


  }


  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 ">Todo List</h2>

      <div className="input-group mb-4 shadow-sm">
        <input
          type="text"
          className="form-control"
          placeholder="Add Todo.."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="btn btn-success"
          type="button"
          onClick={handleAddTodo}
        >
          +
        </button>
      </div>

      <ul className="list-group shadow-sm">
        {todos.length === 0 && (
          <li className="list-group-item text-muted text-center">
            Hii ! Glad To See You,
            Start Your day with me,
            Add your Tasks
          </li>
        )}
        {todos.map((item, i) => (
          <li
            key={i}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <span className="badge bg-primary m-2">{i+1}</span>
              <strong className={item.status ? "text-success" : "text-danger"}>
                {item.title}
              </strong>
              <span
                className={
                  item.status
                    ? "badge bg-success m-2 p-2"
                    : "badge bg-danger m-2 p-2"
                }
              >
                {item.status ? "Completed" : "Incomplete"}
              </span>
            </div>
            <div>
              <button
                className="btn btn-sm btn-primary me-2"
                onClick={() => handleUpdateTodo(i, !item.status,item.title)}
              >
                {item.status ? "Complete" : "Pending"}
              </button>
              <button
                className="btn btn-sm btn-primary"
                onClick={() => dispatch(remove(i))}
              >
                Remove
              </button>
              <button
                className="btn m-2 btn-sm btn-primary"
                onClick={() => updateTitleOfTodo(i,item.title)}
              >
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoComponent;
