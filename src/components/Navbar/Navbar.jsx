import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import profileImage from '../../Image/profile.png';
import { useAuth } from '../../components/AuthContext';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

function Navbar() {
    const { isLoggedIn, handleLogin, handleLogout } = useAuth();
    const navigate = useNavigate();
    const [isPracticeDropdownOpen, setIsPracticeDropdownOpen] = useState(false);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const practiceDropdownRef = useRef(null);
    const profileDropdownRef = useRef(null);

    const handleLoginClick = () => {
        handleLogin().then(() => {
            navigate('/');
        });
    };

    const handleLogoutClick = () => {
        handleLogout();
        navigate('/');
    };

    const handlePracticeDropdownToggle = () => {
        setIsPracticeDropdownOpen(!isPracticeDropdownOpen);
        setIsProfileDropdownOpen(false);
    };

    const handleProfileDropdownToggle = () => {
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
        setIsPracticeDropdownOpen(false);
    };

    const closeDropdowns = () => {
        setIsPracticeDropdownOpen(false);
        setIsProfileDropdownOpen(false);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (
                (practiceDropdownRef.current && !practiceDropdownRef.current.contains(event.target)) &&
                (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target))
            ) {
                closeDropdowns();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <nav className="navbar navbar-expand-lg custom-navbar">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" onClick={closeDropdowns}>
                    <img src="/path/to/your/logo.svg" alt="Logo" width="30" height="24" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/" onClick={closeDropdowns}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category" onClick={closeDropdowns}>Category</Link>
                        </li>
                        <li className={`nav-item dropdown ${isPracticeDropdownOpen ? 'show' : ''}`} ref={practiceDropdownRef}>
                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownPractice" role="button" aria-expanded={isPracticeDropdownOpen} onClick={handlePracticeDropdownToggle}>
                                Practice
                            </Link>
                            <ul className={`dropdown-menu ${isPracticeDropdownOpen ? 'show' : ''}`} aria-labelledby="navbarDropdownPractice">
                                <li><Link className="dropdown-item" to="/action" onClick={closeDropdowns}>Action</Link></li>
                                <li><Link className="dropdown-item" to="/another-action" onClick={closeDropdowns}>Another action</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/something-else" onClick={closeDropdowns}>Something else here</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item news-link">
                            <Link className="nav-link" to="/news" onClick={closeDropdowns}>News</Link>
                        </li>
                        <li className="nav-item contact-link">
                            <Link className="nav-link" to="/contact" onClick={closeDropdowns}>Contact</Link>
                        </li>
                    </ul>
                    <form className="d-flex search-form" onSubmit={closeDropdowns}>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success btn-custom" type="submit">Search</button>
                    </form>
                    {isLoggedIn ? (
                        <div className={`nav-item dropdown profile-dropdown ${isProfileDropdownOpen ? 'show' : ''}`} ref={profileDropdownRef}>
                            <img id="avatarButton" type="button" className="w-10 h-10 rounded-full cursor-pointer" src={profileImage} alt="User dropdown" onClick={handleProfileDropdownToggle} />
                            <div id="userDropdown" className={`dropdown-menu ${isProfileDropdownOpen ? 'show' : ''}`}>
                                <div className="px-4 py-3 text-sm text-gray-900">
                                    <div>Bonnie Green</div>
                                    <div className="font-medium truncate">name@flowbite.com</div>
                                </div>
                                <ul className="py-2 text-sm text-gray-700" aria-labelledby="avatarButton">
                                    <li>
                                        <a href="#" className="block px-4 py-2">Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2">Settings</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2">Earnings</a>
                                    </li>
                                </ul>
                                <div className="py-1">
                                    <a href="#" onClick={handleLogoutClick} className="block px-4 py-2 text-sm text-gray-700">Sign out</a>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className={`nav-item dropdown profile-dropdown ${isProfileDropdownOpen ? 'show' : ''}`} ref={profileDropdownRef}>
                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownProfile" role="button" aria-expanded={isProfileDropdownOpen} onClick={handleProfileDropdownToggle}>
                                <img src={profileImage} alt="Profile" className="profile-logo" />
                                <span className="profile-text">Login / Sign in</span>
                            </Link>
                            <ul className={`dropdown-menu ${isProfileDropdownOpen ? 'show' : ''}`} aria-labelledby="navbarDropdownProfile">
                                <li><Link className="dropdown-item" to="/login" onClick={handleLoginClick}>เข้าสู่ระบบ</Link></li>
                                <li><Link className="dropdown-item" to="/history">ประวัติการดู</Link></li>
                                <li><Link className="dropdown-item" to="/bookmark">บุ๊กมาร์ก</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/register">สมัครสมาชิก</Link></li>
                            </ul>
                        </div>
                    )}
                    {/* ปุ่ม Theme Switcher อยู่ด้านขวาสุด */}
                    <div className="d-flex align-items-center gap-2 ms-2">
                        <ThemeSwitcher />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
