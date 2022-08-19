
import './PersonalList.css';
import PersonalListItem from './../personalListItem/PersonalListItem';

const PersonalList = ({data, onDelete}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <PersonalListItem 
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PersonalList;