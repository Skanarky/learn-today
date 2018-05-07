import React from "react";

import movieClip from "./640705402.mp4";


function Video() {
    return (
        <video autoPlay muted loop>
            <source src={movieClip} type="video/mp4" />
        </video>
            )
        }
        
export default Video;