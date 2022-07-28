import React from 'react';
import './PersonalAdd.css';

const PersonalAdd = () => {
    return (
        <div className="app-add-form">
            <h3>Hinzufügen eines neuen Mitarbeiters</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Wie ist sein Name?" />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="Gehalt in $?" />

                <button type="submit"
                        className="btn btn-outline-light">Hinzufügen</button>
            </form>
        </div>
    );
};

export default PersonalAdd;