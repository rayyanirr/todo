function TodoList({children}) {
    return (
      <ul className="list-group mt-5">
        {children}
      </ul>
    );
  }

  export { TodoList }