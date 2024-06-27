import { createContext, useState, useContext, useEffect } from 'react';
import { useAxiosInterceptors } from './FetchCall';

const SpinnerContext = createContext();

export const SpinnerProvider = ({ children }) => {
    const [isSpinnerOpen, setIsSpinnerOpen] = useState(false);

    const showSpinner = () => setIsSpinnerOpen(true);
    const hideSpinner = () => setIsSpinnerOpen(false);

    useEffect(() => {
        useAxiosInterceptors(showSpinner, hideSpinner);
    }, []);

    return (
        <SpinnerContext.Provider value={{ isSpinnerOpen, showSpinner, hideSpinner }}>
            {children}
        </SpinnerContext.Provider>
    );
};

export const useSpinner = () => useContext(SpinnerContext);