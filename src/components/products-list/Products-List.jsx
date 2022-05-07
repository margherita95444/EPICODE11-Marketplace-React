import React from 'react';
import products from "../../data/Products";
import ProductsListRow from "../../components/products-list-row/ProductsListRow";


export default class ProductsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: products   
        }
       
    }
    
    deleteProduct = (product) => {
        const products = [...this.state.products];

        products.splice(
            products.indexOf(product), 1
        );

        this.setState({ products });
    }

    render() {
        const rows = this.state.products.map(product => 
            <ProductsListRow  
                key={product.id} 
                product={product} 
                deleteProduct={this.deleteProduct} 
                addProduct={this.addProduct} 
            />
        );

        return (
            <>
                <table className="table container mt-5">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th className="text-end"></th>
                        </tr>
                    </thead>
                    <tbody>
                        { rows }
                    </tbody>
                </table>
            </>
        );
    }
}