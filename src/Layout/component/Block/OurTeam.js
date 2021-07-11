import React from "react";
import {Image} from "react-bootstrap";

import "./style/OurTeam.scss";

export default function OurTeam() {
    return(
        <div className="main-our-team-container">
            <Image src="/img/vector-shape4-3f535f93904f867f76fb0586dfc899f3.png" className="cover" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="team">
                            <Image src="/img/team1.jpg" className="team-1" />
                            <Image src="/img/team3.jpg" className="team-3" />
                            <Image src="/img/team2.jpg" className="team-2" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="details">
                            <Image src="/img/logo2.png" />
                            <span>OUR TEAM</span>
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