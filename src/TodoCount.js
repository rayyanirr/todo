function TodoCount({total, completed}) {
    return (
      <h2 className="text-center mt-4">
        Completaste {completed} de {total} TODOs
      </h2>
    );
  }

  export { TodoCount }