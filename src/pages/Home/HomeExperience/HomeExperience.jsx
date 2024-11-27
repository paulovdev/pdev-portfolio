import React from 'react';
import { FaBuilding, FaGraduationCap } from 'react-icons/fa';
import { PiBabyFill } from "react-icons/pi";


import './HomeExperience.scss';

const HomeExperience = () => {
    const experiences = [
        {
            year: "Sep 2024 – 2028",
            company: "Anhanguera",
            role: "Software Enginner",
            icon: <FaGraduationCap size={22} />
        },
        {
            year: "Mar 2022 – Present",
            company: "Elevadores Salta",
            role: "Electrical Technician",
            icon: <FaBuilding size={18} />
        },
        {
            year: "Oct 2021 – Nov 2022",
            company: "Freelance",
            role: "Front-end Developer",
            icon: <FaBuilding size={18} />
        },
        {
            year: "Fev 2021 – Jan 2022",
            company: "Rocketseat",
            role: "Ignite Course",
            icon: <FaGraduationCap size={22} />
        }

    ];


    return (
        <div className="home-experience">
            <h1>Experience</h1>
            <p>My experiences over the years</p>
            <div className="timeline">
                <div className="timeline-line"></div>

                {experiences.map((exp, index) => (
                    <div className="timeline-item" key={index}>
                        <div className="timeline-year">{exp.year}</div>
                        <div className="timeline-icon">{exp.icon}</div>

                        <div className="timeline-card">
                            <h3>{exp.company}</h3>
                            <p>{exp.role}</p>
                        </div>
                    </div>

                ))}
                <div className="end"><PiBabyFill size={22} color='#fff' /> Born in 2003</div>
            </div>
        </div>
    );
}

export default HomeExperience;
