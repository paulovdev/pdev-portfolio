import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdHomeFilled, MdWork } from "react-icons/md";
import { IoJournal } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";

import "./Nav.scss";

const Nav = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li >
                        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} aria-label="Home" >
                            <MdHomeFilled />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''} aria-label="Projects">
                            <MdWork />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''} aria-label="Blog">
                            <IoJournal />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} aria-label="Contact">
                            <FaEnvelope />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Nav;
