import { TodoCount } from "./TodoCount";
import { TodoSearch } from "./TodoSearch";
import { TodoCreate } from "./TodoCreate";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";

import pensando from "./pensando.jpg";
import React from "react";

const defaultTodos = [
  { text: "cortar cebolla", completed: false },
  { text: "tareas de iea", completed: false },
  { text: "ver animes", completed: true },
  { text: "estudiar ingles", completed: false },
];

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  const [deleteValue, setDeleteValue] = React.useState("");
  const [todos, setTodos] = React.useState(defaultTodos);
 
 

  const completedTodo = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const filterTodo = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );


  todos.splice(deleteValue, 1)

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6 temaIzquierdo">
            <div className="row">
              <div className="col-row-12 ">
                <h2 className="text-center mt-4">
                  ¿ Que tienes planeado para hoy ?
                </h2>

                <div className="m-5 ">
                  <TodoCreate />
                </div>

                <img
                  src={pensando}
                  className="img-fluid mx-auto d-block"
                  alt="imagen de usuario pensando"
                  width={400}
                />
              </div>
            </div>
          </div>

          <div className="col-md-6 temaDerecho ">
            <TodoCount completed={completedTodo} total={totalTodos} />

            <div className="m-5">
              <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
              />
            </div>

            <TodoList>
              {filterTodo.map((todo,index) => (
                <TodoItem
                  id={index}
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  deleteValue={deleteValue}
                  setDeleteValue={setDeleteValue}
                  
                />
              ))}
            </TodoList>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
