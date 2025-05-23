import React, { useEffect, useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
    const [currentUser, setCurrentUser] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const user = JSON.parse(localStorage.getItem("userData"));

    // useEffect(() => {
    //     setCurrentUser(user)
    // }, [user])

    return (
        <header className='shadow sticky z-50 top-0'>
            <nav className='bg-black border-gray-200 px-4 sm:px-6 lg:px-8 py-2.5'>
                <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
                    <Link to="/" className='inline-flex items-center text-3xl sm:text-4xl font-bold text-white'>
                        Cod<span className='text-2xl sm:text-3xl text-orange-400'>
                            <RxHamburgerMenu style={{ strokeWidth: "1px", marginTop: "8px" }} />
                        </span>r
                    </Link>
                    
                    {/* Mobile menu button */}
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className='lg:hidden text-gray-400 hover:text-white focus:outline-none'
                        aria-label='Toggle menu'
                    >
                        <RxHamburgerMenu className='w-6 h-6' />
                    </button>
                    
                    {/* Desktop Menu */}
                    <div className="hidden lg:flex justify-between items-center w-auto lg:order-1">
                        <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-6 xl:space-x-8 lg:mt-0'>
                            <li>
                                <NavLink
                                    className={({ isActive }) => 
                                        `${isActive ? 'bg-gradient-to-r from-orange-400 to-amber-200 bg-clip-text text-transparent' : 'text-white'} 
                                        block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 
                                        hover:text-orange-400 lg:p-0 text-sm sm:text-base`}
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={({ isActive }) => 
                                        `${isActive ? 'bg-gradient-to-r from-orange-400 to-amber-200 bg-clip-text text-transparent' : 'text-white'} 
                                        block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 
                                        hover:text-orange-400 lg:p-0 text-sm sm:text-base`}
                                    to="/about"
                                >
                                    About Me
                                </NavLink>
                            </li>
                            {currentUser ? (
                                <li>
                                    <NavLink
                                        className={({ isActive }) =>
                                            `${isActive ? 'bg-gradient-to-r from-orange-400 to-amber-200 bg-clip-text text-transparent' : 'text-white'} 
                                            block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 
                                            hover:text-orange-400 lg:p-0 text-sm sm:text-base`}
                                        to="/login"
                                        onClick={() => {
                                            localStorage.removeItem("userData");
                                        }}
                                    >
                                        Logout
                                    </NavLink>
                                </li>
                            ) : (
                                <li>
                                    <NavLink
                                        className={({ isActive }) =>
                                            `${isActive ? 'bg-gradient-to-r from-orange-400 to-amber-200 bg-clip-text text-transparent' : 'text-white'} 
                                            block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 
                                            hover:text-orange-400 lg:p-0 text-sm sm:text-base`}
                                        to="/login"
                                    >
                                        Admin login
                                    </NavLink>
                                </li>
                            )}
                        </ul>
                    </div>
                    
                    {/* Mobile Menu */}
                    <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full lg:hidden lg:order-1`}>
                        <ul className='flex flex-col mt-4 font-medium border-t border-gray-700'>
                            <li>
                                <NavLink
                                    className={({ isActive }) => 
                                        `${isActive ? 'bg-gradient-to-r from-orange-400 to-amber-200 bg-clip-text text-transparent' : 'text-white'} 
                                        block py-3 px-4 duration-200 border-b border-gray-700 hover:bg-gray-800`}
                                    to="/"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={({ isActive }) => 
                                        `${isActive ? 'bg-gradient-to-r from-orange-400 to-amber-200 bg-clip-text text-transparent' : 'text-white'} 
                                        block py-3 px-4 duration-200 border-b border-gray-700 hover:bg-gray-800`}
                                    to="/about"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    About Me
                                </NavLink>
                            </li>
                            {currentUser ? (
                                <li>
                                    <NavLink
                                        className={({ isActive }) =>
                                            `${isActive ? 'bg-gradient-to-r from-orange-400 to-amber-200 bg-clip-text text-transparent' : 'text-white'} 
                                            block py-3 px-4 duration-200 border-b border-gray-700 hover:bg-gray-800`}
                                        to="/login"
                                        onClick={() => {
                                            localStorage.removeItem("userData");
                                            setIsMenuOpen(false);
                                        }}
                                    >
                                        Logout
                                    </NavLink>
                                </li>
                            ) : (
                                <li>
                                    <NavLink
                                        className={({ isActive }) =>
                                            `${isActive ? 'bg-gradient-to-r from-orange-400 to-amber-200 bg-clip-text text-transparent' : 'text-white'} 
                                            block py-3 px-4 duration-200 border-b border-gray-700 hover:bg-gray-800`}
                                        to="/login"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Admin login
                                    </NavLink>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;