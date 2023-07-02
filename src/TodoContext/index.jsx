import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
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

  const addTodos = (tarea) => {
    const newTodos = [...todos];
    const tareaNueva = {text : tarea, completed : false }
    newTodos.push(tareaNueva)
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
    saveTodos(newTodos)
  
}

  return (
    <TodoContext.Provider
      value={{
        saveTodos,
        todos,
        completedTodo,
        totalTodos,
        searchValue,
        setSearchValue,
        filterTodo,
        completeTodo,
        deleteTodo,
        addTodos,
        loading,
        error,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
