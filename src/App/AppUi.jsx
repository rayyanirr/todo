import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { TodoCount } from "../TodoCount";
import { TodoSearch } from "../TodoSearch";
import { TodoCreate } from "../TodoCreate";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { TodosEmpty } from "../TodosEmpty";

import Pensando from "../images/pensando.jpg";


function AppUi({
  saveTodos,
  todos,
  completedTodo,
  totalTodos,
  searchValue,
  setSearchValue,
  filterTodo,
  completeTodo,
  deleteTodo,
  loading,
  error,
}) {
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
                  <TodoCreate setTodos={saveTodos} todos={todos} />
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
            <TodoCount completed={completedTodo} total={totalTodos} />

            <div className="m-5">
              <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
              />
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
    </>
  );
}

export { AppUi };
