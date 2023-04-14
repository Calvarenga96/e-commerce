import React, { useContext } from "react";
import { ComponentsContext } from "../../context/ComponentsContext";
import styles from "./index.module.css";
import ProductsDetailModal from "../ProductsDetailModal";

const PaymentModal = () => {
    const { openModal, openPaymentModal, totalCost } =
        useContext(ComponentsContext);
    const total = totalCost();

    return (
        <>
            {openPaymentModal && (
                <section className={styles.modalContainer}>
                    <div className={styles.modalHeader}>
                        <h2>Products Selected Detail</h2>
                        <button onClick={() => openModal(false)}>X</button>
                    </div>
                    <div className={styles.productsContainer}>
                        <ProductsDetailModal styles={styles} />
                    </div>
                    <p>Total: {total} UDS</p>
                </section>
            )}
        </>
    );
};

export default PaymentModal;
