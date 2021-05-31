import React from "react";
import MainNavBar from "./Layout/component/MainNavBar";
import Home from "./Layout/pages/Home";
import Contact from "./Layout/pages/Contact";
import { BrowserRouter, Route, Switch } from 'react-router-dom';


export default function App() {
  return (
    <div>
        <BrowserRouter>
            <MainNavBar />
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/contact" exact component={Contact}/>
            </Switch>
        </BrowserRouter>
    </div>
  );
}
