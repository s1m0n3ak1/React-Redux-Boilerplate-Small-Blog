import React from 'react';
import { Link } from 'react-router-dom';

const NavigatorLink = ({ label, destination }) => (
    <Link
        className='nav-item nav-link'
        to={ destination }>
        { label }
    </Link>
);

export default NavigatorLink;
