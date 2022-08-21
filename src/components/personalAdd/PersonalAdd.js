import React from 'react';
import './PersonalAdd.css';

class PersonalAdd extends React.Component { 
    state = {
            name: '',
            salary: ''
        };

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name.length < 3 || !this.state.salary) return;
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }

    render () {
        const {name, salary} = this.state;
        
        return (
        <div className="app-add-form">
            <h3>Hinzufügen eines neuen Mitarbeiters</h3>
            <form
                className="add-form d-flex"
                onSubmit = {this.onSubmit} >
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Wie ist sein Name?" 
                    name="name"
                    value={name}
                    onChange={this.onValueChange} />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="Gehalt in €?" 
                    name="salary"
                    value={salary}
                    onChange={this.onValueChange} />

                <button type="submit"
                        className="btn btn-outline-light">Hinzufügen</button>
            </form>
        </div>
    )
    }
    
}

export default PersonalAdd;