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

export default function Home(){
    return(
        <div className="main-home-content-container">
            <div className="cover-home">
                <CoverHome />
            </div>
            <div className="content-home">
                <BusinessFromComponent />
                <Research />
                <ServiceBlock />
                <CarouselAliceItem />
                <Industries />
                <OurTeam />
                <CarouselItem />
                <ValuableInsights />
                <CoverService />
            </div>
        </div>
    )
}