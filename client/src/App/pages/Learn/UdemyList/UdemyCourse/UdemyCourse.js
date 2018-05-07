
import React from "react";
import { Link } from "react-router-dom";

class UdemyCourse extends React.Component {
    render = () => {
        // console.log(this.props);
        const { /*id*/ title, url, price, image_480x270 } = this.props;
        const urlUdemy = "https://www.udemy.com";
        const urlCourse = urlUdemy.concat(url)
        return (
            <div className="singleItem">
                <Link to={urlCourse} target="_blank" className="nolineThree"><p>{title}; Price: {price}</p></Link>
                <Link to={urlCourse} target="_blank" className="nolineThree"><img src={image_480x270} alt="Udemy course" /></Link>
                <div>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}

export default UdemyCourse;