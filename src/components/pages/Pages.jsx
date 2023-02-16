import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../common/Footer';
import Header from '../common/Header';
import Home from '../home/Home';
export default function Pages() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}
