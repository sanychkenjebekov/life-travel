import React from 'react';
import ONas from "../../pages/Onas";
import Galereya from "../../pages/Galereya";
import OurTeam from "../OurTeam";
import Video from "../../pages/Video";


const Home = () => {
    return (
<>
            <div id='home'>
                <div className="container">
                    <center><div className="home">
                        <h1>Пора вырываться из душного дома.</h1>
                        <p>Отдых по всему Кыргызстану, который вы заслужили</p>
                    </div></center>
                </div>
            </div>
    <OurTeam/>
    <ONas/>
    <Galereya/>
    <Video/>
</>
    );
};

export default Home;