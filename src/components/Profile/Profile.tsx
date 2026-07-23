import React, { useState } from 'react';
import { FaGripLines, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import { FaGithub } from "react-icons/fa6";
import { HiDownload } from "react-icons/hi";

interface ProfileProps {
    onExperienceClick: () => void;
    onProjectClick: () => void;
    onAboutClick: () => void;
}

const Profile: React.FC<ProfileProps> = ({ onExperienceClick, onProjectClick, onAboutClick }) => {

    const [selected, setSelected] = useState<string>('About');
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

    const menuItems = ['About', 'Experience', 'Projects'];

    const handleMenuClick = (item: string) => {
        setSelected(item);
        if (item === 'Experience') {
            onExperienceClick();
        }
        if (item === 'Projects') {
            onProjectClick();
        }
        if (item === 'About') {
            onAboutClick();
        }
        setMobileMenuOpen(false);
    }

    return (
        <>
        {/* Mobile navigation - visible only below the lg breakpoint */}
        <div className="lg:hidden">
            <button
                type="button"
                onClick={() => setMobileMenuOpen((open) => !open)}
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
                className="fixed top-4 right-4 z-40 p-2 rounded-md bg-accent-darker bg-opacity-80 text-accent-light backdrop-blur-sm"
            >
                {mobileMenuOpen ? <FaTimes className="size-6" /> : <FaBars className="size-6" />}
            </button>
            {mobileMenuOpen && (
                <div className="fixed top-16 right-4 z-40 flex flex-col gap-3 rounded-md bg-accent-darker p-5 shadow-lg">
                    {menuItems.map((item) => (
                        <button
                            key={item}
                            type="button"
                            onClick={() => handleMenuClick(item)}
                            className={`text-left transition-all duration-300 hover:text-tertiary ${selected === item ? 'text-tertiary' : 'text-primary'}`}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            )}
        </div>
        <div className="container">
            <p className="text-4xl sm:text-5xl font-semibold text-primary pb-4">Kishan Dhanak</p>
            <p className="text-lg sm:text-xl font-medium text-secondary pb-4">Junior Full-Stack Engineer</p>
            <div className="synopsis-container w-full lg:w-9/12 text-start">
                <p className="text-base font-thin text-primary">Passionate and commited Full-Stack Developer who builds classical, top-notch and innovative web-solutions.</p>
            </div>

            <div className="menu mt-10 lg:mt-20 w-fit hidden lg:flex flex-col gap-4">
                {menuItems.map((item) => (
                    <div
                        key={item}
                        className={`flex items-center gap-2 cursor-pointer group ${selected === item ? 'text-tertiary' : ''
                            }`}
                        onClick={() => handleMenuClick(item)}
                    >
                        <FaGripLines
                            className={`transition-all duration-300 group-hover:w-10 ${selected === item ? 'w-10 text-tertiary' : ''
                                }`}
                        />
                        <p
                            className={`group-hover:text-tertiary transition-all duration-300 ${selected === item ? 'text-accent-light' : ''
                                }`}
                        >{item}</p>
                    </div>
                ))}
            </div>


            <div className='flex flex-col gap-3 mt-10 lg:mt-0 lg:gap-0 lg:fixed lg:bottom-32 lg:top-auto lg:right-auto'>
                <div className='group w-fit'>
                    <a className='flex cursor-pointer text-secondary transition-all duration-300 font-normal group-hover:text-accent-tertiary_light' href='https://storage.googleapis.com/portfolio-v2-static-data/Resume.docx'>
                        <p className='font-medium'>My Resume</p>
                        <HiDownload className='mt-1 ml-1' />
                    </a>
                </div>
                <div className='social-media flex gap-4 lg:fixed lg:bottom-20 lg:top-auto lg:right-auto'>
                    <a href='https://github.com/KDhanak' target='_blank' rel='noopener noreferrer'>
                        <FaGithub className='lg:size-7 cursor-pointer size-6' />
                    </a>
                    <a href='https://www.linkedin.com/in/kishandhanak306/' target='_blank' rel='noopener noreferrer'>
                        <FaLinkedin className='lg:size-7 cursor-pointer size-6' />
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Profile;
