import { useState, useEffect, useContext } from "react";

import useProducts from "./useProducts";
import getProductsInTens from "../helpers/getProductsInTens";
import { ComponentsContext } from "../context/ComponentsContext";

const useProductsInTens = () => {
    const { setSimulateLoadingData } = useContext(ComponentsContext);

    const [productsInTens, setProductsInTens] = useState([]);
    const [showingAllProducts, setShowingAllProducts] = useState(false);
    const { products } = useProducts();

    useEffect(() => {
        if (!productsInTens.length) {
            const productsInTen = getProductsInTens(products);
            setProductsInTens(productsInTen);
        }

        const handleScroll = () => {
            const scrollTop =
                document.documentElement.scrollTop || document.body.scrollTop;
            const scrollHeight =
                document.documentElement.scrollHeight ||
                document.body.scrollHeight;
            const clientHeight = document.documentElement.clientHeight;

            if (
                scrollTop + clientHeight >= scrollHeight &&
                !showingAllProducts
            ) {
                const productsInTen = getProductsInTens(products, true);

                setSimulateLoadingData(true);

                setTimeout(() => {
                    setProductsInTens(productsInTen);
                    setSimulateLoadingData(false);
                    setShowingAllProducts(true);
                }, [3000]);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [
        products,
        setSimulateLoadingData,
        showingAllProducts,
        productsInTens.length,
    ]);

    return {
        products: productsInTens,
        setProductsInTens,
    };
};

export default useProductsInTens;
