import React from 'react';

import "./HomeUpdates.scss";
import { BiBook, BiMusic } from 'react-icons/bi';
import { MdMovie, MdOutlineMovie } from 'react-icons/md';

const HomeUpdates = () => {
    return (
        <div className="home-updates">
            <h1>Updates</h1>
            <p>about the my current projects, interests, and activities.</p>
            <ul>
                <li>
                    <span><div className="icon"><BiBook /></div>Reading to:</span>
                    <p>I've got my nose in "Steal Like an Artist" by Austin Kleon. A book about the process of creativity and the value of harnessing inspiration from various sources. I find myself resonating with the idea that nothing is original and creativity is a remix of our experiences and influences. </p>
                </li>
                <li>
                    <span><div className="icon"><BiMusic /></div>Listening to:</span>
                    <iframe
                        width="100%"
                        height="fit-content"

                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/978299293&color=%23111111&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                    ></iframe>
                </li>
                <li>
                    <span><div className="icon"><MdOutlineMovie /></div>Watching to:</span>
                    <iframe
                        width="100%"
                        height="fit-content"
                        src="https://www.youtube.com/embed/sfJG6IiA_s8"

                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen></iframe>
                </li>

            </ul>

        </div >
    );
}

export default HomeUpdates;