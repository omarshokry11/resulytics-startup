import React from "react";
import {Image} from "react-bootstrap";
import Logo from "./Block/Logo";

import "./style/DataScience.scss";

export default function DataScience() {

    const dataItems = [
        {id: 1, img: "/img/process1.png", h3: "Frame the Problem", p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."},
        {id: 2, img: "/img/process2.png", h3: "Collect the Raw Data", p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."},
        {id: 3, img: "/img/process3.png", h3: "Process the Data", p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."},
        {id: 4, img: "/img/process4.png", h3: "Explore the Data", p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."},
        {id: 5, img: "/img/process5.png", h3: "Perform In-depth Analysis", p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."},
        {id: 6, img: "/img/process6.png", h3: "Communicate Results", p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."},
    ]

    return(
        <div className="main-data-science-container">
            <Image src="/img/circle-shape1-01ae53caad7e9930c72205eddba707d3.png" className="img d-lg-block d-none" />
            <div className="container text-center">
                <div className="row">
                    <div className="col-12 title">
                        <Logo text="HOW IT'S WORK" />
                        <h2>The Data Science Process</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    </div>
                    {dataItems.map((data)=> <div className="col-lg-4 col-md-6 col-12" key={data.id}>
                        <div className="item">
                            <Image src={data.img} />
                            <h3>{data.h3}</h3>
                            <p>{data.p}</p>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}