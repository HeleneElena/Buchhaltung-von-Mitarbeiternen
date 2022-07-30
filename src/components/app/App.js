import Filter from '../filter/Filter';
import Info from '../info/Info';
import PersonalList from './../personalList/PersonalList';
import Search from '../search/Search';
import PersonalAdd from '../personalAdd/PersonalAdd';

import './App.css';

function App() {

    const data = [
        {id: 1, name: "Monika Bauer", salary: 5500, increase: false},
        {id: 2, name: "Tanja Borrmann", salary: 2700, increase: false},
        {id: 3, name: "Alex Merz", salary: 3200, increase: false},
    ];

    return (
        <div className="app">
            <Info />
            <div className="search">
                <Search />
                <Filter />
            </div>
            <PersonalList data={data} />
            <PersonalAdd />
        </div>
    )
}
export default App;