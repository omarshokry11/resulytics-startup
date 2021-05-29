import React from "react";
import CoverPages from "../component/Block/CoverPages";
import {Image} from "react-bootstrap";

import "./style/PageContact.scss";

export default function PageContact() {
    return(
        <div className="main-contact-container">
            <div className="cover">
                <CoverPages title="Contact" />
            </div>
            <div className="container contact-item">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12 item">
                        <div className="icon">
                            <i className="fas fa-map-marker-alt"> </i>
                        </div>
                        <div className="details">
                            <h3>Our Address</h3>
                            <p>175 5th Ave, New York, NY 10010, United States</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 item">
                        <div className="icon">
                            <i className="fas fa-phone-volume"> </i>
                        </div>
                        <div className="details">
                            <h3>Our Address</h3>
                            <p>Mobile: (+44) - 45789 - 5789</p>
                            <p>E-mail: hello@rewy.com</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-12 item">
                        <div className="icon">
                            <i className="far fa-clock"> </i>
                        </div>
                        <div className="details">
                            <h3>Contact</h3>
                            <p>Monday - Friday: 09:00 - 20:00</p>
                            <p>Sunday & Saturday: 10:30 - 22:00</p>
                        </div>
                    </div>
                    <div className="col-12 item-text text-center">
                        <Image src="/img/logo2.png" />
                        <span>GET IN TOUCH</span>
                        <h2>Ready to Get Started?</h2>
                        <p>Your email address will not be published. Required fields are marked *</p>
                    </div>
                    <div className="col-lg-6 col-12 form-img">
                        <Image src="/img/contact-c0548c3689209f9e7929cf8a215dff62.png" />
                    </div>
                    <div className="col-lg-6 col-12 form">
                        <input type="text" placeholder="Your name"/>
                        <input type="text" placeholder="Your email address"/>
                        <input type="text" placeholder="Your phone number"/>
                        <textarea placeholder="Write your message" cols="30" rows="6" />
                        <button className="link-btn"><i className="fas fa-check"> </i>Send message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}