import axios from "axios";

const initialState = {
    data: [],
    loading: true,
    errMsg: ""
}

const youtubeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_VIDEO":
            return {
                ...state,
                data: action.videos,
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

export const getVideos = (searchWord) => {
    return dispatch => {
        axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=learn+${searchWord}&maxResults=40&type=video&key=AIzaSyBCHEOzAQaUxp1gUDedcMhATVe3YaIjxfM`)
            .then(response => {
                // console.log(response.data.items);
                dispatch({
                    type: "GET_VIDEO",
                    videos: response.data.items
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

export default youtubeReducer;