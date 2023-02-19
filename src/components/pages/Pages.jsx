import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from '../About';
import Footer from '../common/Footer';
import Header from '../common/Header';
import Detail from '../Detail';
import Home from '../home/Home';
import ShoppingCentre from '../ShoppingCentre';
export default function Pages() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/mehsul' element={<Detail />} />
                    <Route path='/magazalar' element={<ShoppingCentre />} />
                    <Route path='/haqqımızda' element={<About />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}
