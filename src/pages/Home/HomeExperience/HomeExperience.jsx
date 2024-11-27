import React from 'react';
import { FaBuilding, FaGraduationCap } from 'react-icons/fa'; // Importando ícones
import './HomeExperience.scss';

const HomeExperience = () => {
    const experiences = [
        {
            year: "Sep 2024 – 2028",
            company: "Anhanguera",
            role: "Software Enginner",
            icon: <FaGraduationCap />
        },
        {
            year: "Mar 2022 – Present",
            company: "Elevadores Salta",
            role: "Electrical Technician",
            icon: <FaBuilding />
        },
        {
            year: "Oct 2021 – Nov 2022",
            company: "Freelance",
            role: "Front-end Developer",
            icon: <FaBuilding />
        },
        {
            year: "Fev 2021 – Jan 2022",
            company: "Rocketseat",
            role: "Ignite Course",
            icon: <FaGraduationCap />
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
                <div className="end">07/09/2003</div>
            </div>
        </div>
    );
}

export default HomeExperience;
