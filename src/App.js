import React from "react";
import MainNavBar from "./Layout/component/MainNavBar";
import Home from "./Layout/pages/Home";
import AboutUS from "./Layout/pages/AboutUs";
import Contact from "./Layout/pages/Contact";
import Services from "./Layout/pages/Services";
import CaseStudies from "./Layout/pages/CaseStudies";
import Blog from "./Layout/pages/Blog";
import MainFooter from "./Layout/component/MainFooter";
import { BrowserRouter, Route, Switch } from 'react-router-dom';


export default function App() {
  return (
    <div className="main-app-container">
        <BrowserRouter>
            <MainNavBar />
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/aboutUs" exact component={AboutUS}/>
                <Route path="/contact" exact component={Contact}/>
                <Route path="/service" exact component={Services}/>
                <Route path="/caseStudies" exact component={CaseStudies}/>
                <Route path="/blog" exact component={Blog}/>
            </Switch>
            <MainFooter />
        </BrowserRouter>
    </div>
  );
}
