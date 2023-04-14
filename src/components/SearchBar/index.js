import React, { useContext } from "react";
import { ComponentsContext } from "../../context/ComponentsContext";

const SearchBar = () => {
    const { inputValue, searchProduct } = useContext(ComponentsContext);

    return (
        <section>
            <input
                type="text"
                placeholder="Search Product..."
                value={inputValue}
                onChange={searchProduct}
            />
        </section>
    );
};

export default SearchBar;
