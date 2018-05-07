import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";


import youtubeReducer from "./youtube";
import udemyReducer from "./udemy";
import courseraReducer from "./coursera";

const store = createStore(combineReducers({videos: youtubeReducer, courses: udemyReducer, coCourses: courseraReducer}), applyMiddleware(thunk));

export default store;