import React, { useContext } from "react";

import truncateDescription from "../../helpers/truncateDescription";

import styles from "./index.module.css";
import { ComponentsContext } from "../../context/ComponentsContext";

const Product = ({ product }) => {
    const { image, title, description, price, rating } = product;
    const productDescription = truncateDescription(description);
    const { addToCart } = useContext(ComponentsContext);

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={image} alt={title} className={styles.image} />
            </div>
            <div className={styles.productContainer}>
                <p className={styles.productTitle}>{title}</p>
            </div>
            <div className={styles.productDescription}>
                <p>{productDescription}</p>
            </div>
            <div className={styles.productPrice}>
                <p>Price: {price} USD</p>
            </div>
            <div className={styles.rating}>
                <p>Rating: {rating?.rate}</p>
            </div>
            <button
                className={styles.button}
                onClick={() => addToCart(product)}
            >
                Add To Cart
            </button>
        </div>
    );
};

export default Product;
