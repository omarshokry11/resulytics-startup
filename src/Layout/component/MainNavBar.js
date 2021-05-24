import React, {useState} from "react";
import {Image} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import DropdownNavbar from "./Block/DropdownNavbar";

import "./style/MainNavBar.scss";

export default function MainNavBar(){

    const linkes = [
        {id: 1, linkName: "Home", pathName: "/", activeClassName: "active"},
        {id: 2, linkName: "About US", pathName: "/about", activeClassName: "active"},
        {id: 3, linkName: "Services", pathName: "/service",  activeClassName: "active"},
        {id: 4, linkName: "Case Studies", pathName: ".studies",  activeClassName: "active"},
        {id: 5, linkName: "Pages", pathName: "/page",  activeClassName: "active"},
        {id: 6, linkName: "Blog", pathName: "/blog",  activeClassName: "active"},
    ];

    const [click, setClick] = useState(false);

    return(
        <div className="main-navbar-container">
            <div className="navbar-logo">
                <Image src="/img/logo.png" />
            </div>
            <div className="navbar-dropdown" onClick={() => setClick(!click)}>
                <div> </div>
                <div> </div>
                <div> </div>
            </div>
            {click ?  <DropdownNavbar linkes={linkes} /> : null}
            <div className="navbar-link">
                <ul>
                    {linkes.map((link) =>  <li key={link.id}>
                            <NavLink to={link.pathName} activeClassName={link.activeClassName} className="link">{link.linkName}</NavLink>
                        </li>
                    )}
                </ul>
            </div>
            <div className="navbar-form">
                <div className="nav-search">
                    <input type="text" placeholder="Search for anything" />
                    <i className="fas fa-search"> </i>
                </div>
               <div className="nav-btn">
                   <a href="/" className="link-btn"><i className="fas fa-arrow-right"> </i>Get Started</a>
               </div>
            </div>
        </div>
    )
}