import React from 'react';

export default function LegalName({ toggleEditMenu }) {
    return (
        <>
            <div className="info-section">
                <div>
                    <h3>Legal Name</h3>
                    <p>Not Provided</p>
                </div>
                <button onClick={toggleEditMenu}>Edit</button>
            </div>
        </>
    )
}