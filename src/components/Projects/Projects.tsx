import React from 'react';
import { useFirebaseContext } from '../../contexts/Context';
import { CgExternal } from "react-icons/cg";

const Experience: React.FC = () => {
    const { projectsData, loading, error } = useFirebaseContext();

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <div className='container'>
            <ul className="my-4 space-y-3">
                {projectsData.map((item) => (
                    <div key={item.id} className='w-full'>
                        <a href={item.link ? item.link:'#'} target='_blank' rel='noopener noreferrer' className="flex group p-3 transition-all duration-300 rounded-md hover:bg-opacity-5 hover:bg-white hover:shadow-lg dark:text-primary">
                            <div className='flex-[3] mr-10 h-fit p-0.5 bg-accent-darker group-hover:bg-accent-dark transition-all duration-300 rounded-md w-16'>
                                <img className='rounded-md' src={item.image}/>
                            </div>
                            <span className="flex-[7] text-accent-light transition-all duration-300 font-normal group-hover:text-accent-tertiary_light">
                                <div className='flex'>
                                    <span className='text-accent-light transition-all duration-300 font-normal group-hover:text-accent-tertiary_light'>{item.displayName}</span>
                                    <CgExternal />
                                </div> 
                                <br />
                                <span className='text-accent-light_2 text-wrap'>{item.description}</span>
                            </span>
                        </a>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default Experience;
