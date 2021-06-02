import React from "react";
import {Link} from "react-router-dom";
import CoverHome from "../component/Block/CoverHome";

import "./style/Home.scss";

export default function Home(){
    return(
        <div className="main-home-content-container">
            <div className="cover-home">
                <CoverHome />
            </div>
            <div className="container content-home">
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
                            <Link to="/"><i className="fas fa-arrow-right"> </i> Read More</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 item item-2">
                        <div className="icon">
                            <i className="fas fa-chess-board"> </i>
                        </div>
                        <div className="item-details">
                            <h3>Develop A Customized Plan</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            <Link to="/"><i className="fas fa-arrow-right"> </i> Read More</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-12 item item-3">
                        <div className="icon">
                            <i className="far fa-lightbulb"> </i>
                        </div>
                        <div className="item-details">
                            <h3>Implement Your Solution</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            <Link to="/"><i className="fas fa-arrow-right"> </i> Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}