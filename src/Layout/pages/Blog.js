import React from "react";
import CoverPages from "../component/Block/CoverPages";
import {Image} from "react-bootstrap";

import "./style/Blog.scss";

export default function Blog() {

    const blogItem = [
        {id: 1, className: "blog-item", imgCover: "/img/blog1.jpg", img: "/img/user1.jpg", userName: "Alex Morgan", history: "April 5, 2020", h3: "The Data Surrounding Higher Education"},
        {id: 2, className: "blog-item", imgCover: "/img/blog2.jpg", img: "/img/user2.jpg", userName: "Sarah Taylor", history: "April 6, 2020", h3: "Conversion Rate the Sales Funnel Optimization"},
        {id: 3, className: "blog-item", imgCover: "/img/blog3.jpg", img: "/img/user3.jpg", userName: "David Warner", history: "April 7, 2020", h3: "Business Data is changing the world’s Energy"},
        {id: 4, className: "blog-item", imgCover: "/img/blog4.jpg", img: "/img/user4.jpg", userName: "David Warner", history: "April 8, 2020", h3: "The data-driven approach to understanding"},
        {id: 5, className: "blog-item", imgCover: "/img/blog5.jpg", img: "/img/user5.jpg", userName: "David Warner", history: "April 9, 2020", h3: "Finding the blocks of neighboring fields"},
        {id: 6, className: "blog-item", imgCover: "/img/blog6.jpg", img: "/img/user6.jpg", userName: "David Warner", history: "April 10, 2020", h3: "Data into Your Enterprise to Drive Insights"},
    ]

    return(
        <div className="main-bolg-container">
            <div className="cover">
                <CoverPages title="Blog" />
            </div>
            <div className="blog-content container">
                <div className="row">
                    {blogItem.map((blog) => <div className="col-lg-4 col-md-6 col-12" key={blog.id}>
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
                    <div className="col-12 text-center page-number">
                        <span> <i className="fas fa-angle-double-left"> </i> </span>
                        <span className="active">1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span> <i className="fas fa-angle-double-right"> </i> </span>
                    </div>
                </div>
            </div>
        </div>
    )
}