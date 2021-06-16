import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [TodosLeft, SetTodosLeft] = useState(0);
 
  return (
    <div className="App">
      <div className="input-container">
        <input
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          className="todo-input"
          type="text"
          placeholder="Enter Your ToDo"
        />
        <button
          onClick={() => {
            setTodos([...todos, { id: Date.now(), text: todo, status: false }]);
            SetTodosLeft(todos.length + 1);
            setTodo("");
          }}
          className="add-btn"
        >
          &#x2b;
        </button>
      </div>

      <div className="todo-container">
        {todos.map((obj, index) => {
          return (
            <div key={index} className="todo-item">
              <p className={`todo ${obj.status ? "completed" : ""}`}>
                {obj.text}
              </p>
              <div className="button-container">
                <input
                  value={obj.status}
                  onChange={(e) => {
                    setTodos(
                      todos.filter((obj2) => {
                        if (obj2.id === obj.id) {
                          obj2.status = e.target.checked;
                        }
                        return obj2;
                      })
                    );
              
                  }}
                  type="checkbox"
                  className="check-btn"
                />
                <button
                  onClick={(e) => {
                    setTodos(todos.filter((el) => el.id !== obj.id));
                    SetTodosLeft(todos.length - 1);
                  }}
                  className="delete-btn "
                >
                  &times;
                </button>
              </div>
            </div>
          );
        })}
        <div className="todos-left">
          {TodosLeft} left ToDo
        </div>
      </div>
    </div>
  );
}

export default App;
