import React from "react";

const Footer = () => {
    const currentTime = new Date();
    const year = currentTime.getFullYear();

    return (
        <footer>
            <div>{year} | All Rights Reserved </div>
        </footer>
    );
};

export default Footer;
