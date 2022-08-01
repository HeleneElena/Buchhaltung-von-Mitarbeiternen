import React from 'react';
import PersonalListItem from '../personalListItem/PersonalListItem';

import './PersonalList.css';

const PersonalList = ({data, onDelete}) => {
    
    const person = data.map(el => {
        const {id, ...elProps} = el;
            return (
                <PersonalListItem 
                    key={id} 
                    {...elProps} 
                    onDelete={() => onDelete(id) } /> 
            );    
        });

    return (
            <ul className="app-list list-group">
                {person}   
            </ul>
    );
};

export default PersonalList;