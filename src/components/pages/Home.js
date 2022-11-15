import React from "react";
import Test from "../Test";
import ProductList from "./ProductList";

const Home = () => {
    return (
        <div className="main_page">
            <div className="card bg-dark text-white border-0">
                <img src="/assest/bg.PNG" className="card-img" alt="background image" width= '100%' height='550px'/>
            </div>
            <Test/>
            <ProductList/>
        </div>
    )
}
export default Home;