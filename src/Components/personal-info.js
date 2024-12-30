import React, { useState } from 'react';
import './personal-info.css';
import LegalName from './legalName';
import LegalNameEdit from './legalNameEdit';
import PreferredName from './preferredName';
import PreferredNameEdit from './preferredNameEdit';

export default function PersonalInfo() {
    const [editLegalNameOpen, setEditLegalName] = useState(false);

    function toggleEditMenu() {
        setEditLegalName((prevState) => !prevState)
    }

    return (
        <div className="personal-info">
            <h1 >Personal Info</h1>
            {!editLegalNameOpen && <LegalName toggleEditMenu={toggleEditMenu}/> }
            {editLegalNameOpen && <LegalNameEdit toggleEditMenu={toggleEditMenu}/> }
            <PreferredName />
            <PreferredNameEdit />
        </div>
    );
}