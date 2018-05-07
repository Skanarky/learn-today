
import React from "react";
import { connect } from "react-redux";
import YoutubeVideo from "./YoutubeVideo/YoutubeVideo";

class YoutubeList extends React.Component {
    render = () => {
        // console.log(this.props);
        const { data, loading, errMsg } = this.props;

        const presentVideos = data.map((video, i) => <YoutubeVideo key={video.id.videoId} id={video.id.videoId} index={i} {...video.snippet}></YoutubeVideo>);
        if (loading) {
            return (
                <div style={{ color: "rgba(218, 238, 253, 0.95)", paddingLeft: "15px", fontSize: ".9em" }}>... loading YouTube</div>
            )
        } else if (errMsg) {
            return (
                <div style={{ color: "rgba(218, 238, 253, 0.95)", paddingLeft: "15px", fontSize: ".9em" }}>{errMsg}</div>
            )
        } else {
            return (
                <div className="contain">
                    {presentVideos}
                </div>
            )
        }
    }
}

function stateToProps(globalState) {
    return globalState.videos;
}

export default connect(stateToProps, {})(YoutubeList);