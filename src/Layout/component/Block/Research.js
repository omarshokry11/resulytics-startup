import React from "react";
import {Link} from "react-router-dom";

import "./style/Research.scss";

export default function Research() {

    const items = [
        {id: 1, className: "col-lg-4 col-md-6 col-12 item item-1", icon: "fas fa-chart-bar", h3: "Research", paragraph: "Lorem ipsum dolor sit consectetur, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
            link1: "Market Research", iconLink: "fas fa-arrow-right", link2: "Investment Research", link: "Read More"},
        {id: 2, className: "col-lg-4 col-md-6 col-12 item item-2", icon: "fas fa-chart-line", h3: "Analytics", paragraph: "Lorem ipsum dolor sit consectetur, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
            link1: "Data Analytics ", iconLink: "fas fa-arrow-right", link2: "Business Intelligence", link: "Read More"},
        {id: 3, className: "col-lg-4 col-md-12 col-12 item item-3", icon: "fas fa-cogs", h3: "Technology", paragraph: "Lorem ipsum dolor sit consectetur, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
            link1: "Intelligence Automation", iconLink: "fas fa-arrow-right", link2: "Quality Engineering", link: "Read More"}
    ]

    return(
        <div className="main-items-container">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center title">
                        <h2>What We Do</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    </div>
                    {items.map((item) =>  <div className={item.className} key={item.id}>
                        <div className="icon-item">
                            <i className={item.icon}> </i>
                        </div>
                        <div className="details-item">
                            <h3>{item.h3}</h3>
                            <p>{item.paragraph}</p>
                            <Link to="#">{item.link1} <i className={item.iconLink}> </i></Link>
                            <Link to="#">{item.link2} <i className={item.iconLink}> </i></Link>
                            <Link to="/" className="link-item"><i className={item.iconLink}> </i> {item.link}</Link>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}