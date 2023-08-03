import React, { createContext, useState } from 'react';
import moment from "moment";

// Create the context
const currentTime = moment();

const AppContext = createContext<{
    time: any;
    toggleTime: (time) => void;
    timeDropDown: any;
    toggleTimeDropDown: (timeDropDown) => void;
}>({
    time: currentTime.subtract(15, "days").format("YYYY-MM-DDTHH:mm:ss"),
    toggleTime: (time) => { },
    timeDropDown: 'last15d',
    toggleTimeDropDown: (timeDropDown) => { },
});

// Create the provider component
export const AppContextProvider: React.FC<any> = ({ children }) => {
    const [time, setTime] = useState(
        currentTime.subtract(15, "days").format("YYYY-MM-DDTHH:mm:ss")
    );

    const [timeDropDown, setTimeDropdown] = useState('last15d');

    const toggleTime = (time: any) => {
        setTime(time);
    };

    const toggleTimeDropDown = (timeDropDown: any) => {
        setTimeDropdown(timeDropDown);
    };

    return (
        <AppContext.Provider value={{ time, toggleTime, timeDropDown, toggleTimeDropDown }}>{children}</AppContext.Provider>
    );
};

// Export the context
export const useAppContext = () => React.useContext(AppContext);
