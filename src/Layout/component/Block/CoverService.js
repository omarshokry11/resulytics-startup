import React from "react";
import {Image} from "react-bootstrap";

import "./style/CoverService.scss";

export default function CoverService(){
    return(
        <div className="cover-service-container">
            <Image src="/img/service1.png" className="img-1" />
            <Image src="/img/service2.png" className="img-2" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12 item-img">
                        <Image src="/img/project-start1-f0146a349ec9af6e82774320598c8f78.png" />
                    </div>
                    <div className="col-lg-6 col-12 item-details">
                        <h2>We Like to Start Your Project With Us</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                        <button className="link-btn"><i className="fas fa-calendar-alt"> </i> Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}