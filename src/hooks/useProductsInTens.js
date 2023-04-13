import { useState, useEffect, useContext } from "react";

import useProducts from "./useProducts";
import getProductsInTens from "../helpers/getProductsInTens";
import { ComponentsContext } from "../context/ComponentsContext";

const useProductsInTens = () => {
    const { setSimulateLoadingData } = useContext(ComponentsContext);

    const [productsInTens, setProductsInTens] = useState([]);
    const { products } = useProducts();

    useEffect(() => {
        const productsInTen = getProductsInTens(products);
        setProductsInTens(productsInTen);

        const handleScroll = () => {
            const scrollTop =
                document.documentElement.scrollTop || document.body.scrollTop;
            const scrollHeight =
                document.documentElement.scrollHeight ||
                document.body.scrollHeight;
            const clientHeight = document.documentElement.clientHeight;

            if (scrollTop + clientHeight >= scrollHeight) {
                const productsInTen = getProductsInTens(products, true);

                setSimulateLoadingData(true);

                setTimeout(() => {
                    setProductsInTens((prevProducts) => [
                        ...prevProducts,
                        ...productsInTen,
                    ]);

                    setSimulateLoadingData(false);
                }, [3000]);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [products, setSimulateLoadingData]);

    return {
        products: productsInTens,
    };
};

export default useProductsInTens;
