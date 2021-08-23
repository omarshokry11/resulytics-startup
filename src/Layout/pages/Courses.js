import React from "react";
import {Image} from "react-bootstrap";
import CoverPages from "../component/Block/CoverPages";

import "./style/Courses.scss";

export default function Courses() {

    const coursesItems = [
        {id: 1, itemImg: "/img/course1.jpg", class: "free", text: "Free", imgUser: "/img/user1.jpg", userName: "Alex Morgan", h3: "Introduction to Quantitative Methods", p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
                "sed do eiusmod tempor incididunt ut labore et dolore.",
            ul: [
                {id: 1, icon: "fas fa-calendar", title: "8 Weeks Long"},
                {id: 2, icon: "fas fa-users", title: "Available Now"}
            ]
        },
        {id: 2, itemImg: "/img/course2.jpg", class: "price", text: "Free", imgUser: "/img/user2.jpg", userName: "Sarah Taylor", h3: "Introduction to Linear Models and Matrix Algebra", p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
                "sed do eiusmod tempor incididunt ut labore et dolore.",
            ul: [
                {id: 1, icon: "fas fa-calendar", title: "7 Weeks Long"},
                {id: 2, icon: "fas fa-users", title: "Available Now"}
            ]
        },
        {id: 3, itemImg: "/img/course3.jpg", class: "price", text: "Free", imgUser: "/img/user3.jpg", userName: "David Warner", h3: "Data Science: Inference and Modeling", p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
                "sed do eiusmod tempor incididunt ut labore et dolore.",
            ul: [
                {id: 1, icon: "fas fa-calendar", title: "2 Weeks Long"},
                {id: 2, icon: "fas fa-users", title: "Available Now"}
            ]
        },
        {id: 4, itemImg: "/img/course4.jpg", class: "price", text: "Free", imgUser: "/img/user4.jpg", userName: "Alex Morgan", h3: "The Data Science Course: Complete Data Science", p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
                "sed do eiusmod tempor incididunt ut labore et dolore.",
            ul: [
                {id: 1, icon: "fas fa-calendar", title: "3 Weeks Long"},
                {id: 2, icon: "fas fa-users", title: "Available Now"}
            ]
        },
        {id: 5, itemImg: "/img/course5.jpg", class: "price", text: "Free", imgUser: "/img/user5.jpg", userName: "David Warner", h3: "Java Programming Masterclass for Developers", p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
                "sed do eiusmod tempor incididunt ut labore et dolore.",
            ul: [
                {id: 1, icon: "fas fa-calendar", title: "3 Weeks Long"},
                {id: 2, icon: "fas fa-users", title: "Available Now"}
            ]
        },
        {id: 6, itemImg: "/img/course6.jpg", class: "price", text: "Free", imgUser: "/img/user6.jpg", userName: "David Warner", h3: "Machine Learning A-Z™: Hands-On Python", p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
                "sed do eiusmod tempor incididunt ut labore et dolore.",
            ul: [
                {id: 1, icon: "fas fa-calendar", title: "2 Weeks Long"},
                {id: 2, icon: "fas fa-users", title: "Available Now"}
            ]
        },
    ]

    return(
        <div className="main-courses-container">
            <div className="cover">
                <CoverPages title="Course Grid" />
            </div>
            <div className="main-courses-content">
                <div className="container">
                    <div className="row">
                        {coursesItems.map((item) => <div className="col-lg-4 col-md-6 col-12" key={item.id}>
                            <div className="item">
                                <div className="item-img">
                                    <Image src={item.itemImg} />
                                </div>
                                <span className={item.class}>{item.text}</span>
                                <div className="item-details">
                                    <div className="item-user">
                                        <Image src={item.imgUser} />
                                        <p className="user-name">{item.userName}</p>
                                    </div>
                                    <h3>{item.h3}</h3>
                                    <p>{item.p}</p>
                                    {item.ul.map((li) => <ul key={li.id}>
                                        <li><i className={li.icon}> </i> {li.title}</li>
                                    </ul>)}
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
        </div>
    )
}