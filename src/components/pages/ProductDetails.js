import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem, delItem } from "../../redux/action/index"
import { FaStar } from "react-icons/fa";
import Col from "../Form/Col";

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cartBtn, setCartBtn] = useState('Add to Cart')


    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, [])

    const Loading = () => {
        return (
            < div >
                Loading...
            </div>
        )
    }

    const dispatch = useDispatch();

    const handleCart = (product) => {
        if (cartBtn === "Add to Cart") {
            dispatch(addItem(product))
            setCartBtn("Remove from Cart");
        } else {
            dispatch(delItem(product))
            setCartBtn("Add to Cart");
        }

    }


    const ShowProduct = () => {
        return (
            <>
                <Col size="6 d-flex flex-column justify-content-center mx-auto product">
                    <img src={product.image} alt={product.title} height='400px' width='400px'></img>
                </Col>
                <Col size="6 d-flex flex-column justify-content-center">
                    <h4 className="text-uppercase text-black-50">{product.category}</h4>
                    <hr />
                    <h1 className="display-8">{product.title}</h1>
                    <p className="lead fw-bolder">Rating {product.rating && product.rating.rate}<FaStar /></p>
                    <h3 className="display-6 fw-bolder my-4"> $ {product.price}</h3>
                    <p className="lead fs-4px">{product.description}</p>
                    <button onClick={() => handleCart(product)} className="btn btn-success px-4 py-2 ">{cartBtn}</button>
                    <NavLink to='/cart' className="btn btn-primary my-1" >Go to Cart</NavLink>
                </Col>
            </>
        )
    }
    return (
        <div>
            <div className="container py-5">
                <div className="row py-4">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    )
}
export default ProductDetails;