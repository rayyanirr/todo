import React from "react";

import { FaPlusCircle } from "react-icons/fa";
import { TodoCount } from "../TodoCount";
import { TodoSearch } from "../TodoSearch";
import { TodoCreate } from "../TodoCreate";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { TodosEmpty } from "../TodosEmpty";
import { TodoModal } from "../TodoModal";

import Pensando from "../images/pensando.jpg";

import { TodoContext } from "../TodoContext";

function AppUi() {
  const {
    todos,
    filterTodo,
    completeTodo,
    deleteTodo,
    loading,
    error,
    openModalValue,
    setOpenModalValue,
    addTodos,
  } = React.useContext(TodoContext);

  const [tareaValue, setTareaValue] = React.useState("");

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
                  src={Pensando}
                  className="img-fluid mx-auto d-block mb-2"
                  alt="imagen de carga de todos"
                  width={350}
                />
              </div>
            </div>
          </div>

          <div className="col-md-6 temaDerecho ">
            <TodoCount />

            <div className="m-5">
              <TodoSearch />
            </div>

            <TodoList>
              {loading && <TodosLoading />}
              {error && <TodosError />}
              {!loading && todos.length === 0 && <TodosEmpty />}

              {filterTodo.map((todo) => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onCompleted={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                />
              ))}
            </TodoList>
          </div>
        </div>
      </div>

      {openModalValue && (
        <TodoModal>
        <div className="m-0 row justify-content-center align-items-center">
        <div className="col-auto">
        <input
          type="text"
          className="form-control"
          id="inputPassword2"
          placeholder="Ingrese tarea"
          value={tareaValue}
          onChange={(event) => {
            setTareaValue(event.target.value);
          }}
        ></input>
      </div>

     
          <div className="col-auto">
            <button
              type="button"
              className="btn btn-primary mb-3 mt-3"
              onClick={() => {
                
                addTodos(tareaValue)
                setTareaValue("")
                }}
            >
              <FaPlusCircle />
            </button>
          </div>
        </div>
        </TodoModal>
      )}
    </>
  );
}

export { AppUi };
