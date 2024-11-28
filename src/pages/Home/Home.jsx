import React from "react";

import HomeHeader from "./HomeHeader/HomeHeader";
import HomeWorks from "./HomeWorks/HomeWorks";
import HomeSetup from './HomeSetup/HomeSetup';
import HomeStack from "./HomeStack/HomeStack"
import HomeExperience from "./HomeExperience/HomeExperience";

import "./Home.scss";
import HomeUpdates from "./HomeUpdates/HomeUpdates";

const Home = () => {
    return (
        <section id="home">
            <HomeHeader />
            <div className="border-left"></div>
            <HomeWorks />
            <div className="border-left"></div>
            <HomeExperience />
            <div className="border-left"></div>
            <HomeStack />
            <div className="border-left"></div>
            <HomeSetup />
            <div className="border-left"></div>
            <HomeUpdates />
        </section>
    );
};

export default Home;


