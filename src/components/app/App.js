import Filter from '../filter/Filter';
import Info from '../info/Info';
import PersonalList from './../personalList/PersonalList';
import Search from '../search/Search';
import PersonalAdd from '../personalAdd/PersonalAdd';

import './App.css';

function App() {
    return (
        <div className="app">
            <Info />
            <div className="search">
                <Search />
                <Filter />
            </div>
            <PersonalList />
            <PersonalAdd />
        </div>
    )
}
export default App;