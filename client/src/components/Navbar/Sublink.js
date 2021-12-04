import React from 'react';
import { Link } from 'react-router-dom';


export const Sublink = ({link}) => {
    return (
        <li className="nav-link">
            <div className="sublink-container">
                <Link to={`/${link.path}`}>
                    {link.title}
                </Link>
            </div>
        </li>
    );
}