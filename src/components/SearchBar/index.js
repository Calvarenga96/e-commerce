import React, { useContext } from "react";
import { ComponentsContext } from "../../context/ComponentsContext";
import styles from "./index.module.css";

const SearchBar = () => {
    const { inputValue, searchProduct } = useContext(ComponentsContext);

    return (
        <section className={styles.inputContainer}>
            <input
                type="text"
                placeholder="Search Product..."
                value={inputValue}
                onChange={searchProduct}
                className={styles.input}
            />
        </section>
    );
};

export default SearchBar;
