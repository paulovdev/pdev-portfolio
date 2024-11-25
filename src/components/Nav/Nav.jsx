import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdHomeFilled, MdInfo, MdWork, MdPhone } from "react-icons/md";
import "./Nav.scss";

const Nav = () => {
    const renderIcon = (isActive, Icon) => isActive ? <Icon /> : null;

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
                            {({ isActive }) => (
                                <>
                                    {renderIcon(isActive, MdHomeFilled)}
                                    Home
                                </>
                            )}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
                            {({ isActive }) => (
                                <>
                                    {renderIcon(isActive, MdInfo)}
                                    About
                                </>
                            )}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>
                            {({ isActive }) => (
                                <>
                                    {renderIcon(isActive, MdWork)}
                                    Works
                                </>
                            )}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
                            {({ isActive }) => (
                                <>
                                    {renderIcon(isActive, MdPhone)}
                                    Contact
                                </>
                            )}
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Nav;
