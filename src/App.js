import React from "react";
import MainNavBar from "./Layout/component/MainNavBar";
import MainHome from "./Layout/pages/MainHome";
import { BrowserRouter, Route, Switch } from 'react-router-dom';


export default function App() {
  return (
    <div>
        <BrowserRouter>
            <MainNavBar />
            <Switch>
                <Route path="/" exact component={MainHome}/>
            </Switch>
        </BrowserRouter>
    </div>
  );
}
