import React from 'react';

export default function PreferredName({ toggleEditMenu }) {
    return (
        <div className="info-section">
            <div>
            <h3>Preferred name</h3>
            <p>Not Provided</p>
            </div>
            <button onClick={ toggleEditMenu }>Edit</button>
        </div>
    )
}