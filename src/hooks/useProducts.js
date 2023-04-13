import { useState, useMemo } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const products = await response.json();
            setProducts(products);
        } catch (e) {
            console.log(e);
        }
    };

    useMemo(() => {
        if (!products.length) getProducts();
    }, [products]);

    return {
        products,
    };
};

export default useProducts;
