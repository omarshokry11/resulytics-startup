import React from "react";
import MainNavBar from "./Layout/component/MainNavBar";
import Home from "./Layout/pages/Home";
import Contact from "./Layout/pages/Contact";
import Services from "./Layout/pages/Services";
import Blog from "./Layout/pages/Blog";
import { BrowserRouter, Route, Switch } from 'react-router-dom';


export default function App() {
  return (
    <div>
        <BrowserRouter>
            <MainNavBar />
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/contact" exact component={Contact}/>
                <Route path="/service" exact component={Services}/>
                <Route path="/blog" exact component={Blog}/>
            </Switch>
        </BrowserRouter>
    </div>
  );
}
