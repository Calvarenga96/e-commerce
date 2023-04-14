import React, { createContext, useState } from "react";
import useProducts from "../hooks/useProducts";

export const ComponentsContext = createContext();

export const ComponentsProvider = ({ children }) => {
    const [simulateLoadingData, setSimulateLoadingData] = useState(false);
    const [productsSelected, setProductsSelected] = useState([]);
    const [openPaymentModal, setOpenPaymentModal] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [searchingSomeProduct, setSearchingSomeProduct] = useState(false);
    const [productSearched, setProductSearched] = useState([]);

    const { products } = useProducts();

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

    const searchProduct = (event) => {
        const input = event.target.value;
        const inputIsEmpty = !input.trim().length;

        if (inputIsEmpty) setSearchingSomeProduct(false);
        else setSearchingSomeProduct(true);

        setInputValue(input);
        const productSearched = products.filter((product) =>
            product.title.includes(input)
        );
        setProductSearched(productSearched);
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
        inputValue,
        setInputValue,
        searchProduct,
        searchingSomeProduct,
        setSearchingSomeProduct,
        productSearched,
    };

    return (
        <ComponentsContext.Provider value={value}>
            {children}
        </ComponentsContext.Provider>
    );
};
