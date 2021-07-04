import React from "react";
import CoverPages from "../component/Block/CoverPages";
import CoverService from "../component/Block/CoverService";
import MainFooter from "../component/MainFooter";

import "./style/Services.scss";
import {Link} from "react-router-dom";

export default function ServiceBlock(){

    const itemServices = [
        {id: 1, className: "service-item", icon: "fas fa-rocket", h3: "Startup Applications"},
        {id: 2, className: "service-item", icon: "fas fa-laptop", h3: "SaaS Solutions"},
        {id: 3, className: "service-item", icon: "fas fa-money-check-alt", h3: "eCommerce Platforms"},
        {id: 4, className: "service-item", icon: "fab fa-searchengin", h3: "Research"},
        {id: 5, className: "service-item", icon: "fas fa-chart-line", h3: "Analytics"},
        {id: 6, className: "service-item", icon: "fas fa-cogs", h3: "Technology"}
    ]

    return(
        <div className="main-service-content-container">
            <div className="cover">
                <CoverPages title= "ServiceBlock" />
            </div>
            <div className="service-content container text-center">
                <div className="row">
                    {itemServices.map((service) => <div className="col-lg-4 col-md-6 col-12" key={service.id}>
                        <div className={service.className}>
                            <div className="service-icon">
                                <i className={service.icon}> </i>
                            </div>
                            <div className="service-details">
                                <h3>{service.h3}</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing aliqua.</p>
                                <Link to="/service">View Details</Link>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
            <div className="cover-service">
                <CoverService />
            </div>
            <div className="footer">
                <MainFooter />
            </div>
        </div>
    )
}