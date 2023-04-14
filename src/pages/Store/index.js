import React from "react";

import ProductList from "../../components/ProductList";
import PageLayout from "../../layouts/PageLayout";
import PaymentModal from "../../components/PaymentModal";
import SearchBar from "../../components/SearchBar";

const Store = () => {
    return (
        <PageLayout>
            <SearchBar />
            <ProductList />
            <PaymentModal />
        </PageLayout>
    );
};

export default Store;
