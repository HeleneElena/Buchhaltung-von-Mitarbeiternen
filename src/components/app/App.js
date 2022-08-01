import React from 'react';

import Filter from '../filter/Filter';
import Info from '../info/Info';
import PersonalList from './../personalList/PersonalList';
import Search from '../search/Search';
import PersonalAdd from '../personalAdd/PersonalAdd';

import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {id: 1, name: "Monika Bauer", salary: 5500, increase: false},
                {id: 2, name: "Tanja Borrmann", salary: 2700, increase: false},
                {id: 3, name: "Alex Merz", salary: 3200, increase: false},
            ]
        };
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }
    
    render() {
        return (
            <div className="app">
                <Info />
                <div className="search">
                    <Search />
                    <Filter />
                </div>
                <PersonalList 
                    data={this.state.data}
                    onDelete={this.deleteItem} />
                <PersonalAdd onAdd={this.addItem} />
            </div>
        )
    }
}

export default App;