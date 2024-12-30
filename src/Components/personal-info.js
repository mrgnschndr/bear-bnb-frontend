import React from 'react';
import './personal-info.css';
import LegalName from './legalName';
import LegalNameEdit from './legalNameEdit';
import PreferredName from './preferredName';
import PreferredNameEdit from './preferredNameEdit';

export default function PersonalInfo() {
    return (
        <div className="personal-info">
            <h1 >Personal Info</h1>
            <LegalName />
            <LegalNameEdit />
            <PreferredName />
            <PreferredNameEdit />
        </div>
    );
}