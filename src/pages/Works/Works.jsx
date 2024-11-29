import React, { useState } from 'react';
import { CgClose } from 'react-icons/cg';
import { GoLinkExternal } from "react-icons/go";
import { motion } from 'framer-motion';
import './Works.scss';

const Works = () => {
    const [searchTerm, setSearchTerm] = useState('');

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
            imgSrc: "/works/work-3.png",
            title: "paulovdev",
            description: "paulovdev is a full portfolio website.",
            src: "https://paulovdev.framer.website/"
        }, {
            id: 4,
            imgSrc: "/works/work-4.png",
            title: "The Batman",
            description: "ShopEase is an e-commerce platform for easy online shopping.",
            src: "https://shopease.example.com"
        },
        {
            id: 5,
            imgSrc: "/works/work-5.png",
            title: "Meow Café",
            description: "DevPortfolio is a sleek and modern portfolio for developers.",
            src: "https://devportfolio.example.com"
        },
        {
            id: 6,
            imgSrc: "https://via.placeholder.com/150/FFFF00/000000?text=Work+6",
            title: "CreativeHub",
            description: "CreativeHub is a platform for creative professionals to showcase their work.",
            src: "https://creativehub.example.com"
        },
        {
            id: 7,
            imgSrc: "https://via.placeholder.com/150/00FF00/000000?text=Work+7",
            title: "EduPlatform",
            description: "EduPlatform is an educational website offering various online courses.",
            src: "https://eduplatform.example.com"
        },
        {
            id: 8,
            imgSrc: "https://via.placeholder.com/150/FF00FF/FFFFFF?text=Work+8",
            title: "HealthCarePro",
            description: "HealthCarePro is a professional website for healthcare providers.",
            src: "https://healthcarepro.example.com"
        },
        {
            id: 9,
            imgSrc: "https://via.placeholder.com/150/00FFFF/000000?text=Work+9",
            title: "TravelBuddy",
            description: "TravelBuddy is a travel blog and guide for adventurers.",
            src: "https://travelbuddy.example.com"
        },
        {
            id: 10,
            imgSrc: "https://via.placeholder.com/150/FFA500/FFFFFF?text=Work+10",
            title: "ArtGallery",
            description: "ArtGallery is an online gallery for showcasing art pieces.",
            src: "https://artgallery.example.com"
        }
    ];


    const filteredWorks = works.filter(work =>
        work.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        work.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const clearSearch = () => {
        setSearchTerm('');
    };

    return (
        <motion.section id='works'
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <h1>My Works</h1>
            <p>Explore my portfolio of projects spanning from 2021 to 2024.</p>

            <div className="filters">
                <input
                    type="text"
                    placeholder="Search by title or description..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
                <button onClick={clearSearch}><CgClose /></button>
            </div>

            <div className="works-container">
                {filteredWorks.length > 0 ? (
                    filteredWorks.map(work => (
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
                    ))
                ) : (
                    <p>No works found matching your search criteria.</p>
                )}
            </div>
        </motion.section>
    );
}

export default Works;
