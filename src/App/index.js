import React from "react";
import { AppUi } from "./AppUi";
import { useLocalStorage } from "./useLocalStorage";



function App() {

  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodo = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const filterTodo = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);

    saveTodos(newTodos);
  };

  return (
   <AppUi 

   saveTodos={saveTodos}
   todos={todos}
   completedTodo={completedTodo}
   totalTodos={totalTodos}
   searchValue={searchValue}
   setSearchValue={setSearchValue}
   filterTodo={filterTodo}
   completeTodo={completeTodo}
   deleteTodo={deleteTodo}

   />
  );
}

export default App;
