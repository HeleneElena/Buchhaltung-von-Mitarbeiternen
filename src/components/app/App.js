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
                {name: 'Artur C.', salary: 5800, increase: false, rise: true, id: 1},
                {name: 'Michael M.', salary: 7000, increase: false, rise: false, id: 2},
                {name: 'Miroslav W.', salary: 9200, increase: false, rise: false, id: 3}
            ]
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        });
    }

    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    render() {
        const increased = this.state.data.filter(item => item.increase).length;

        return (
            <div className="app">
                <Info persona={this.state.data.length} increased={increased}/>
    
                <div className="search-panel">
                    <Search/>
                    <Filter/>
                </div>
                
                <PersonalList 
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <PersonalAdd onAdd={this.addItem}/>
            </div>
        );
    }

}

export default App;