import React from "react";
import { Switch, Route } from "react-router-dom";

import Video from "./Video/Video";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import About from "./pages/About";
import Home from "./pages/Home";
import Learn from "./pages/Learn/Learn";

const App = () => {
    return (
        <div className="wrapper">
            <Video></Video>
            <Header></Header>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/learn" component={Learn}></Route>
                <Route path="/about" component={About}></Route>
            </Switch>
            <Footer></Footer>
        </div>
    )
}

export default App;

