import React from 'react'

import "./HomeStack.scss";
import { motion } from 'framer-motion';

const HomeStack = () => {

    const stacks = [
        {
            img: "/stacks/react.png",
            title: "React",
            subTitle: "JavaScript UI library"
        },
        {
            img: "/stacks/firebase.png",
            title: "Firebase",
            subTitle: "Google app platform"
        },
        {
            img: "/stacks/notion.png",
            title: "Notion",
            subTitle: "All-in-one workspace"
        },
        {
            img: "/stacks/figma.png",
            title: "Figma",
            subTitle: "Design platform"
        },
        {
            img: "/stacks/vs-code.png",
            title: "VS Code",
            subTitle: "Code editor"
        },
        {
            img: "/stacks/chat-gpt.png",
            title: "Open AI",
            subTitle: "AI-powered language"
        },
    ];

    return (
        <motion.div className="home-stack"
            initial={{ opacity: 0 }}
            whileInView={{
                opacity: 1,
                transition: {
                    duration: 0.5,
                    delay: 0.3,
                    ease: [0.455, 0.03, 0.515, 0.955]
                }
            }}
            viewport={{ once: true }}
        >
            <h1>Stack</h1>
            <p>Tools that I always use in almost all of my work</p>
            <ul>
                {stacks.map((stack, index) => (
                    <li key={index}>
                        <div className="l-content">
                            <div className="icon-content">
                                <img src={stack.img} alt="icon" />
                            </div>
                        </div>
                        <div className="r-content">
                            <h1>{stack.title}</h1>
                            <p>{stack.subTitle}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </motion.div>
    )
}

export default HomeStack