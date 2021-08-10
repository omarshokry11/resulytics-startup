import React from "react";
import {Image} from "react-bootstrap";
import CoverPages from "../component/Block/CoverPages";

import "./style/CaseStudies.scss";

export default function CaseStudies() {

    const caseItem = [
        {id: 1, img: "/img/case1.jpg", icon: "fas fa-plus-circle", h3: "Movie Recommendation", p: "System Project"},
        {id: 2, img: "/img/case2.jpg", icon: "fas fa-plus-circle", h3: "Customer Segmentation", p: "Machine Learning"},
        {id: 3, img: "/img/case3.jpg", icon: "fas fa-plus-circle", h3: "Data Analysis", p: "Web Project"},
        {id: 4, img: "/img/case4.jpg", icon: "fas fa-plus-circle", h3: "Detection Project", p: "Programming"},
        {id: 5, img: "/img/case5.jpg", icon: "fas fa-plus-circle", h3: "Data Scientist", p: "Data Scientist"},
        {id: 6, img: "/img/case6.jpg", icon: "fas fa-plus-circle", h3: "Benefits Research", p: "Science Projects"},
    ]

    return(
        <div className="main-case-studies-content">
            <div className="cover">
                <CoverPages title="Case Studies 2 Columns" />
            </div>
            <div className="case-studies-container">
                <div className="container">
                    <div className="row">
                        {caseItem.map((item) => <div className="col-md-6 col-12 margin-bottom" key={item.id}>
                            <div className="case-studies-item">
                                <div className="item-cover">
                                    <Image src={item.img} />
                                    <div className="color">
                                        <i className={item.icon}> </i>
                                    </div>
                                </div>
                                <div className="item-details">
                                    <h3>{item.h3}</h3>
                                    <p>{item.p}</p>
                                </div>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}