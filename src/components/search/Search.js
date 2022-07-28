import React from 'react';

import './Search.css';

const Search = () => {
    return (
            <input 
                type="text" 
                className="form-control search-input"
                placeholder="Einen Mitarbeiter suchen" />
    );
}

export default Search;