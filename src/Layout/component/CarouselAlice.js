import React from "react";
import {Image} from "react-bootstrap";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import "./style/CarouselAlice.scss";

export default function CarouselAliceItem(props) {

    const responsive = {
        0: {items: 1},
        576: {items: 1},
        768: {items: 1},
        1024: {items: 2},
    };

    return(
        <div className="main-carousel-alice-container">
            <div className="title text-center">
                <h2>What Our Clients are Saying?</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
            </div>
            <div className="products-carousel-section container text-center">
                <AliceCarousel
                    autoPlay
                    activeIndex={0}
                    infinite={true}
                    responsive={responsive}
                    autoPlayInterval={1000}
                    fadeOutAnimation={false}
                    dotsDisabled={true}
                    touchTrackingEnabled={true}
                    mouseTrackingEnabled={true}
                >
                    {props.items.map((item) => <div className="items" key={item.id}>
                        <div className="item">
                            <Image src={item.img} className="user-img" />
                            <p>{item.p}</p>
                            <h3>{item.name}</h3>
                            <span>{item.job}</span>
                        </div>
                    </div>)}
                </AliceCarousel>
            </div>
        </div>
    )
}