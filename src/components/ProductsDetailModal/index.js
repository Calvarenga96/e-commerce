import React, { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { ComponentsContext } from "../../context/ComponentsContext";

const ProductsDetailModal = ({ styles }) => {
    const { productsSelected, deleteFromCart } = useContext(ComponentsContext);

    return (
        <>
            {productsSelected?.map((product, index) => (
                <div key={index} className={styles.productCard}>
                    <div className={styles.imageContainer}>
                        <img
                            src={product.image}
                            alt={product.title}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.productDetails}>
                        <p>Product: {product.title}</p>
                        <p>Cost: {product.price} USD</p>
                        <button onClick={() => deleteFromCart(product.id)}>
                            <FaTrash size="1rem" color="rgb(209, 48, 48)" />
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ProductsDetailModal;
