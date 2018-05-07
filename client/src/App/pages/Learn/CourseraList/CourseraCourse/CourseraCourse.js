
import React from "react";
import { Link } from "react-router-dom";

class CourseraCourse extends React.Component {
    render = () => {
        // console.log(this.props);
        const { /*id*/ name, photo } = this.props;
        const searchCoursera = name.toLowerCase().split(" ").join("+");
        return (
            <div className="singleItem">
                <Link to={`https://www.coursera.org/courses?languages=en&query=${searchCoursera}&userQuery=${searchCoursera}`} target="_blank" className="nolineThree"><p>{name}</p></Link>
                <Link to={`https://www.coursera.org/courses?languages=en&query=${searchCoursera}&userQuery=${searchCoursera}`} target="_blank" className="nolineThree"><img src={photo} alt="Udemy course" /></Link>
                <div>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}

export default CourseraCourse;