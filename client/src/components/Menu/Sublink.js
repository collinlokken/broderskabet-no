import React from 'react';
import { Link } from 'react-router-dom';


export const Sublink = ({link, setOpen}) => {
    return (
        <div className="sublink-container" onClick={()=>setOpen(false)}>
            <Link to={`/${link.path}`}  className="sub-link">
                {link.title}
            </Link>
        </div>
    );
}