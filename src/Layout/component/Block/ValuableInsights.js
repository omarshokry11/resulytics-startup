import React from "react";
import {Image} from "react-bootstrap";

import "./style/ValuableInsights.scss";

export default function ValuableInsights() {

    const blogItem = [
        {id: 1, class: "col-lg-4 col-md-6 col-12", className: "blog-item", imgCover: "/img/blog1.jpg", img: "/img/user1.jpg", userName: "Alex Morgan", history: "April 30, 2020", h3: "Six Ways to Make Smarter Decisions"},
        {id: 2, class: "col-lg-4 col-md-6 col-12", className: "blog-item", imgCover: "/img/blog2.jpg", img: "/img/user2.jpg", userName: "Sarah Taylor", history: "April 28, 2020", h3: "The Challenges to Tackle Before You Start With AI"},
        {id: 3, class: "col-lg-4 col-12", className: "blog-item blog-item-3", imgCover: "/img/blog3.jpg", img: "/img/user3.jpg", userName: "David Warner", history: "April 29, 2020", h3: "Why Organisations Want an Analytics Platform"}
    ]

    return(
        <div className="main-valuable-insights-container">
            <div className="container">
                <div className="row">
                    <div className="cover col-12">
                        <Image src="/img/vector-shape5-5e898e657e7332c9b61917d55962c452.png" className="cover-1" />
                        <Image src="/img/vector-shape2-0d81d5ff840eb9b211286a9f0dd5a7c3.png" className="cover-2" />
                    </div>
                    <div className="col-12 title text-center">
                        <h2>Latest Valuable Insights</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    </div>
                    {blogItem.map((blog) => <div className={blog.class} key={blog.id}>
                        <div className={blog.className}>
                            <Image src={blog.imgCover} />
                            <div className="blog-item-details">
                                <div className="img">
                                    <Image src={blog.img} />
                                    <span>{blog.userName}</span>
                                </div>
                                <div className="history">
                                    <i className="far fa-calendar"> </i>
                                    <span>{blog.history}</span>
                                </div>
                                <h3>{blog.h3}</h3>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}