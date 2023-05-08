import React from 'react';
import logo2 from "../../img/logoWhite.jpg";

const Footer = () => {
    return (
        <div id='footer'>
            <div className="container">
                <div className="footer">
                    <div className="footer--logo">
                        <img src={logo2} alt=""/>
                        <h1>life travel</h1>
                    </div>
                    <div className="footer--menu">
                        <a href="tel:+996707411142">+996 (707) 411 142</a>
                            <i>life travel</i>
                        <p>г.Бишкек</p>
                    </div>
                   <p className='footer--p'>Мы всегда на связи по всем вопросам!</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;