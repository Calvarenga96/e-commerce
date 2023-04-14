import React, { useContext } from "react";

import Product from "../Product";
import useProductsInTens from "../../hooks/useProductsInTens";

import styles from "./index.module.css";
import { ComponentsContext } from "../../context/ComponentsContext";

const ProductList = () => {
    const { simulateLoadingData } = useContext(ComponentsContext);
    const { products } = useProductsInTens();

    return (
        <section className={styles.productsLayout}>
            {products.map((product, index) => (
                <Product key={index} product={product} />
            ))}
            {simulateLoadingData && "Loading Data..."}
        </section>
    );
};

export default ProductList;
