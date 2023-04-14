import React from "react";

import ProductList from "../../components/ProductList";
import PageLayout from "../../layouts/PageLayout";
import PaymentModal from "../../components/PaymentModal";

const Store = () => {
    return (
        <PageLayout>
            <ProductList />
            <PaymentModal />
        </PageLayout>
    );
};

export default Store;
