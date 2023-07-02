import { TodoCount } from "../TodoCount";
import { TodoSearch } from "../TodoSearch";
import { TodoCreate } from "../TodoCreate";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { TodosEmpty } from "../TodosEmpty";

import Pensando from "../images/pensando.jpg";

import { TodoContext } from "../TodoContext";

function AppUi() {
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

            <TodoContext.Consumer>
              {({ 
                todos,
                filterTodo,
                completeTodo,
                deleteTodo,
                loading,
                error,
              }) => (
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
              )}
            </TodoContext.Consumer>
          </div>
        </div>
      </div>
    </>
  );
}

export { AppUi };
