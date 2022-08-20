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
            ],
            term: '',
            filter: 'all'
        };
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

    searchPerson = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        })
    }

    updateSearch = (term) => {
        this.setState({term});
    }

    filterFunction = (arr, filter) => {
        switch (filter) {
            case 'rise' :
                return arr.filter(el => el.rise);
            case 'salaryMore' :
                return arr.filter(el => el.salary > 3000);
            default:
                return arr
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }

    render() {
        const increased = this.state.data.filter(item => item.increase).length;
        const {data, term, filter} = this.state;
        const visibleData = this.filterFunction(this.searchPerson(data, term), filter)

        return (
            <div className="app">
                <Info persona={data.length} increased={increased}/>
    
                <div className="search-panel">
                    <Search updateSearch={this.updateSearch} />
                    <Filter filter={filter} />
                </div>
                
                <PersonalList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <PersonalAdd onAdd={this.addItem}/>
            </div>
        );
    }

}

export default App;