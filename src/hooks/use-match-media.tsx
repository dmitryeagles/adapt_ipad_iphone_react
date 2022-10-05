import {useState, useLayoutEffect} from 'react';

const queries = [
    '(min-width: 1024px)',
    '(min-width: 768px) and (max-width: 1023px)',
    '(min-width: 568px) and (max-width: 767px)',
    '(min-width: 320px) and (max-width: 567px)',
]

export const useMatchMedia = () => {
    const mediaQueryLists = queries.map(query => matchMedia(query));

    const getValues = () => mediaQueryLists.map(mql => mql.matches);

    const [values, setValues] = useState(getValues);

    useLayoutEffect (() => {
        const handler = () => setValues(getValues);

        mediaQueryLists.forEach(mql => mql.addEventListener('change', handler));

        return () => mediaQueryLists.forEach(mql => mql.removeEventListener('change', handler));
    })

    return['hTablet', 'vTablet', 'hMobile', 'vMobile'].reduce((acc, screen, index) => ({
        ...acc,
        [screen]: values[index],
    }), {});
};