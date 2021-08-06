import React from "react";
import {Image} from "react-bootstrap";
import Logo from "./Block/Logo";
import CarouselAliceItem from "./CarouselAlice";

import "./style/OurClients.scss";

export default function OurClients() {

    const items = [
        {id: 1, img: "/img/user1.jpg", p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at consectetur cumque dolore et, " +
                "eum explicabo facere fugit molestias mollitia, necessitatibus, nemo placeat quaerat qui quisquam saepe sed ut veritatis?", name: "Alex Maxwell", job: "CEO at EnvyTheme"},
        {id: 2, img: "/img/user2.jpg", p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at consectetur cumque dolore et, " +
                "eum explicabo facere fugit molestias mollitia, necessitatibus, nemo placeat quaerat qui quisquam saepe sed ut veritatis?", name: "Sarah Taylor", job: "CEO at EnvyTheme"},
        {id: 3, img: "/img/user3.jpg", p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at consectetur cumque dolore et, " +
                "eum explicabo facere fugit molestias mollitia, necessitatibus, nemo placeat quaerat qui quisquam saepe sed ut veritatis?", name: "David Warner", job: "CEO at EnvyTheme"}
    ]

    const image = [
        {id: 1, image: "/img/img1.png"},
        {id: 2, image: "/img/img2.png"},
        {id: 3, image: "/img/img3.png"},
        {id: 4, image: "/img/img4.png"},
        {id: 5, image: "/img/img5.png"},
        {id: 6, image: "/img/img6.png"},
    ]

    return(
        <div className="main-our-clients-container text-center">
            <Logo text="TESTIMONIALS" />
            <CarouselAliceItem items={items} />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <button className="btn-service"><i className="fas fa-eye"> </i> Check Out All Review</button>
                    </div>
                    {image.map((img) => <div className="col-lg-2 col-6 img" key={img.id}>
                        <Image src={img.image} />
                    </div>)}
                </div>
            </div>
        </div>
    )
}