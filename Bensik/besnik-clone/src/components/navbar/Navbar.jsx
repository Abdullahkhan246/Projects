import React, { useState } from 'react'
import logo from '../../assets/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import NavbarLinks from '../navbarlinks/Navbarlinks';

export default function Navbar() {
    let navLinks = ["Home", "About us", "Features", "Contact"];
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header className="w-full bg-white shadow-md">
            {/* Mobile Navbar */}
            <div className="p-4 lg:hidden">
                <div
                    className={`flex items-center justify-between px-6 py-4 transition-all duration-500 ${isOpen ? "translate-y-6" : "translate-y-0"
                        }`}
                >

                    <Link to="/">

                        <div className="group inline-block relative cursor-pointer">
                        <div className=" pb-1 mb-1 ">
                            <img src={logo} alt="Logo" className="h-10 w-auto" />
                        </div>
                        <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-sky-950 transition-all duration-300 group-hover:w-full"></span>
                    </div>
                    </Link>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-3xl bg-amber-50 p-2 rounded-md transition-transform duration-300 cursor-pointer"
                    >
                        <FontAwesomeIcon icon={faBurger} />
                    </button>
                </div>

                {/* Mobile Menu */}
                <nav
                    className={`transition-all overflow-hidden ${isOpen ? 'max-h-96 py-4' : 'max-h-0'
                        }`}
                >
                    <div
                        className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                            } px-6`}
                    >
                        <ul className="flex flex-col gap-4 py-4 text-lg">
                            {
                                navLinks?.map((links, index) => {
                                    return (
                                        <NavbarLinks
                                            key={index}
                                            links={links}
                                        />
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="mt-4 flex justify-center gap-4">
                        <button className="px-5 py-2 rounded bg-amber-500 text-white font-semibold transition-all duration-300 ease-in-out hover:bg-amber-500 hover:shadow-lg hover:scale-105 shadow cursor-pointer">
                            Sign In
                        </button>

                        <button className="bg-primary text-primary px-4 py-2 rounded shadow font-semibold transition-all duration-300 ease-in-out hover:bg-primary hover:shadow-lg hover:scale-105 cursor-pointer">
                            Sign Up
                        </button>
                    </div>
                </nav>
            </div>
            {/* Desktop Navbar */}

            <div className="hidden lg:flex items-center justify-between px-10 py-6 max-w-7xl mx-auto">
                <Link to="/">
                    <div className="group inline-block relative cursor-pointer">
                        <div className=" pb-1 mb-1 ">
                            <img src={logo} alt="Logo" className="h-10 w-auto" />
                        </div>
                        <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-sky-950 transition-all duration-300 group-hover:w-full"></span>
                    </div>
                </Link>

                <nav className="flex items-center gap-10">
                    <ul className="flex items-center gap-10 text-lg">
                        {
                            navLinks?.map((links, index) => {
                                return (
                                    <NavbarLinks
                                        key={index}
                                        links={links}
                                    />
                                )
                            })
                        }
                    </ul>
                    <div className="flex gap-4">
                        <button className="px-5 py-2 rounded bg-amber-500 text-white font-semibold transition-all duration-300 ease-in-out hover:bg-amber-500 hover:shadow-lg hover:scale-105 shadow cursor-pointer">
                            Sign In
                        </button>

                        <button className="bg-primary text-primary px-4 py-2 rounded shadow font-semibold transition-all duration-300 ease-in-out hover:bg-primary hover:shadow-lg hover:scale-105 cursor-pointer">
                            Sign Up
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    )
}
