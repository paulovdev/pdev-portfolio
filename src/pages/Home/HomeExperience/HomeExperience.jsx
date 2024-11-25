import React from 'react';
import { FaBuilding, FaGraduationCap } from 'react-icons/fa'; // Importando ícones
import './HomeExperience.scss';

const HomeExperience = () => {
    const experiences = [
        {
            year: "May 2016 – Jan 2019",
            company: "Salesforce",
            location: "Dublin, Ireland",
            icon: <FaBuilding />
        }, {
            year: "May 2016 – Jan 2019",
            company: "Salesforce",
            location: "Dublin, Ireland",
            icon: <FaGraduationCap />
        },
        {
            year: "May 2016 – Jan 2019",
            company: "Salesforce",
            location: "Dublin, Ireland",
            icon: <FaBuilding />
        }, {
            year: "May 2016 – Jan 2019",
            company: "Salesforce",
            location: "Dublin, Ireland",
            icon: <FaGraduationCap />
        },
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
                            <p>{exp.location}</p>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
}

export default HomeExperience;
