import './App.css';
import { useRef } from 'react';
import AuraEffect from './plugins/AuraEffect';
import Profile from './components/Profile/Profile';
import Details from './components/Details/Details';
import Experience from './components/Details/Experience';
import Project from './components/Projects/Projects';

const App: React.FC = () => {
    const detailsRef = useRef<HTMLDivElement>(null);
    const experienceRef = useRef<HTMLDivElement>(null);
    const projectRef = useRef<HTMLDivElement>(null);

    const scrollToExperience = () => {
        if (experienceRef.current) {
            experienceRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToProject = () => {
        if (projectRef.current) {
            projectRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const resetScrollBar = () => {
        if (detailsRef.current) {
            detailsRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <>
            <AuraEffect />
            <div className='app-container'>
                <div className="App mx-15p lg:flex h-screen">
                    <div className="Profile mr-5 my-5p flex-1">
                        <Profile
                            onExperienceClick={scrollToExperience}
                            onProjectClick={scrollToProject}
                            onAboutClick={resetScrollBar} 
                        />
                    </div>
                    <div className="Details flex-1 overflow-y-auto scrollbar-hide pt-16 w-full mb-8" ref={detailsRef}>
                        <Details>
                            <div className="flex-col">
                                <div className="Experience flex-1 mt-16" ref={experienceRef}>
                                    <Experience />
                                </div>
                                <div className="Projects flex-1 mt-16" ref={projectRef}>
                                    <Project />
                                </div>
                            </div>
                        </Details>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
