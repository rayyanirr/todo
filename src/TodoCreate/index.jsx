import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import { TodoContext } from "../TodoContext";

function TodoCreate({ todos, setTodos }) {
  const [tareaValue, setTareaValue] = React.useState("");

  return (
    <div className="m-0 row justify-content-center align-items-center">
    {/*
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

      <TodoContext.Consumer>
        {({addTodos}) => (
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
        )}
      </TodoContext.Consumer>
    */}
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Agregar Tarea
      </button>
    </div>
  );
}

export { TodoCreate };
