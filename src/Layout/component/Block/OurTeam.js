import React from "react";
import {Image} from "react-bootstrap";

import "./style/OurTeam.scss";
import Logo from "./Logo";

export default function OurTeam() {
    return(
        <div className="main-our-team-container">
            <Image src="/img/vector-shape4-3f535f93904f867f76fb0586dfc899f3.png" className="cover-1" />
            <Image src="/img/vector-shape1-c3bae2923d94465d5ea11e8b7b7e4491.png" className="cover-2" />
            <Image src="/img/map-shape1-4b98bca3bcf9f47dc8907ab2fffd3922.png" className="cover-3" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="team">
                            <Image src="/img/team1.jpg" className="team-1" />
                            <Image src="/img/team3.jpg" className="team-3" />
                            <Image src="/img/team4.jpg" className="team-2" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="details">
                            <Logo text="OUR TEAM" />
                            <h2>Meet Our Data Scientist Preparing For Your Business Success</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            <a href="/" className="link-btn">View Our Team</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}