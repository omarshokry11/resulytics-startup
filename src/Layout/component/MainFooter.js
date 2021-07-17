import React from "react";
import {Image} from "react-bootstrap";
import {Link} from "react-router-dom";

import "./style/MainFooter.scss";

export default function MainFooter(){
    return(
        <div className="main-footer-container">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12">
                        <Image src="/img/logo.png" />
                        <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>
                        <div className="social">
                            <span>
                                <i className="fab fa-facebook-f"> </i>
                            </span>
                            <span>
                                <i className="fab fa-twitter"> </i>
                            </span>
                            <span>
                               <i className="fab fa-instagram"> </i>
                            </span>
                            <span>
                               <i className="fab fa-linkedin-in"> </i>
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-12 footer-item">
                        <h3>Explore</h3>
                        <div className="link">
                            <Link to="/">Home</Link>
                            <Link to="/aboutUS">About</Link>
                            <Link to="/studies">Case Studies</Link>
                            <Link to="/blog">Our Blog</Link>
                            <Link to="/contact">Contact</Link>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-12 footer-item">
                        <h3>Resources</h3>
                        <div className="link">
                            <Link to="/">Our Scientists</Link>
                            <Link to="/service">Our Services</Link>
                            <Link to="/studies">Testimonials</Link>
                            <Link to="/blog">SaaS Solutions</Link>
                            <Link to="/studies">Case Studies</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 footer-item">
                        <h3>Address</h3>
                        <div className="link">
                            <p><i className="fas fa-map-marker-alt"> </i> 175 5th Ave, New York, NY 10010,<br/> <span>United States</span></p>
                            <Link to="/"><i className="fas fa-phone-alt"> </i> +1 (123) 456 7890</Link>
                            <Link to="/"><i className="fas fa-envelope"> </i> hello@rewy.com</Link>
                            <Link to="/"><i className="far fa-envelope-open"> </i> +55 785 4578964</Link>
                        </div>
                    </div>
                    <div className="inner-footer d-lg-block d-none">
                        <p>Copyright @2021 <strong>Rewy</strong> All rights reserved <span>Envy Theme</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}