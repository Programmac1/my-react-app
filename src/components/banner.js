import React from "react";
import plumberVideo from './videos/plumber-vid.mp4'

const Banner = () => {
    return (
        <div>
            <video className="video-banner" controls autoplay muted loop>
                <source src={plumberVideo}/>
            </video>
        </div>
    )
};

export default Banner;