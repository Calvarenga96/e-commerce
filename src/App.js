import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Store from "./pages/Store";
import Payment from "./pages/Payment";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Store />} />
                <Route path="/payment" element={<Payment />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
