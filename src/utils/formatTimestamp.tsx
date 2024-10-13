import { Timestamp } from "firebase/firestore";

export const formatFirestoreTimestamp = (startDate: Timestamp | null, endDate: Timestamp | null): string => {
    if (!startDate){
        return '';
    }

    if (typeof startDate.toDate !== 'function' || (endDate && typeof endDate.toDate !== 'function')) {
        return ''; 
    }

    const start = startDate.toDate();
    const end = endDate ? endDate.toDate() : new Date();

    const startYear = start.getFullYear();
    const endYear = end.getFullYear();
    const startMonth = start.getMonth();
    const endMonth = end.getMonth();

    const durationInMonths = (endYear - startYear) * 12 + (endMonth - startMonth)

    if (!endDate) {
        return `${startYear} - Present`;
    }

    if (durationInMonths >= 12) {
        return `${startYear} - ${endYear}`
    }

    if (durationInMonths > 0) {
        const startMonthName = start.toLocaleString('en-us', {month: 'short'});
        const endMonthName = end.toLocaleString('en-us', {month: 'short'}); 
        return `${startMonthName} - ${endMonthName} ${endYear}`;

    }

    const singleMonth = end.toLocaleString('en-us', { month: 'long', year: 'numeric' });
    return singleMonth;
};
