import React, { useState } from 'react';
import { FaGripLines } from 'react-icons/fa';
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

interface ProfileProps {
    onExperienceClick: () => void;
    onProjectClick: () => void;
    onAboutClick: () => void;
}

const Profile: React.FC<ProfileProps> = ({onExperienceClick, onProjectClick, onAboutClick}) => {

    const [selected, setSelected] = useState<string>('About');

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
    }

    return(
        <div className="container">
            <p className="text-5xl font-semibold text-primary pb-4">Kishan Dhanak</p>
            <p className="text-xl font-medium text-secondary pb-4">Junior Full-Stack Engineer</p>
            <div className="synopsis-container w-9/12 text-start">
                <p className="text-base font-thin text-primary">Passionate and commited Full-Stack Developer who builds classical, top-notch and innovative web-solutions.</p>
            </div>

            <div className="menu mt-20 w-fit flex flex-col gap-4">
                {menuItems.map((item) => (
                    <div
                    key={item}
                    className={`flex items-center gap-2 cursor-pointer group ${
                        selected === item ? 'text-tertiary' : ''
                    }`}
                    onClick={() => handleMenuClick(item)}
                    >
                        <FaGripLines
                        className={`transition-all duration-300 group-hover:w-10 ${
                            selected === item ? 'w-10 text-tertiary' : ''
                        }`}
                        />
                        <p
                        className={`group-hover:text-tertiary transition-all duration-300 ${
                            selected === item ? 'text-accent-light' : ''
                        }`}
                        >{item}</p>
                        </div>
                ))}
            </div>

            <div className='social-media flex fixed gap-4 lg:bottom-20 lg:top-auto lg:right-auto top-8 right-16'>
                <a href='https://github.com/KDhanak' target='_blank' rel='noopener noreferrer'>
                    <FaGithub className='lg:size-7 cursor-pointer size-5' />
                </a>
                <a href='https://www.linkedin.com/in/kishandhanak306/' target='_blank' rel='noopener noreferrer'>
                    <FaLinkedin className='lg:size-7 cursor-pointer size-5' />
                </a>
            </div>
        </div>
    )
}

export default Profile;
