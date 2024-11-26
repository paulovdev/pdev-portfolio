import React from 'react'
import { GoLinkExternal } from "react-icons/go";

import "./HomeWorks.scss";


const HomeWorks = () => {
    const works = [
        {
            id: 1,
            imgSrc: "/works/work-1.png",
            title: "Quimplo",
            description: "Quimplo is a marketplace website for selling templates.",
            src: "https://quimplo.online"
        },
        {
            id: 2,
            imgSrc: "/works/work-2.png",
            title: "Paulin",
            description: "Paulin is a simple minimal portfolio website.",
            src: "https://post-and-publish.netlify.app/"
        },
        {
            id: 3,
            imgSrc: "/works/work-3.jpg",
            title: "paulovdev",
            description: "paulovdev is a full portfolio website.",
            src: "https://paulovdev.framer.website/"
        }
    ];

    return (
        <div className="home-works">
            <h1>Selected works</h1>
            <p>Explore my selected portfolio works, showcasing my skills and achievements over the years.</p>
            <div className="works-container">
                {works.map(work => (
                    <a href={work.src} target="_blank" className="w-content" key={work.id}>
                        <div className="img-content">
                            <img src={work.imgSrc} alt={work.title} />
                        </div>
                        <h1>{work.title}</h1>
                        <p>{work.description}</p>
                        <div className="see-work">
                            <GoLinkExternal />
                        </div>
                    </a>
                ))}
            </div>
        </div>

    )
}

export default HomeWorks;