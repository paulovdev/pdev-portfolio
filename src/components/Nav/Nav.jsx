import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdHomeFilled, MdWork, MdPhone, MdMessage } from "react-icons/md";
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
                            <MdMessage />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} aria-label="Contact">
                            <MdPhone />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Nav;
