import React from "react";
import {BsFlower1, BsFillCartCheckFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);

       
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg shadow-lg ">
                <div className="container-fluid"> 
                    <BsFlower1 className="bi bi-flower3 logo me-2"/>
                    <Link className="navbar-brand text-white" to="/">MARKETPLACE</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        </ul>
                        
                        <Link className="nav-link text-white" to="/products">Products</Link>
                        <Link className="nav-link text-white" to="/product-categories">Product Category</Link>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form>
                        <Link className="ms-5 text-white" to="/cart"><BsFillCartCheckFill className="cart" />   CART </Link>
                    </div>
                </div>
            </nav>
        );
    }
}