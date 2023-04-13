import React from "react";

import useProducts from "../../hooks/useProducts";
import Product from "../Product";

import styles from "./index.module.css";

const ProductList = () => {
    const { products } = useProducts();

    return (
        <section className={styles.productsLayout}>
            {products.map((product) => (
                <>
                    <Product
                        key={product?.id}
                        image={product?.image}
                        name={product?.title}
                        description={product?.description}
                        price={product?.price}
                        rating={product?.rating?.rate}
                    />
                </>
            ))}
        </section>
    );
};

export default ProductList;
