import React from 'react';
import kazi2 from '../../img/kazi2.MOV'

const Kazi = () => {
    return (
        <div id='kazi'>
            {/*<div className="container">*/}
                <center><div className="kazi">
                    <video className='kazi--video' controls autoPlay muted loop src={kazi2}></video>
                </div></center>
            {/*</div>*/}
        </div>
    );
};

export default Kazi;