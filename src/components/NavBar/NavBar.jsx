import React from 'react';

import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/img/AP_Logo_Min.png';

import './NavBar.css';
import { IoMdCloseCircleOutline } from 'react-icons/io';

import { AiOutlineHome } from 'react-icons/ai';
import { BsPerson, BsCodeSlash } from 'react-icons/bs';
import { CgPhone } from 'react-icons/cg';

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
        scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };

    return (
        <header>
            <nav
                className={`navbar navbar-expand-lg navbar-light fixed-top navbar_container  ${
                    scrolled ? 'scrolled' : ''
                }`}
            >
                <div className='container'>
                    <Link to='/'>
                        <img src={logo} alt='Logo de la tienda' className='navbar-logo' />
                    </Link>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='offcanvas'
                        data-bs-target='#offcanvasNavbar'
                        aria-controls='offcanvasNavbar'
                        aria-label='Toggle navigation'
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div
                        className='offcanvas offcanvas-end '
                        tabIndex='-1'
                        id='offcanvasNavbar'
                        aria-labelledby='offcanvasNavbarLabel'
                    >
                        <div className='offcanvas-header bg-black'>
                            <IoMdCloseCircleOutline
                                type='button'
                                className='btn-close-x'
                                data-bs-dismiss='offcanvas'
                                aria-label='Close'
                            />
                        </div>
                        <div className='offcanvas-body'>
                            <ul className='navbar-nav justify-content-end flex-grow-1 pe-3 NavbarLinks'>
                                <li>
                                    <NavLink
                                        to='/'
                                        className={activeLink === 'home' ? 'active' : ''}
                                        onClick={() => onUpdateActiveLink('home')}
                                    >
                                        <AiOutlineHome style={{ marginRight: '5px' }} /> Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/about'
                                        className={activeLink === 'skills' ? 'active' : ''}
                                        onClick={() => onUpdateActiveLink('skills')}
                                    >
                                        <BsPerson style={{ marginRight: '5px' }} /> About
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to='/projects'
                                        className={activeLink === 'projects' ? 'active' : ''}
                                        onClick={() => onUpdateActiveLink('projects')}
                                    >
                                        <BsCodeSlash style={{ marginRight: '5px' }} /> Projects
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/contact'
                                        className={activeLink === 'contact' ? 'active' : ''}
                                        onClick={() => onUpdateActiveLink('contact')}
                                    >
                                        <CgPhone style={{ marginRight: '5px' }} /> Contact
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
