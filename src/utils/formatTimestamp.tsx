import { Timestamp } from "firebase/firestore";

export const formatFirestoreTimestamp = (startDate: Timestamp | null, endDate: Timestamp | null): string => {
    if (!startDate) {
        return '';
    }

    if (typeof startDate.toDate !== 'function' || (endDate && typeof endDate.toDate !== 'function')) {
        return '';
    }

    const start = startDate.toDate();
    const end = endDate ? endDate.toDate() : new Date();

    const startYear = start.getFullYear();
    const endYear = end.getFullYear();
    const startMonth = start.toLocaleString('en-us', { month: 'short' });
    const endMonth = end.toLocaleString('en-us', { month: 'short' });

    if (!endDate) {
        return `${startMonth} ${startYear} - Present`;
    }

    if (startYear === endYear) {
        return `${startMonth}-${endMonth} ${startYear}`;
    } else {
        return `${startMonth} ${startYear} - ${endMonth} ${endYear}`;
    }
};
