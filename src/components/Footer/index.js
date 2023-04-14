import React from "react";

import styles from "./index.module.css";

const Footer = () => {
    const currentTime = new Date();
    const year = currentTime.getFullYear();

    return (
        <footer className={styles.footerContainer}>
            <p>{year} | All Rights Reserved</p>
        </footer>
    );
};

export default Footer;
