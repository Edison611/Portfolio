import React from "react";
import "../styles/navbar.css";
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="nav">
            <div className="logo"><Link to="/Home">Edison Ying</Link></div>
            <ul>
                <li><Link to="/ICS4U0">ICS4U0</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;