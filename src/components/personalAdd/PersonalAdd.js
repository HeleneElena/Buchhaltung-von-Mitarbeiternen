import React from 'react';
import './PersonalAdd.css';

class PersonalAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: 0
        };
    }

    onValueChange = (e) => {
        this.setState({

        });
    };

    render() {
        return (
        <div className="app-add-form">
            <h3>Hinzufügen eines neuen Mitarbeiters</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Wie ist sein Name?" name="name" onChange={this.onValueChange} />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="Gehalt in €?" name="salary" onChange={this.onValueChange} />

                <button type="submit"
                        className="btn btn-outline-light">Hinzufügen</button>
            </form>
        </div>
    );
    }
}

export default PersonalAdd;