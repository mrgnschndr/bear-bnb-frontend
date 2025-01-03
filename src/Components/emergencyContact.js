import React from 'react';

export default function EmergencyContact( { toggleEditMenu } ) {
    return (
        <>
                <div className="info-section">
                <div>
                    <h3>Emergency Contact</h3>
                    <p>Not Provided</p>
                </div>
                <button onClick={toggleEditMenu}>Add</button>
            </div>
        </>
    )
}