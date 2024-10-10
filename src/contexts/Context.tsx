import React, {createContext, useContext, useState, useEffect, ReactNode} from 'react';
import {collection, getDocs} from 'firebase/firestore';
import { db } from '../services/firebase';

interface FirebaseContextType {
    data: any[];
    loading: boolean;
    error: string | null;
}

const FirebaseContext = createContext<FirebaseContextType | undefined>(undefined);

export const FirebaseProvider: React.FC<{children: ReactNode}> = ({children}) => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const querySnapshot = await getDocs(collection(db, 'experiences'));
                const fetchedData = querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data() }));
                setData(fetchedData);
                console.log(fetchedData)
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
        <FirebaseContext.Provider value={{data, loading, error}}>
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
