import React from 'react';

interface DetailsProps {
    children: React.ReactNode
}

const Details: React.FC<DetailsProps> = ({children}) => {
    return(
        <div className="container overflow-auto">
            <p className="text-base font-sans text-left text-primary pb-4">I started working with web technologies and wrote my first few programs back in 2019 when I started my tertiary education. Since then, I have worked with various core scripting and programming languages and cutting edge web-frameworks.</p>
            <p className="text-base font-sans text-left text-primary pb-4">Currently, my focus is on building required components, coming up with innovative solutions at <a className="text-accent-light font-medium hover:text-tertiary transition duration-500" href="https://trackday.com.au/" target='_blank' rel='noopener noreferrer'>Trackday</a> as an intern to create frontend modules for motorsport clubs in a single platform developed with WordPress and BuddyBoss, that also includes membership management, social space management and event managment.</p>
            <p className="text-base font-sans text-left text-primary pb-4">In my free time, I try to study new technologies that makes me interested and recently, I have been into learning Azure and its utilisation to easily create a backend, deploy an app and CI/CD with workflow in GitHub.</p>
            <p className="text-base font-sans text-left text-primary pb-4">When I am not at my desk, I'm usually reading, learning about Quantum Computing or any other cross-field I am interested in, hanging out with my friends, playing table-tennis, badminton or chess. </p>
            {children}
        </div>
    )
}

export default Details;
