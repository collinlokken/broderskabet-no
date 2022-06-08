import React from 'react';
import { Link } from 'react-router-dom';


export const Sublink = ({link, callback}) => {
    return (
        <div className="sublink-container"
            onMouseEnter={() => callback(true, link.title)}
            onMouseLeave={() => callback(false, link.title)}
        >
            <Link to={`/${link.path}`}>
                {link.title}
            </Link>
        </div>
    );
}