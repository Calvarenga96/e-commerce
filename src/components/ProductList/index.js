import React, { useContext } from "react";

import Product from "../Product";
import Loader from "../Loader";
import useProductsInTens from "../../hooks/useProductsInTens";

import styles from "./index.module.css";
import { ComponentsContext } from "../../context/ComponentsContext";

const ProductList = () => {
    const { simulateLoadingData, searchingSomeProduct, productSearched } =
        useContext(ComponentsContext);
    const { products } = useProductsInTens();

    return (
        <>
            <section className={styles.productsLayout}>
                {searchingSomeProduct
                    ? productSearched.map((product, index) => (
                          <Product key={index} product={product} />
                      ))
                    : products.map((product, index) => (
                          <Product key={index} product={product} />
                      ))}
            </section>
            {simulateLoadingData && (
                <div className={styles.loaderContainer}>
                    <Loader />
                </div>
            )}
        </>
    );
};

export default ProductList;
