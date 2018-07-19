import React from 'react';

const SearchBox = ({ handleSubmit, searchChange }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input
        type='search'
        placeholder='search pokemon'
        onChange={searchChange}
      />
      </form>
    </div>
  );
}

export default SearchBox;