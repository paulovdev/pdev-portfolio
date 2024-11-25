import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { IoSunnySharp } from "react-icons/io5";

import { IoMoon } from "react-icons/io5";


function ThemeChange() {
    const { theme, changeTheme } = useTheme();

    const handleToggle = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        changeTheme(newTheme);
    };

    return (
        <div onClick={handleToggle} className="toggle-switch">
            {theme === "dark" ? (
                <IoMoon />
            ) : (
                <IoSunnySharp />
            )}
        </div>
    );
}

export default ThemeChange;
