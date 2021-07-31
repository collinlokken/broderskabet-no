import React from 'react';
import { A } from 'hookrouter';


export const Sublink = ({link}) => {
    return (
        <li className="nav-link">
            <div className="sublink-container">
                <A href={`/${link.path}`}>
                    {link.title}
                </A>
            </div>
        </li>
    );
}