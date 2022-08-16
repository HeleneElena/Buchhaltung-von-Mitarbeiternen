import React from 'react';

import Filter from '../filter/Filter';
import Info from '../info/Info';
import PersonalList from './../personalList/PersonalList';
import Search from '../search/Search';
import PersonalAdd from '../personalAdd/PersonalAdd';

import './App.css';

const App = (props) => {

    const data = [
        {name: 'John N.', salary: 1290, increase: false},
        {name: 'Monika G.', salary: 5500, increase: false},
        {name: 'Tanja S.', salary: 7500, increase: false},
    ]

        return (
            <div className="app">
                <Info />
                <div className="search">
                    <Search />
                    <Filter />
                </div>
                <PersonalList data={data} />
                <PersonalAdd  />
            </div>
        )

}

export default App;