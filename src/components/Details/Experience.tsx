import React from 'react';
import { useFirebaseContext } from '../../contexts/Context';
import { formatFirestoreTimestamp } from '../../utils/formatTimestamp';

const Experience: React.FC = () => {
    const { data, loading, error } = useFirebaseContext();

    const sortedItems = data.sort((a,b) => {
        if (a.isPresent && !b.isPresent) return -1;
        if (!a.isPresent && b.isPresent) return 1;
        return 0;
    })

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <div className='container'>
            <ul className="my-4 space-y-3">
                {sortedItems.map((item) => (
                    <div key={item.id} className='w-full'>
                        <a href={item.link ? item.link:'#'} target='_blank' rel='noopener noreferrer' className="flex group p-3 transition-all duration-300 text-gray-900 rounded-md backdrop-blur-md hover:bg-opacity-5 hover:bg-white hover:shadow-lg dark:text-primary">
                            <div className='flex-1 text-sm font-normal text-accent-light_2'>
                                {formatFirestoreTimestamp(item.startDate)} - {formatFirestoreTimestamp(item.endDate)}
                            </div>
                            <span className="flex-1 text-accent-light transition-all duration-300 font-normal group-hover:text-accent-tertiary_light">
                                {item.position} <br />
                                <span className='text-accent-light_2'>{item.displayName}</span> <br />
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
