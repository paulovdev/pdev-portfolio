import React from 'react';
import { FaBuilding, FaGraduationCap } from 'react-icons/fa'; // Importando ícones
import './HomeExperience.scss';

const HomeExperience = () => {
    const experiences = [
        {
            year: "2019 – 2020",
            company: "Rocketseat",
            role: "Ignite Course",
            icon: <FaGraduationCap />
        },
        {
            year: "2021 – 2022",
            company: "Freelance",
            role: "Front-end Developer",
            icon: <FaBuilding />
        },
        {
            year: "2022 – Present",
            company: "Elevadores Salta",
            role: "Electrical Technician",
            icon: <FaBuilding />
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
            </div>
        </div>
    );
}

export default HomeExperience;
