
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
                <div style={{ color: "rgba(199, 2, 2, 0.63)", paddingLeft: "15px", fontSize: ".9em" }}>... loading Udemy</div>
            )
        } else if (errMsg) {
            return (
                <div style={{ color: "rgba(199, 2, 2, 0.63)", paddingLeft: "15px", fontSize: ".9em" }}>{errMsg}</div>
            )
        } else if (data && data.length > 0) {
            return (
                <div className="contain">
                    {presentCourses}
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}

function stateToProps(globalState) {
    return globalState.courses;
}

export default connect(stateToProps, {})(UdemyList);