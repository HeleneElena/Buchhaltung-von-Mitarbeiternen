import React from 'react';
import './Filter.css';

const Filter = ({filter, onFilterSelect}) => {
    const buttonsData = [
        {name: 'all', label: 'Alle Mitarbeiter'},
        {name: 'salaryMore', label: 'Gehalt mehr als 3000€'},
        {name: 'rise', label: 'Auf Gehaltserhöhung'},
    ];

    const btns = buttonsData.map(({name, label}) => {
        const active = filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';

        return (
            <button 
                className={`btn ${clazz}`}
                type='button'
                key={name}
                onClick={() => onFilterSelect(name)} >
                    {label}
            </button>
        );
    });

        return (
            <div className='btn-group'>
                {btns}
            </div>
        );
    
}

export default Filter;