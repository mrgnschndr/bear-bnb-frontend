import React, { useState } from 'react';
import './personal-info.css';
import LegalName from '../Components/legalName';
import LegalNameEdit from '../Components/legalNameEdit';
import PreferredName from '../Components/preferredName';
import PreferredNameEdit from '../Components/preferredNameEdit';

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