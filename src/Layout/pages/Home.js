import React from "react";
import CoverHome from "../component/Block/CoverHome";
import BusinessFromComponent from "../component/BusinessFromComponent";
import Research from "../component/Block/Research";
import ServiceBlock from "../component/Block/serviceBlock";
import CarouselAliceItem from "../component/CarouselAlice";
import Industries from "../component/Block/Industries";
import OurTeam from "../component/Block/OurTeam";
import CarouselItem from "../component/Carousel";
import ValuableInsights from "../component/Block/ValuableInsights";
import CoverService from "../component/Block/CoverService";

import "./style/Home.scss";
import {Image} from "react-bootstrap";

export default function Home(){

    const items = [
        {id: 1, img: "/img/user1.jpg", p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at consectetur cumque dolore et, " +
                "eum explicabo facere fugit molestias mollitia, necessitatibus, nemo placeat quaerat qui quisquam saepe sed ut veritatis?", name: "Alex Maxwell", job: "CEO at EnvyTheme"},
        {id: 2, img: "/img/user2.jpg", p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at consectetur cumque dolore et, " +
                "eum explicabo facere fugit molestias mollitia, necessitatibus, nemo placeat quaerat qui quisquam saepe sed ut veritatis?", name: "Sarah Taylor", job: "CEO at EnvyTheme"},
        {id: 3, img: "/img/user3.jpg", p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at consectetur cumque dolore et, " +
                "eum explicabo facere fugit molestias mollitia, necessitatibus, nemo placeat quaerat qui quisquam saepe sed ut veritatis?", name: "David Warner", job: "CEO at EnvyTheme"}
    ]

    return(
        <div className="main-home-content-container">
            <div className="cover-home">
                <CoverHome />
            </div>
            <div className="content-home">
                <BusinessFromComponent />
                <Research />
                <ServiceBlock />
                <div className="carousel-alice-content">
                    <Image src="/img/service2.png" className="img-1" />
                    <Image src="/img/service1.png" className="img-2" />
                    <CarouselAliceItem items={items} />
                </div>
                <Industries />
                <OurTeam />
                <CarouselItem />
                <ValuableInsights />
                <CoverService />
            </div>
        </div>
    )
}