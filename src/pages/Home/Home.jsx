import React from "react";

import "./Home.scss";
import HomeHeader from "./HomeHeader/HomeHeader";
import HomeWorks from "./HomeWorks/HomeWorks";
import HomeSetup from './HomeSetup/HomeSetup';
import HomeStack from "./HomeStack/HomeStack"
import TopNav from "../../components/TopNav/TopNav";
import HomeExperience from "./HomeExperience/HomeExperience";
const Home = () => {
    return (
        <section id="hero">
            <TopNav />
            <HomeHeader />
            <div className="border-left"></div>
            <HomeWorks />
            <div className="border-left"></div>
            <HomeStack />
            <div className="border-left"></div>
            <HomeSetup />
            <div className="border-left"></div>
            <HomeExperience />
        </section>
    );
};

export default Home;


