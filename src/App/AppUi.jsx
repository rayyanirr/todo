import { TodoCount } from "../TodoCount";
import { TodoSearch } from "../TodoSearch";
import { TodoCreate } from "../TodoCreate";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";

import Pensando from "../images/pensando.jpg";
import Add from "../images/add.jpg";
import Cargando from "../images/cargando.png";
import Error from "../images/error.png";

function AppUi({saveTodos,todos,completedTodo,totalTodos,searchValue,setSearchValue,filterTodo,completeTodo,deleteTodo,loading,error}) 
{
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
                    
                    {loading && <img
                      src={Cargando}
                      className="img-fluid mx-auto d-block mb-2"
                      alt="imagen de carga de todos"
                      width={350}
                    /> }


                    {error && <img
                      src={Error}
                      className="img-fluid mx-auto d-block mb-2"
                      alt="imagen de error"
                      width={350}
                    />}
                    
                    {(!loading && todos.length === 0) && <img
                      src={Add}
                      className="img-fluid mx-auto d-block mb-2"
                      alt="imagen de crea nuevo item"
                      width={350}
                    /> }

                    {(!loading && todos.length >= 1) && <img
                      src={Pensando}
                      className="img-fluid mx-auto d-block mb-2"
                      alt="imagen de carga de todos"
                      width={350}
                    /> }
                    
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

export {AppUi}