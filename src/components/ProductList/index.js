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
            {products.map((product) => (
                <Product
                    key={product?.id}
                    image={product?.image}
                    name={product?.title}
                    description={product?.description}
                    price={product?.price}
                    rating={product?.rating?.rate}
                />
            ))}
            {simulateLoadingData && "Loading Data..."}
        </section>
    );
};

export default ProductList;
