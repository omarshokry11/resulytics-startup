import React from "react";
import CoverHome from "../component/Block/CoverHome";
import BusinessFromComponent from "../component/BusinessFromComponent";
import Research from "../component/Block/Research";
import Services from "./Services";

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
                <Services />
            </div>
        </div>
    )
}