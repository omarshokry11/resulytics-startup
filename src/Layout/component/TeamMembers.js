import React from "react";
import {Image} from "react-bootstrap";
import Logo from "./Block/Logo";

import "./style/TeamMembers.scss";

export default function TeamMembers() {

    const teamItem = [
        {id: 1, img: "/img/ourTeam1.png", h3: "Merv Adrian", p: "Data Management",
            ul: [
                {id: 1, icon: "fab fa-facebook-f"},
                {id: 2, icon: "fab fa-twitter"},
                {id: 3, icon: "fab fa-instagram"},
                {id: 4, icon: "fab fa-linkedin-in"},
            ]
        },
        {id: 2, img: "/img/ourTeam2.png", h3: "Kirk Borne", p: "Data Scientist",
            ul: [
                {id: 1, icon: "fab fa-facebook-f"},
                {id: 2, icon: "fab fa-twitter"},
                {id: 3, icon: "fab fa-instagram"},
                {id: 4, icon: "fab fa-linkedin-in"},
            ]},
        {id: 3, img: "/img/ourTeam3.png", h3: "Carla Gentry", p: "Analytical Solutions",
            ul: [
                {id: 1, icon: "fab fa-facebook-f"},
                {id: 2, icon: "fab fa-twitter"},
                {id: 3, icon: "fab fa-instagram"},
                {id: 4, icon: "fab fa-linkedin-in"},
            ]},
        {id: 4, img: "/img/ourTeam4.png", h3: "Marie Curie", p: "Data Scientist",
            ul: [
                {id: 1, icon: "fab fa-facebook-f"},
                {id: 2, icon: "fab fa-twitter"},
                {id: 3, icon: "fab fa-instagram"},
                {id: 4, icon: "fab fa-linkedin-in"},
            ]},
    ]

    return(
        <div className="main-team-members-container">
            <div className="container text-center">
                <div className="row">
                    <div className="col-12 title">
                        <Logo text="TEAM MEMBERS" />
                        <h2>Our Data Scientist</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    </div>
                    {teamItem.map((item) => <div className="col-lg-3 col-md-6 col-12" key={item.id}>
                        <div className="item">
                            <div className="cover">
                                <Image src={item.img} />
                            </div>
                            <div className="details">
                                <h3>{item.h3}</h3>
                                <p>{item.p}</p>
                                <ul className="social">
                                    {item.ul.map((li) => <li key={li.id}><i className={li.icon}> </i></li>)}
                                </ul>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}