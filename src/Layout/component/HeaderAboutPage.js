import React from "react";
import {Image} from "react-bootstrap";

import "./style/HeaderAboutPage.scss";

export default function HeaderAboutPage() {

    const items = [
        {id: 1, img: "/img/item(1).png", h3: "10 Years", p: "On the market"},
        {id: 2, img: "/img/item(2).png", h3: "45+", p: "Team members"},
        {id: 3, img: "/img/item(3).png", h3: "100%", p: "Satisfaction rate"},
        {id: 4, img: "/img/item(4).png", h3: "80%", p: "Senior scientist"},
    ]

    const itemDetails = [
        {id: 1, className: "col-lg-4 col-md-6 col-12 items-details", title: "Our History", details: "Real innovations and a positive customer experience are the heart of successful communication.",
            ul: [
                {id: 1, li: "Activate Listening", icon: "fas fa-check"},
                {id: 2, li: "Brilliant minds", icon: "fas fa-check"},
                {id: 3, li: "Better. Best. Wow!", icon: "fas fa-check"},
                {id: 4, li: "Branding it better!", icon: "fas fa-check"},
            ]
        },
        {id: 2, className: "col-lg-4 col-md-6 col-12 items-details", title: "Our Mission", details: "Real innovations and a positive customer experience are the heart of successful communication.",
            ul: [
                {id: 1, li: "Creating. Results.", icon: "fas fa-check"},
                {id: 2, li: "Expect more", icon: "fas fa-check"},
                {id: 3, li: "Good thinking", icon: "fas fa-check"},
                {id: 4, li: "In real we trust", icon: "fas fa-check"},
            ]
        },
        {id: 3, className: "col-lg-4 col-12 items-details item-3", title: "Who we are", details: "Real innovations and a positive customer experience are the heart of successful communication.",
            ul: [
                {id: 1, li: "Stay real. Always.", icon: "fas fa-check"},
                {id: 2, li: "We have you covered", icon: "fas fa-check"},
                {id: 3, li: "We turn heads", icon: "fas fa-check"},
                {id: 4, li: "Your brand, promoted", icon: "fas fa-check"},
            ]
        }
    ]

    return(
        <div className="header-about-content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12 cover">
                        <Image src="/img/about-img5-a6cccb5b8dfcd5da5d99b9d3b83a3991.png" />
                    </div>
                    <div className="col-lg-6 col-12 details">
                        <div className="logo">
                            <Image src="/img/logo2.png" />
                            <span>ABOUT US</span>
                        </div>
                        <div className="title">
                            <h2>Drive Digital Revolution Through Data Science</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                        </div>
                        <div className="cover-items-details">
                            {items.map((item) => <div className="item" key={item.id}>
                                <div className="img">
                                    <Image src={item.img} />
                                </div>
                                <div className="item-details">
                                    <h3>{item.h3}</h3>
                                    <p>{item.p}</p>
                                </div>
                            </div>)}
                        </div>
                        <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                        <button className="link-btn"><i className="fas fa-arrow-right"> </i> More About Us</button>
                    </div>
                    {itemDetails.map((details) => <div className={details.className} key={details.id}>
                        <h3>{details.title}</h3>
                        <p>{details.details}</p>
                        {details.ul.map((li) => <ul key={li.id}>
                            <li><i className={li.icon}> </i> {li.li}</li>
                        </ul>)}
                    </div>)}
                </div>
            </div>
        </div>
    )
}