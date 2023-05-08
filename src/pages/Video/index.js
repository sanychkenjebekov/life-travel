import React from 'react';
import video from '../../img/vid2.MOV'

const Video = () => {
    return (
        <div id='video'>
            <div className="container">
                <center><div className="video">
                    <video className='video--video' controls autoPlay muted loop src={video}></video>
                </div></center>
            </div>
        </div>
    );
};

export default Video;