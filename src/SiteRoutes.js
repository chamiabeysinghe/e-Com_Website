import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import ProductList from "./components/pages/ProductList";
import Product from "./components/pages/ProductDetails";
import Contact from "./components/pages/Contact";
import Cart from "./components/pages/Cart";
import Checkout from "./components/pages/Checkout"
import Footer from "./components/pages/Footer";
import NoMatch from "./components/pages/NoMatch";
import { Profile } from "./components/Admin/Profile";
import { RequireAuth } from "./components/Admin/RequireAuth";
import {Login} from "./components/Admin/Login"
import { Navbar } from "./components/Admin/Navbar";
const LazyAbout =React.lazy(() => import ("./components/pages/About"));

const SiteRoutes = () => {
    return (
        <>
        <Navbar/>
        <Routes>
        <Route exact path="/about" element={<React.Suspense fallback = "Loading..."> <LazyAbout /> </React.Suspense>}/>
            <Route exact path="/" element={<Home />} />            
            <Route exact path ='/contact' element={<Contact/>} />
            <Route exact path ='/productlist' element={<ProductList/>} />
            <Route exact path ='/products/:id' element={<Product/>} />
            <Route exact path ='/cart' element={<Cart/>} />
            <Route exact path ='/login' element={<Login/>} />
            <Route exact path ='/checkout' element={<Checkout/>} />
            <Route exact path ='*' element={<NoMatch/>} />
            <Route exact path ='/profile' element={<RequireAuth><Profile/></RequireAuth>} />   
        </Routes>
        <Footer/>
        </>
    )
}
export default SiteRoutes;