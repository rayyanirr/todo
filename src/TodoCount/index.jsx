import { TodoContext } from "../TodoContext";

function TodoCount() {
    return (
      <TodoContext.Consumer>
        {({
          totalTodos, completedTodo 
        }) => (
          <h2 className="text-center mt-4">
              Completaste {completedTodo} de {totalTodos} TODOs
          </h2>
        )}
      </TodoContext.Consumer>
      
    );
  }

  export { TodoCount }