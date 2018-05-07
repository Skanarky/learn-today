
import React from "react";
import { connect } from "react-redux";
import CourseraCourse from "./CourseraCourse/CourseraCourse";

class CourseraList extends React.Component {
    render = () => {
        // console.log(this.props);
        const { data, loading, errMsg } = this.props;

        const presentCoCourses = data.map((course, i) => <CourseraCourse key={course.id} id={course.id} index={i} {...course}></CourseraCourse>);
        
        if (loading) {
            return (
                <div style={{ color: "rgba(218, 238, 253, 0.95)", paddingLeft: "15px", fontSize: ".9em" }}>... loading Coursera</div>
            )
        } else if (errMsg) {
            return (
                <div style={{ color: "rgba(218, 238, 253, 0.95)", paddingLeft: "15px", fontSize: ".9em" }}>{errMsg}</div>
            )
        } else {
            return (
                <div className="contain">
                    {presentCoCourses}
                </div>
            )
        }
    }
}

function stateToProps(globalState) {
    return globalState.coCourses;
}

export default connect(stateToProps, {})(CourseraList);