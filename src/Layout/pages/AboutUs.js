import React from "react";
import CoverPages from "../component/Block/CoverPages";
import HeaderAboutPage from "../component/HeaderAboutPage";

import "./style/AboutUs.scss";

export default function AboutUS() {
    return(
        <div className="main-about-us-container">
            <div className="cover">
                <CoverPages title="About US" />
            </div>
            <div className="about-content">
                <HeaderAboutPage />
            </div>
        </div>
    )
}