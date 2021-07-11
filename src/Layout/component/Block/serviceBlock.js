import React from "react";
import {Image} from "react-bootstrap";
import {Link} from "react-router-dom";

import "./style/serviceBlock.scss";

export default function ServiceBlock() {

    const item = [
        {id: 1, img: "/img/item(1).png", h3: "10 Years", p: "On the market"},
        {id: 2, img: "/img/item(2).png", h3: "50+", p: "Team Members"},
        {id: 3, img: "/img/item(3).png", h3: "100%", p: "Satisfaction Rate"},
        {id: 4, img: "/img/item(4).png", h3: "90%", p: "Senior Scientist"}
    ]

    const serviceItem = [
        {id: 1, classNameIcon: "icon-1 icon", img: "/img/service3.png", imgIcon: "/img/item(1).png", h3: "Big Data Analysis", p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua.", icon: "fas fa-arrow-right", link: "Read More"},
        {id: 2, classNameIcon: "icon-2 icon", img: "/img/service3.png", imgIcon: "/img/item(3).png", h3: "Robust Analytics", p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua.", icon: "fas fa-arrow-right", link: "Read More"},
        {id: 3, classNameIcon: "icon-3 icon", img: "/img/service3.png", imgIcon: "/img/item(2).png", h3: "Marketing Analytics", p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua.", icon: "fas fa-arrow-right", link: "Read More"},
        {id: 4, classNameIcon: "icon-4 icon", img: "/img/service3.png", imgIcon: "/img/item(6).png", h3: "Data Visualization", p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua.", icon: "fas fa-arrow-right", link: "Read More"},
        {id: 5, classNameIcon: "icon-5 icon", img: "/img/service3.png", imgIcon: "/img/item(5).png", h3: "Securities Research", p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua.", icon: "fas fa-arrow-right", link: "Read More"},
        {id: 6, classNameIcon: "icon-6 icon", img: "/img/service3.png", imgIcon: "/img/item(7).png", h3: "Data Governance", p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua.", icon: "fas fa-arrow-right", link: "Read More"},
    ]

    return(
        <div className="main-service-content-container">
            <div className="item-container">
                <div className="container text-center">
                    <div className="row">
                        {item.map((item) => <div className="col-md-3 col-6 item-content" key={item.id}>
                            <div className="item-icon">
                                <Image src={item.img} />
                            </div>
                            <div className="item-details">
                                <h3>{item.h3}</h3>
                                <p>{item.p}</p>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
            <div className="main-service-container">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center title">
                            <h2>Services We Can Help You With</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                        </div>
                        {serviceItem.map((service) => <div className="col-lg-4 col-md-6 col-12 service-item" key={service.id}>
                            <div className="item">
                                <Image src={service.img} className="img" />
                                <div className={service.classNameIcon}>
                                    <Image src={service.imgIcon} />
                                </div>
                                <div className="details">
                                    <h3>{service.h3}</h3>
                                    <p>{service.p}</p>
                                    <Link to="/" className="link-item"><i className={service.icon}> </i> {service.link}</Link>
                                </div>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}