import React, { createContext, useState } from "react";

export const ComponentsContext = createContext();

export const ComponentsProvider = ({ children }) => {
    const [simulateLoadingData, setSimulateLoadingData] = useState(false);

    const value = {
        simulateLoadingData,
        setSimulateLoadingData,
    };

    return (
        <ComponentsContext.Provider value={value}>
            {children}
        </ComponentsContext.Provider>
    );
};
