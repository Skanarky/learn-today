
import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Link } from "react-router-dom";

import { getVideos } from "./../../../redux/youtube";
import { getCourses } from "./../../../redux/udemy";
import { getCoCourse } from "./../../../redux/coursera";

import UdemyList from "./UdemyList/UdemyList";
import YoutubeList from "./YoutubeList/YoutubeList";
import CourseraList from "./CourseraList/CourseraList";

class Learn extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = {
            inputs: {
                searchWordYouTube: "",
                searchWordUdemy: ""
            }
        }
        this.state = this.initialState;
    };

    toggleCoursera = () => {
        const { getCoCourse } = this.props;
        getCoCourse();
        this.setState({ ...this.initialState });
    };

    handleChange = (event) => {
        // console.log(event);
        const { value, name } = event.target;
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        });
    }

    handleSubmitYouTube = (event) => {
        event.preventDefault();
        const { searchWordYouTube } = this.state.inputs;
        const searchWordYouTubeFixed = searchWordYouTube.toLowerCase().split(" ").join("+");
        const { getVideos } = this.props;
        getVideos(searchWordYouTubeFixed);
        this.setState({ ...this.initialState });
    }

    handleSubmitUdemy = (event) => {
        event.preventDefault();
        const { searchWordUdemy } = this.state.inputs;
        const searchWordUdemyFixed = searchWordUdemy.toLowerCase().split(" ").join("+");
        const { getCourses } = this.props;
        getCourses(searchWordUdemyFixed);
        this.setState({ ...this.initialState });
    }

    render = () => {
        const { searchWordYouTube, searchWordUdemy } = this.state.inputs;

        return (
            <section className="learn-wrap">
                <div className="buttons">
                    <form className="searches">
                        <div>
                            <input onChange={this.handleChange} name="searchWordUdemy" value={searchWordUdemy} type="text" placeholder="Key Word" />
                        </div>
                        <button onClick={this.handleSubmitUdemy}><Link className="nolineTwo" to="/learn/udemy">Udemy</Link></button>
                    </form>
                    <form className="searches">
                        <div>
                            <input onChange={this.handleChange} name="searchWordYouTube" value={searchWordYouTube} type="text" placeholder="Key Word" />
                        </div>
                        <button onClick={this.handleSubmitYouTube}><Link className="nolineTwo" to="/learn/youtube">YouTube</Link></button>
                    </form>
                    <button onClick={this.toggleCoursera}><Link className="nolineTwo" to="/learn/coursera">Coursera</Link></button>
                </div>
                <Switch>
                    <Route path="/learn/udemy" component={UdemyList}></Route>
                    <Route path="/learn/coursera" component={CourseraList}></Route>
                    <Route path="/learn/youtube" component={YoutubeList}></Route>
                </Switch>
            </section>
        )
    }
}

export default connect(null, { getVideos, getCourses, getCoCourse })(Learn);