import { TodoCount } from "./TodoCount";
import { TodoSearch } from "./TodoSearch";
import { TodoCreate } from "./TodoCreate";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";

import pensando from "./pensando.jpg";
import React from "react";

/*const defaultTodos = [
  { text: "cortar cebolla", completed: false },
  { text: "tareas de iea", completed: false },
  { text: "ver animes", completed: true },
  { text: "estudiar ingles", completed: false },
];

localStorage.setItem('TODOS_V1', defaultTodos)

localStorage.removeItem('TODO_V1')
*/
function App() {

  
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  if (!localStorageTodos) {
    
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos =  JSON.parse(localStorageTodos)
  }
   

  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState("");
 

  const completedTodo = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const filterTodo = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );
  

  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos))
    setTodos(newTodos)
  }

 const completeTodo = (text) => {

  const newTodos = [...todos];
  const todoIndex = newTodos.findIndex(
    (todo) => todo.text === text
  )
  newTodos[todoIndex].completed = !newTodos[todoIndex].completed
  saveTodos(newTodos)

 }

 const deleteTodo = (text) => {

  const newTodos = [...todos];
  const todoIndex = newTodos.findIndex(
    (todo) => todo.text === text
  )
  newTodos.splice(todoIndex,1)

  saveTodos(newTodos)

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
