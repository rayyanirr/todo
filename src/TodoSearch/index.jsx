import { TodoContext } from "../TodoContext";

function TodoSearch() {
  return (
    <TodoContext.Consumer>
      {({ searchValue, setSearchValue }) => (
        <input
          type="text"
          className="form-control"
          placeholder="buscar"
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
        />
      )}
    </TodoContext.Consumer>
  );
}

export { TodoSearch };
