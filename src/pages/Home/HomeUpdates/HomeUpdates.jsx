import React from 'react';
import { motion } from 'framer-motion';

import { BiBook, BiMusic } from 'react-icons/bi';
import { MdOutlineMovie } from 'react-icons/md';

import "./HomeUpdates.scss";

const HomeUpdates = () => {
    return (
        <motion.div className="home-updates"
            initial={{ opacity: 0 }}
            whileInView={{
                opacity: 1,
                transition: {
                    duration: 0.3,
                    delay: 0.3,
                    ease: [0.455, 0.03, 0.515, 0.955]
                }
            }}
            viewport={{ once: true }}
        >
            <h1>Updates</h1>
            <p>about the my current projects, interests, and activities.</p>
            <ul>
                <li>
                    <span><div className="icon"><BiBook /></div>Reading to:</span>
                    <div className="card-update">
                        <p>I've got my nose in "Steal Like an Artist" by Austin Kleon. A book about the process of creativity and the value of harnessing inspiration from various sources. I find myself resonating with the idea that nothing is original and creativity is a remix of our experiences and influences. </p>
                    </div>
                </li>
                <li>
                    <span><div className="icon"><BiMusic /></div>Listening to:</span>
                    <div className="card-update">
                        <p>MGMT's blend of synth-pop, rock, and unconventional lyrics provide a captivating soundtrack to my creative process.</p>
                        <iframe
                            width="100%"
                            height="fit-content"

                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/978299293&color=%23111111&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                        ></iframe>
                    </div>
                </li>
                <li>
                    <span><div className="icon"><MdOutlineMovie /></div>Watching to:</span>
                    <div className="card-update">
                        <p>MGMT's blend of synth-pop, rock, and unconventional lyrics provide a captivating soundtrack to my creative process.</p>
                        <iframe
                            width="100%"
                            height="fit-content"
                            src="https://www.youtube.com/embed/sfJG6IiA_s8"

                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen></iframe>
                    </div>
                </li>

            </ul>

        </motion.div >
    );
}

export default HomeUpdates;