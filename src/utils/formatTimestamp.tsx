import { Timestamp } from "firebase/firestore";

export const formatFirestoreTimestamp = (timestamp: Timestamp | null): string => {
    if (!timestamp){
        return 'Present';
    }

    if (typeof timestamp.toDate != 'function'){
        return '';
    }

    const date = timestamp.toDate();
    const options: Intl.DateTimeFormatOptions = {year: 'numeric', month: 'long'};
    return date.toLocaleString('en-us', options);
};
