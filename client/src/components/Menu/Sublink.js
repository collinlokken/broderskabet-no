import React from 'react';
import { A } from 'hookrouter';


export const Sublink = ({link, setOpen}) => {
    return (
        <div className="sublink-container" onClick={()=>setOpen(false)}>
            <A href={`/${link.path}`}  className="sub-link">
                {link.title}
            </A>
        </div>
    );
}