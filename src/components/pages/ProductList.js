import React, { useState, useEffect } from "react";
// import axios from "axios";
import { NavLink } from "react-router-dom";
import Col from "../Form/Col";

const ProductList = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    // const [error, setError] = useState('')


    useEffect(() => {
        let componentMounted = true;
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();
        // axios.get('https://fakestoreapi.com/products') 
        // .then((res) =>{
        //     setData(res.data);
        //     setLoading(false);
        //     setFilter(res.json());
        // })
        // .catch((error)=>{
        //     setError(error.message);
        //     setLoading(false);
        // }) 
    }, [])

    const Loading = () => {
        return (
            <>
                Loading...
            </>
        )
    }

    const filterProducts = (catelogue) => {
        const updateList = data.filter((x) => x.category === catelogue);
        setFilter(updateList);
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5 sb-2">
                    <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProducts("men's clothing")}>Men's</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProducts("women's clothing")}>Women's</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProducts("jewelery")}>Jewelery</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProducts("electronics")}>Electronic</button>
                </div>

                {filter.map((product) => {
                    return (
                        <>
                            <Col size="3 mb-4" key={product.id}>
                                <div className="card h-100 text-center p-4 products" >
                                    <img src={product.image} className="card-img-top" alt={product.title} height='250px' />
                                    <div className="card-body">
                                        <h5 className="card-title mb-0"    >{product.title.substring(0, 12)}...</h5>
                                        <p className="card-text fw-bold">${product.price}</p>
                                        <NavLink to={`/products/${product.id}`} className="btn btn-primary">Buy Now</NavLink>
                                    </div>
                                </div>
                            </Col>
                        </>
                    )
                })}
            </>
        )
    }

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-4 fw-bolder text-center">Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    )
}
export default ProductList;