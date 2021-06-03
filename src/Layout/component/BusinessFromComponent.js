import React from "react";
import {Link} from "react-router-dom";

import "./style/BusinessFromComponent.scss";

export default function BusinessFromComponent(){
    return(
        <div className="main-business-from">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center title-details">
                        <h2>How We Take Your Business From Good To Great</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 item item-1">
                        <div className="icon">
                            <i className="fas fa-search"> </i>
                        </div>
                        <div className="item-details">
                            <h3>Analyze Your Data Needs</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            <Link to="/" className="link-item"><i className="fas fa-arrow-right"> </i> Read More</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 item item-2">
                        <div className="icon">
                            <i className="fas fa-chess-board"> </i>
                        </div>
                        <div className="item-details">
                            <h3>Develop A Customized Plan</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            <Link to="/" className="link-item"><i className="fas fa-arrow-right"> </i> Read More</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-12 item item-3">
                        <div className="icon">
                            <i className="far fa-lightbulb"> </i>
                        </div>
                        <div className="item-details">
                            <h3>Implement Your Solution</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            <Link to="/" className="link-item"><i className="fas fa-arrow-right"> </i> Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}