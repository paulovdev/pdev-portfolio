import React from 'react'
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { VscVerifiedFilled } from "react-icons/vsc";
import "./HomeHeader.scss";

const HomeHeader = () => {
    return (
        <motion.div className="home-header"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <div className="profile-content">
                <div className="l-content">
                    <img src="/photo.webp" alt="profile-photo" />
                </div>
                <div className="r-content">
                    <h1>Paulo Vitor <VscVerifiedFilled /></h1>
                    <p>"Front-End Developer & UX/UI Designer"</p>
                    <div className="icon-content">
                        <div className="icon-bg">
                            <FaLinkedin />
                        </div>
                        <div className="icon-bg">
                            <FaTwitter />
                        </div>
                        <div className="icon-bg">
                            <FaGithub />
                        </div>
                    </div>

                </div>
            </div>
            <h2>
                Forward-thinking product designer specializing in crafting immersive and intuitive user experiences, consistently pushing the boundaries of design innovation.
            </h2>
            <button>
                <div className="ball-green"></div>
                Available for projects
            </button>
        </motion.div>
    )
}

export default HomeHeader