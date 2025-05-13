import React, { useContext } from 'react';
import ThemeContext from '../ThemeContext';
import Dropdown from 'react-bootstrap/Dropdown';
import './ThemeSwitcher.css';

const ThemeSwitcher = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const themeIcons = {
        light: '☀️',
        dark: '🌙',
        system: '🖥️',
    };

    const handleSelect = (eventKey) => {
        setTheme(eventKey);
    };

    return (
        <Dropdown onSelect={handleSelect} className="theme-switcher">
            <Dropdown.Toggle variant="secondary" id="dropdown-theme">
                {themeIcons[theme]}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item eventKey="light" active={theme === 'light'}>
                    ☀️ Light
                </Dropdown.Item>
                <Dropdown.Item eventKey="dark" active={theme === 'dark'}>
                    🌙 Dark
                </Dropdown.Item>
                <Dropdown.Item eventKey="system" active={theme === 'system'}>
                    🖥️ System
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default ThemeSwitcher;
