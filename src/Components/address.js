import React from 'react';

export default function Address({ toggleEditMenu }) {
    return (
        <div className="info-section">
            <div>
            <h3>Address</h3>
            <p>Not Provided</p>
            </div>
            <button onClick={ toggleEditMenu }>Edit</button>
        </div>
    )
}