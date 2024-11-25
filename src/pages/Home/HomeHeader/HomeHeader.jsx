import React from 'react'
import { IoFlashSharp } from "react-icons/io5";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { VscVerifiedFilled } from "react-icons/vsc";
import "./HomeHeader.scss";

const HomeHeader = () => {
    return (
        <div className="home-header">
            <div className="profile-content">
                <div className="l-content">
                    <img src="/photo.jpg" alt="profile-photo" />
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
            <span>ABOUT ME</span>
            <h2>
                Hi, I'm Paulo Vitor, an independent front-end developer specializing in crafting immersive and intuitive user experiences, consistently pushing the boundaries of design innovation.
            </h2>
            <button>
                <IoFlashSharp />
                Available for hire
            </button>
        </div>
    )
}

export default HomeHeader