import React from 'react';

export default function PhoneNumber({ toggleEditMenu }) {
    return (
        <>
            <div className="info-section">
                <div>
                    <h3>Phone Number</h3>
                    <p>Not Provided</p>
                </div>
                <button onClick={toggleEditMenu}>Edit</button>
            </div>
        </>
    )
}