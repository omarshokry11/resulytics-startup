import React from "react";

import "./style/Industries.scss";


export default function Industries() {

    const industriesItems = [
        {id: 1, icon: "fas fa-industry", title: "Manufacturing"},
        {id: 2, icon: "fas fa-hospital", title: "Healthcare"},
        {id: 3, icon: "fas fa-truck-moving", title: "Automobile"},
        {id: 4, icon: "fas fa-coins", title: "Banking"},
        {id: 5, icon: "fas fa-home", title: "Real Estate"},
        {id: 6, icon: "fas fa-warehouse", title: "Logistic"},
        {id: 7, icon: "fas fa-users", title: "Insurance"},
        {id: 8, icon: "fab fa-bitcoin", title: "Capital Markets"},
    ]

    return(
        <div className="main-industries-container">
            <div className="container">
                <div className="row">
                    <div className="col-12 title text-center">
                        <h2>Industries We Serve</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    </div>
                    {industriesItems.map((industries) =>  <div className="col-lg-3 col-md-6 col-12" key={industries.id}>
                        <div className="item">
                            <i className={industries.icon}> </i>
                            <h6>{industries.title}</h6>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}