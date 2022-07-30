import React from 'react';
import PersonalListItem from '../personalListItem/PersonalListItem';

import './PersonalList.css';

const PersonalList = ({data}) => {
    
    const person = data.map(el => {
        const {id, ...elProps} = el;
            return (
                <PersonalListItem key={id} {...elProps} /> 
            )    
        });

    return (
            <ul className="app-list list-group">
                {person}   
            </ul>
    );
};

export default PersonalList;