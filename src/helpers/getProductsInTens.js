const getProductsInTens = (products, next = false) => {
    if (next) {
        return products.slice(0, products.length);
    }

    return products.slice(0, 10);
};

export default getProductsInTens;
