import React from "react";
import MainNavBar from "./Layout/component/MainNavBar";
import PageHome from "./Layout/pages/PageHome";
import PageContact from "./Layout/pages/PageContact";
import { BrowserRouter, Route, Switch } from 'react-router-dom';


export default function App() {
  return (
    <div>
        <BrowserRouter>
            <MainNavBar />
            <Switch>
                <Route path="/" exact component={PageHome}/>
                <Route path="/contact" exact component={PageContact}/>
            </Switch>
        </BrowserRouter>
    </div>
  );
}
