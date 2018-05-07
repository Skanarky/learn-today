
import React from "react";
import { connect } from "react-redux";
import UdemyCourse from "./UdemyCourse/UdemyCourse";

class UdemyList extends React.Component {

    render = () => {
        // console.log(this.props);
        const { data, loading, errMsg } = this.props;

        const presentCourses = data.map((course, i) => <UdemyCourse key={course.id} id={course.id} index={i} {...course}></UdemyCourse>);
        if (loading) {
            return (
                <div style={{ color: "rgba(218, 238, 253, 0.95)", paddingLeft: "15px", fontSize: ".9em" }}>... loading Udemy</div>
            )
        } else if (errMsg) {
            return (
                <div style={{ color: "rgba(218, 238, 253, 0.95)", paddingLeft: "15px", fontSize: ".9em" }}>{errMsg}</div>
            )
        } else {
            return (
                <div className="contain">
                    {presentCourses}
                </div>
            )
        }
    }
}

function stateToProps(globalState) {
    return globalState.courses;
}

export default connect(stateToProps, {})(UdemyList);