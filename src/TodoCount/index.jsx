import React from "react";
import { TodoContext } from "../TodoContext";

function TodoCount() {
  const { completedTodo, totalTodos } = React.useContext(TodoContext);

  return (
    <h2 className="text-center mt-4">
      Completaste {completedTodo} de {totalTodos} TODOs
    </h2>
  );
}

export { TodoCount };
