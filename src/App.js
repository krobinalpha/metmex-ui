import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Vault from "./pages/Vault";
import Header from "./components/Header"
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import VaultIndex from "./pages/VaultIndex";

function App() {

    return (
        <ThemeProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={
                <>
                <Header />
                <Home />
                <Footer />
                </>
                } />
              <Route path="/vault" element={<Vault />} />
              <Route path="/vault/:id" element={<VaultIndex />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
