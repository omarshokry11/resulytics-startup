import React from "react";
import {Image} from "react-bootstrap";

import "./style/CarouselAlice.scss";

export default function CarouselAlice() {

    return(
        <div className="main-carousel-alice-container">
                <Image src="/img/service2.png" className="img-1" />
                <Image src="/img/service1.png" className="img-2" />
            <div className="container text-center">
                <div className="row">
                    <div className="col-12 title">
                        <h2>What Our Clients are Saying?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}