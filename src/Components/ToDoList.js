import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo, deleteTodo } from "../ToDoSlice";
import { useState } from "react";
import PopUp from "./PopUp";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [popupVisible, setPopupVisible] = useState(false);
  const [currentTask, setCurrentTask] = useState({ id: 0, text: "" });

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const handleAdd = (title, description) => {
    dispatch(addTodo({ id: Date.now(), title, description }));
    openPopup();
  };

  const handleUpdate = (id, title, description) => {
    dispatch(updateTodo({ id, title, description }));
    openPopup();
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="App">
        <ul>
            {todos.map((todo) => {
            <li key={todo.id}>
                {todo.title}
                {todo.description}
                <button onClick={() => handleUpdate(todo.id, todo.text)}>Update</button>
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </li>;
            })}
            <button onClick={handleAdd}>Add</button>
        </ul>
        <PopUp
            visible={popupVisible}
            onCancel={closePopup}
            onSave={(title, description) => {
                if (currentTask.id === 0) {
                  handleAdd(title, description);
                } else {
                  handleUpdate(currentTask.id, title, description);
                }
                closePopup();
              }}
        />
    </div>
  );
};

export default TodoList;