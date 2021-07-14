import React from "react";
import {Image} from "react-bootstrap";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import "./style/CarouselAlice.scss";

export default function CarouselAliceItem() {

    const items = [
        {id: 1, img: "/img/user1.jpg", p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at consectetur cumque dolore et, " +
                "eum explicabo facere fugit molestias mollitia, necessitatibus, nemo placeat quaerat qui quisquam saepe sed ut veritatis?", name: "Alex Maxwell", job: "CEO at EnvyTheme"},
        {id: 2, img: "/img/user2.jpg", p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at consectetur cumque dolore et, " +
                "eum explicabo facere fugit molestias mollitia, necessitatibus, nemo placeat quaerat qui quisquam saepe sed ut veritatis?", name: "Sarah Taylor", job: "CEO at EnvyTheme"},
        {id: 3, img: "/img/user3.jpg", p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at consectetur cumque dolore et, " +
                "eum explicabo facere fugit molestias mollitia, necessitatibus, nemo placeat quaerat qui quisquam saepe sed ut veritatis?", name: "David Warner", job: "CEO at EnvyTheme"}
    ]

    const responsive = {
        0: {items: 1},
        576: {items: 1},
        768: {items: 2},
        1024: {items: 2},
    };

    return(
        <div className="main-carousel-alice-container">
            <Image src="/img/service2.png" className="img-1" />
            <Image src="/img/service1.png" className="img-2" />
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
                    {items.map((item) => <div className="items" key={item.id}>
                        <div className="item">
                            <Image src={item.img} />
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