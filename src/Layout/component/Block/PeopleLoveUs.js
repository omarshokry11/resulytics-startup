import React from "react";
import {Image} from "react-bootstrap";
import Logo from "./Logo";

import "./style/PeopleLoveUs.scss";

export default function PeopleLoveUs() {

    const items = [
        {id: 1, class: "number-1 number", number: "1", h3: "Data for All Your People", p: "Dolor sit amet consectetur elit eiusmod tempor incidi dunt labore dolore magna aliqua enim."},
        {id: 2, class: "number-2 number", number: "2", h3: "A New Breed of AI", p: "Dolor sit amet consectetur elit eiusmod tempor incidi dunt labore dolore magna aliqua enim."},
        {id: 3, class: "number-3 number", number: "3", h3: "Analytics Business", p: "Dolor sit amet consectetur elit eiusmod tempor incidi dunt labore dolore magna aliqua enim."},
    ]

    return(
        <div className="main-people-love-us">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="title">
                            <Logo text="PEOPLE LOVE US" />
                            <h2>Why Choose Us?</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                        </div>
                        <div className="items">
                            <span className="icon icon-1">
                                    <i className="fas fa-chevron-down"> </i>
                            </span>
                            <span className="icon icon-2">
                                    <i className="fas fa-chevron-down"> </i>
                            </span>
                            {items.map((item) => <div className="item" key={item.id}>
                                <span className={item.class}>{item.number}</span>
                                <h3>{item.h3}</h3>
                                <p>{item.p}</p>
                            </div>)}
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 cover">
                        <Image src="/img/how-its-work-8d04d82e5306574879c11a95b0209547.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}