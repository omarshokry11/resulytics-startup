import React from "react";
import {Image} from "react-bootstrap";

import "./style/Home.scss";

export default function Home(){
    return(
        <div className="main-home-content-container">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-12 item-text">
                        <div className="text-details">
                            <h1>Managed Analytics and Data Analysis Platform</h1>
                            <p>We have created a cloud based tool to do your all boring tasks related to data analysis and decesion making based on the nature of data!</p>
                        </div>
                        <div className="button">
                            <button className="link-btn"><i className="fas fa-arrow-right"> </i>About US</button>
                            <button className="link-btn link-btn-1"><i className="fas fa-check"> </i>Get Started</button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 img-cover">
                        <Image src="/img/banner-four-main-img-6ade92c3d5c70b3c70c3d9908255842d.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}