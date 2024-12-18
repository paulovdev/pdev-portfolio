import React, { useState, useEffect } from 'react';
import { FaGlobe } from "react-icons/fa";

import { FaLocationDot } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";


import ThemeChange from './../ThemeChange/ThemeChange';

import "./TopNav.scss";

const TopNav = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formatTime = (date) => {
        let hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const period = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        return `${hours}:${minutes} ${period}`;
    };

    return (
        <div id='top-nav'>
            <div className="top-nav-container">
                <ul>
                    <li>
                        <div className="icon">
                            <FaLocationDot />
                        </div>
                        <p>Brazil</p>
                        <span>  </span>
                        <div className="icon">
                            <GoClockFill />
                        </div>
                        <p>{formatTime(time)}</p>
                    </li>

                    <li>
                        <div className="theme-switch">
                            <FaGlobe />
                        </div>
                        <ThemeChange />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default TopNav;
