
import './PersonalList.css';
import PersonalListItem from './../personalListItem/PersonalListItem';

const PersonalList = ({data}) => {
    
    const elements = data.map((item, id) => {
        return (
            <PersonalListItem key={id} {...item}  />
        )
    })
    
    return (
        <ul className='app-list list-group'>
            {elements}
        </ul>  
    )
};

export default PersonalList;