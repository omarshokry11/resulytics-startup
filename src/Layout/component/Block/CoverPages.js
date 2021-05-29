import React from "react";
import {Link} from "react-router-dom";

import "./style/CoverPages.scss";

export default function CoverPages(props) {
    return(
        <div className="main-cover-pages-container">
            <div className="cover-page">
                <div className="details">
                    <h2>{props.title}</h2>
                    <div className="link-page">
                        <Link to="/">Home</Link>
                        <i className="fas fa-chevron-right"> </i>
                        <span>{props.title}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}