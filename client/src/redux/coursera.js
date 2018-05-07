import axios from "axios";

const courseraUrl = "https://vschool-cors.herokuapp.com?url=https://www.coursera.org/maestro/api/topic/list?full=1";

const initialState = {
    data: [],
    loading: true,
    errMsg: ""
}

const courseraReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_COURSE_CO":
            return {
                ...state,
                data: action.coCourse,
                loading: false
            }
        case "ERR_MSG":
            return {
                ...state,
                errMsg: action.errMsg,
                loading: false
            }
        default:
            return state
    }
}


// action creators:

export const getCoCourse = () => {
    return dispatch => {
        axios.get(courseraUrl)
            .then(response => {
                // console.log(response.data);
                dispatch({
                    type: "GET_COURSE_CO",
                    coCourse: response.data
                });
            })
            .catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    errMsg: "Sorry, data unavailable!"
                });
            });
    }
}

export default courseraReducer;