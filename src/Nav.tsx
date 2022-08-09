import { Link, useLocation } from "react-router-dom";

import './nav.css'

export function Nav () {
    const location = useLocation()

    return <Link to="/" id="navbar"><h1 className="home-link-text">articulate {location.pathname === '/' ? 'is a multimedia periodical about the humanity of fonts' : null}</h1></Link>
}