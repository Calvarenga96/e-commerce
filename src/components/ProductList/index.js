import React, { useContext } from "react";

import Product from "../Product";
import useProductsInTens from "../../hooks/useProductsInTens";

import styles from "./index.module.css";
import { ComponentsContext } from "../../context/ComponentsContext";

const ProductList = () => {
    const { simulateLoadingData, searchingSomeProduct, productSearched } =
        useContext(ComponentsContext);
    const { products } = useProductsInTens();

    return (
        <section className={styles.productsLayout}>
            {searchingSomeProduct
                ? productSearched.map((product, index) => (
                      <Product key={index} product={product} />
                  ))
                : products.map((product, index) => (
                      <Product key={index} product={product} />
                  ))}
            {simulateLoadingData && "Loading Data..."}
        </section>
    );
};

export default ProductList;
