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
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");
 

  const completedTodo = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const filterTodo = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );
  

 const completeTodo = (text) => {

  const newTodos = [...todos];
  const todoIndex = newTodos.findIndex(
    (todo) => todo.text === text
  )
  newTodos[todoIndex].completed = !newTodos[todoIndex].completed
  setTodos(newTodos)

 }

 const deleteTodo = (text) => {

  const newTodos = [...todos];
  const todoIndex = newTodos.findIndex(
    (todo) => todo.text === text
  )
  newTodos.splice(todoIndex,1)

  setTodos(newTodos)

 }

 

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
                  <TodoCreate setTodos={setTodos} todos={todos}/>
                </div>

                <img
                  src={pensando}
                  className="img-fluid mx-auto d-block mb-2"
                  alt="imagen de usuario pensando"
                  width={350}
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
              {filterTodo.map((todo) => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onCompleted={() => completeTodo(todo.text)}
                  onDelete = {() => deleteTodo(todo.text)}
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
