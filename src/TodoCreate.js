import React from "react";
import { FaPlusCircle } from "react-icons/fa";

function TodoCreate({todos,setTodos}) {

  const [tareaValue, setTareaValue] = React.useState("");

  const addTodos = (tarea) => {
   
  const newTodos = [...todos];
  const tareaNueva = {text : tarea, completed : false }
  newTodos.push(tareaNueva)
  localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
  setTodos(newTodos)
  setTareaValue("")

  }

  return (
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
        <button type="submit" className="btn btn-primary mb-3 mt-3" onClick={() => addTodos(tareaValue)}>
          <FaPlusCircle />
        </button>
      </div>
    </div>
  );
}

export { TodoCreate };
