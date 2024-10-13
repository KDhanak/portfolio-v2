import React, {createContext, useContext, useState, useEffect, ReactNode} from 'react';
import {collection, getDocs} from 'firebase/firestore';
import { db } from '../services/firebase';

interface FirebaseContextType {
    experiencesData: any[];
    projectsData: any[];
    loading: boolean;
    error: string | null;
}

const FirebaseContext = createContext<FirebaseContextType | undefined>(undefined);

export const FirebaseProvider: React.FC<{children: ReactNode}> = ({children}) => {
    const [experiencesData, setExperiencesData] = useState<any[]>([]);
    const [projectsData, setProjetsData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const [experiencesSnapshot, projectSnapshot] = await Promise.all ([getDocs(collection(db, 'experiences')), getDocs(collection(db, 'projects'))]);
                const fetchedExperienceData = experiencesSnapshot.docs.map((doc) => ({id: doc.id, ...doc.data() }));
                const fetchedProjectData = projectSnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));

                setExperiencesData(fetchedExperienceData);
                setProjetsData(fetchedProjectData);
                
            } catch (err: any) {
                console.error('Error fetching experiences: ', error);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <FirebaseContext.Provider value={{projectsData, experiencesData, loading, error}}>
            {children}
        </FirebaseContext.Provider>
    );
};

export const useFirebaseContext = () => {
    const context = useContext(FirebaseContext);
    if (!context) {
        throw new Error('useFirebaseContext must be used within a FirebaseProvider');
    }
    return context;
}
