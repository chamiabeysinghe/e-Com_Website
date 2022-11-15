import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {

    const state = useSelector((state)=> state.addItem)
    return(
        <div>
            <NavLink to='/cart' className="btn btn-primary ms-3"><FaShoppingCart/> Cart ({state.length})</NavLink> 
        </div>
    )
}
export default Cart;