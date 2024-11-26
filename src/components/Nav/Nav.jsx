import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdHomeFilled, MdInfo, MdWork, MdPhone } from "react-icons/md";
import "./Nav.scss";

const Nav = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
                            <MdHomeFilled />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
                            <MdInfo />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>
                            <MdWork />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
                            <MdPhone />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Nav;
