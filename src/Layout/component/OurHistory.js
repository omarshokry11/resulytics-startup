import React from "react";
import Logo from "./Block/Logo";
import {Image} from "react-bootstrap";

import "./style/OurHistory.scss";

export default function OurHistory() {

    const ourHistoryItems = [
        {id: 1, h3: "Founded", p: "Real innovations and a positive customer experience are the heart of successful communication. Lorem ipsum dolor sit amet, sectetur adipiscing elit, " +
                "tempor incididunt ut labore et dolore magna.", img: "/img/blog1.jpg"
        },
        {id: 2, h3: "Global Success", p: "Real innovations and a positive customer experience are the heart of successful communication. Lorem ipsum dolor sit amet, sectetur adipiscing elit, " +
                "tempor incididunt ut labore et dolore magna.", img: "/img/blog2.jpg"
        },
        {id: 3, h3: "Founded Data Center", p: "Real innovations and a positive customer experience are the heart of successful communication. Lorem ipsum dolor sit amet, sectetur adipiscing elit, " +
                "tempor incididunt ut labore et dolore magna.", img: "/img/blog3.jpg"
        },
        {id: 4, h3: "International Award", p: "Real innovations and a positive customer experience are the heart of successful communication. Lorem ipsum dolor sit amet, sectetur adipiscing elit, " +
                "tempor incididunt ut labore et dolore magna.", img: "/img/blog5.jpg"
        }
    ]

    return(
        <div className="main-our-history-content">
            <div className="title text-center">
                <Logo text="OUR HISTORY" />
                <h2>History Begins in 2010</h2>
            </div>
            <div className="container">
                <div className="row">
                    {ourHistoryItems.map((item) => <div className="col-12 item" key={item.id}>
                        <div className="item-details">
                            <h3>{item.h3}</h3>
                            <p>{item.p}</p>
                        </div>
                        <div className="item-img">
                            <Image src={item.img} />
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}