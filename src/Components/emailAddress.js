import React from 'react';

export default function EmailAddress({ toggleEditMenu }) {
    return (
        <>
            <div className="info-section">
                <div>
                    <h3>Email Address</h3>
                    <p>Not Provided</p>
                </div>
                <button onClick={toggleEditMenu}>Edit</button>
            </div>
        </>
    )
}