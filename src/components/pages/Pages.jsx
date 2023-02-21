import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Basket from '../ basket/Basket';
import About from '../about/About';
import FilterProduct from '../allProduct/FilterProduct';
import Footer from '../common/Footer';
import Header from '../common/Header';
import Detail from '../detail/Detail';
import Home from '../home/Home';
import Login from '../login/Login';
import Register from '../login/Register';
import ScroolTop from '../scroolTop/ScroolTop';
import ShoppingCentre from '../shopping/ShoppingCentre';
export default function Pages() {
    return (
        <>
            <BrowserRouter>
                <ScroolTop />
                <Header />
                <ScroolTop />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/mehsul' element={<Detail />} />
                    <Route path='/magazalar' element={<ShoppingCentre />} />
                    <Route path='/haqqımızda' element={<About />} />
                    <Route path='/mehsullar' element={<FilterProduct />} />
                    <Route path='/giris' element={<Login />} />
                    <Route path='/qeydiyyat' element={<Register />} />
                    <Route path='/sebet' element={<Basket />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}
