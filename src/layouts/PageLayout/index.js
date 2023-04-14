import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import styles from "./index.module.css";

const PageLayout = ({ children }) => {
    return (
        <div className={styles.mainLayout}>
            <Header />
            <section className={styles.mainLayoutContent}>{children}</section>
            <Footer />
        </div>
    );
};

export default PageLayout;
