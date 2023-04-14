import React, { useContext } from "react";
import styles from "./index.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { ComponentsContext } from "../../context/ComponentsContext";

const Header = () => {
    const { totalItems } = useContext(ComponentsContext);

    return (
        <header className={styles.header}>
            <p className={styles.logoTitle}>Christian's e-commerce</p>
            <div className={styles.cartContainer}>
                <FaShoppingCart size="2rem" />
                <p>{totalItems}</p>
            </div>
        </header>
    );
};

export default Header;
