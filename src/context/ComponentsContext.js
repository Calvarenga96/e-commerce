import React, { createContext, useState } from "react";

export const ComponentsContext = createContext();

export const ComponentsProvider = ({ children }) => {
    const [simulateLoadingData, setSimulateLoadingData] = useState(false);
    const [productsSelected, setProductsSelected] = useState([]);

    const addToCart = (product) => {
        setProductsSelected((prevProductsSelected) => [
            ...prevProductsSelected,
            product,
        ]);
    };

    const deleteFromCart = (id) => {
        const filterProducts = productsSelected.filter(
            (product) => product.id !== id
        );
        setProductsSelected(() => [...filterProducts]);
    };

    const value = {
        simulateLoadingData,
        setSimulateLoadingData,
        addToCart,
        deleteFromCart,
        totalItems: productsSelected.length,
    };

    return (
        <ComponentsContext.Provider value={value}>
            {children}
        </ComponentsContext.Provider>
    );
};
