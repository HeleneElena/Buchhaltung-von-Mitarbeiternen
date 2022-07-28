import React from 'react';
import PersonalListItem from '../personalListItem/PersonalListItem';

import './PersonalList.css';

const PersonalList = () => {
    return (
            <ul className="app-list list-group">
                <PersonalListItem />
                <PersonalListItem />
                <PersonalListItem />
            </ul>
    );
};

export default PersonalList;