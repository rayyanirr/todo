import { FaSearch } from "react-icons/fa";

function TodoCreate() {
  return (
    <div className="m-0 row justify-content-center align-items-center">
      <div className="col-auto">
        <input
          type="text"
          className="form-control"
          id="inputPassword2"
          placeholder="Ingrese tarea"
        ></input>
      </div>
      <div className="col-auto">
        <button type="submit" className="btn btn-primary mb-3 mt-3">
          <FaSearch />
        </button>
      </div>
    </div>
  );
}

export { TodoCreate };
