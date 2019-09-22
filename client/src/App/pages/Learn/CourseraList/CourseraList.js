
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
                <div style={{ color: "rgba(199, 2, 2, 0.63)", paddingLeft: "15px", fontSize: ".9em" }}>... loading Coursera</div>
            )
        } else if (errMsg) {
            return (
                <div style={{ color: "rgba(199, 2, 2, 0.63)", paddingLeft: "15px", fontSize: ".9em" }}>{errMsg}</div>
            )
        } else if (data && data.length > 0) {
            return (
                <div className="contain">
                    {presentCoCourses}
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
    return globalState.coCourses;
}

export default connect(stateToProps, {})(CourseraList);