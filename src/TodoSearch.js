
function TodoSearch({searchValue,setSearchValue}) {
    return (
      <input 
        type="text" 
        className="form-control" 
        placeholder="buscar" 
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
        />
    );
  }

  export { TodoSearch }