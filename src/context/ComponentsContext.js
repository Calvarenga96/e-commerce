import React, { createContext, useState } from "react";

export const ComponentsContext = createContext();

export const ComponentsProvider = ({ children }) => {
    const [simulateLoadingData, setSimulateLoadingData] = useState(false);
    const [productsSelected, setProductsSelected] = useState([]);
    const [openPaymentModal, setOpenPaymentModal] = useState(false);

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

    const openModal = (value) => {
        setOpenPaymentModal(value);
    };

    const totalCost = () => {
        let total = 0;
        productsSelected.forEach((product) => {
            total = total + product.price;
        });
        return total;
    };

    const value = {
        simulateLoadingData,
        setSimulateLoadingData,
        addToCart,
        deleteFromCart,
        totalItems: productsSelected.length,
        openModal,
        openPaymentModal,
        totalCost,
        productsSelected,
    };

    return (
        <ComponentsContext.Provider value={value}>
            {children}
        </ComponentsContext.Provider>
    );
};
