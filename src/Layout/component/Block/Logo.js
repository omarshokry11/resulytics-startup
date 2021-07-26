import React from "react";
import {Image} from "react-bootstrap";

import "./style/Logo.scss";

export default function Logo(props) {
    return(
        <div className="logo">
            <Image src="/img/logo2.png" />
            <span>{props.text}</span>
        </div>
    )
}