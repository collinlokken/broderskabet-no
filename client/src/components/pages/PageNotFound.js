import React from "react"
import { Link } from 'react-router-dom';

export const PageNotFound = () => {
    return (
        <>
            <h1>Fant ikke siden!&#x1F62D;</h1>
            <h3>Klikk <Link to='/'>her</Link> for å gå til hjemsiden</h3>
        </>
    )
}