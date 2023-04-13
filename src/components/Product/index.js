import React from "react";

import truncateDescription from "../../helpers/truncateDescription";

import styles from "./index.module.css";

const Product = ({ image, name, description, price, rating = 1 }) => {
    const productDescription = truncateDescription(description);

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={image} alt={name} className={styles.image} />
            </div>
            <div className={styles.productContainer}>
                <p className={styles.productTitle}>{name}</p>
            </div>
            <div className={styles.productDescription}>
                <p>{productDescription}</p>
            </div>
            <div className={styles.productPrice}>
                <p>Price: {price} USD</p>
            </div>
            <div className={styles.rating}>
                <p>Rating: {rating}</p>
            </div>
        </div>
    );
};

export default Product;
