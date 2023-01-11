import React from "react";
import {Link, NavLink} from "react-router-dom";

import "./style/DropdownNavbar.scss";

export default function DropdownNavbar({ linkes }){
    return(
        <div className="dropdown-navbar">
            <div>
                <ul>
                    {linkes.map((link) =>  <li key={link.id}><NavLink to={link.pathName} activeClassName={link.activeClassName} className="link">{link.linkName}</NavLink></li>)}
                </ul>
            </div>
            <div className="nav-form">
                <div className="nav-search">
                    <input type="text" placeholder="Search for anything" />
                    <i className="fas fa-search"> </i>
                </div>
                <div className="nav-btn">
                    <Link to="/contact" className="link-btn"><i className="fas fa-arrow-right"> </i>Get Started</Link>
                </div>
            </div>
        </div>
    )
}