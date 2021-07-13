import React from "react";
import {Carousel, Container, Image} from "react-bootstrap";

import "./style/Carousel.scss";

export default function CarouselItem() {

    const carouselItems = [
        {id: 1, imgLogo: "/img/logo2.png", span: "CASE STUDY #1", h2: "Data Science in Pharmaceutical Industries", p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores atque reprehenderit soluta, " +
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores atque reprehenderit soluta.", imgCover: "/img/case-study1-98526473e80aa4f143dfb9390f70cdf7.jpg"},
        {id: 2, imgLogo: "/img/logo2.png", span: "CASE STUDY #2", h2: "Mathematics, Advanced Statistics in Python", p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores atque reprehenderit soluta, " +
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores atque reprehenderit soluta.", imgCover: "/img/case-study1-98526473e80aa4f143dfb9390f70cdf7.jpg"}
    ]

    return(
        <div className="main-carousel-container">
           <Container>
               <Carousel touch={true}>
                   {carouselItems.map((item) =>  <Carousel.Item key={item.id}>
                       <div className="carousel-items">
                           <div className="carousel-details">
                               <div className="logo">
                                   <Image src={item.imgLogo} />
                                   <span>{item.span}</span>
                               </div>
                               <div className="title">
                                   <h2>{item.h2}</h2>
                                   <p>{item.p}</p>
                                   <p>{item.p}</p>
                               </div>
                           </div>
                           <div className="image-cover">
                               <Image src={item.imgCover} />
                           </div>
                       </div>
                   </Carousel.Item>)}
               </Carousel>
           </Container>
        </div>
    )
}