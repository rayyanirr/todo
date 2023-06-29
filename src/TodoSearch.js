import React from "react";
function TodoSearch() {

  const [searchValue, setSearchValue] = React.useState('');

  console.log(searchValue);

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