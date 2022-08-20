import React from 'react';

import './Search.css';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };
    }

    updateSearch = (e) => { 
        const term = e.target.value;
        this.setState({term});
        this.props.updateSearch(term);
    }

    render() {
        return (
            <input 
                type="text" 
                className="form-control search-input"
                placeholder="Einen Mitarbeiter suchen"
                value={this.state.term}
                onChange={this.updateSearch} />
        );
    };
    
};

export default Search;
