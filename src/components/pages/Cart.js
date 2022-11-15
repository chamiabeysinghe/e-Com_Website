import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { delItem } from "../../redux/action/index";
import Col from "../Form/Col";

const Cart = () => {

    const addItem = useSelector(state => state.addItem);
    console.log(addItem)
    const dispatch = useDispatch();

    const handleClose = (item) => {
        dispatch(delItem(item));
    }

    const CartItems = (cartItem) => {
        return (
            <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
                <div className="container py-3">
                    <button onClick={() => handleClose(cartItem)} className="btn-close float-end" aria-label="Close"></button>
                    <div className="row justify-content-center">
                        <Col size='4'>
                            <img src={cartItem.image} alt={cartItem.title} height="100px" width="100px" />
                        </Col>
                        <Col size='4'>
                            <h6>{cartItem.title}</h6>
                            <p className="lead fw-bold">$ {cartItem.price}</p>
                        </Col>
                    </div>
                </div>
            </div>
        );
    }

    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row">
                        <h4>Your Cart is empty</h4>
                    </div>
                </div>
            </div>
        )
    }

    const button = () => {
        return (
            <div className="container">
                <div className="row">
                    <NavLink to='/checkout' className="btn btn-success px-4 py-2 mb-5 w-25 mx-auto">Checkout</NavLink>
                </div>
            </div>

        )

    }

    return (
        <>
            {addItem.length === 0 && emptyCart()}
            {addItem.length !== 0 && addItem.map(CartItems)}
            {addItem.length !== 0 && button()}

        </>
    )


}
export default Cart;