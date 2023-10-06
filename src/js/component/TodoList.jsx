import React, { useState, useEffect } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const [items, setItems] = useState(0);


  const addTodo = () => {
    if (todoInput.trim() !== "") {
      setTodos([...todos, todoInput]);
      setTodoInput("");
    }
  };


  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  useEffect(() => {
    const itemsLeft = todos.length;
    setItems(itemsLeft);
  }, [todos]);

  return (
    <div className="d-flex justify-content-center">
      <div className=" col-md-4 ">
        <div className="layer1 d-flex justify-content-start flex-column border-0 shadow z-3">
          <input
            type="text"
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
            placeholder="What needs to be done?"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTodo();
              }
            }}
            className="border-0 px-5 py-3 input fs-2 "
          />

          {todos.map((todo, index) => (
            <div
              key={index}
              className="bg-white item-box border-top w-full px-5 py-3 d-flex justify-content-between fs-2 "
              onClick={() => deleteTodo(index)}
            >
              <div className="me-5">{todo}</div>

              <div>
                <button>X</button>
              </div>
            </div>
          ))}
          <div className="d-flex justify-content-end border-top bg-white">
            <div className=" py-2 px-5 fs-5 bg-white">{items} {items === 1 ? "item" : "items"} left</div>
          </div>
        </div>

        <div className="d-flex justify-content-center invisible-layer">

          <div className="layer2 border-0 shadow "></div>
          <div className="layer3 border-0 shadow "></div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;