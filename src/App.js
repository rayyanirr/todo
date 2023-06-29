import { TodoCount } from "./TodoCount";
import { TodoSearch } from "./TodoSearch";
import { TodoCreate } from "./TodoCreate";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";


import pensando from "./pensando.jpg";

const defaultTodos = [
  { text: "cortar cebolla", completed: false },
  { text: "tareas de iea", completed: false },
  { text: "ver animes", completed: true },
  { text: "estudiar ingles", completed: false },
];

function App() {
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
                  src={pensando}
                  className="img-fluid mx-auto d-block"
                  alt="imagen de usuario pensando"
                  width={400}
                />
              </div>
            </div>
          </div>

          <div className="col-md-6 temaDerecho ">
            <TodoCount completed={16} total={20} />

            <div className="m-5">
              <TodoSearch />
            </div>

            <TodoList>
              {defaultTodos.map((todo) => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
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
