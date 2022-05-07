import React from "react";
import Product from "./../product/Product";
import products from "../../data/Products";

export default class Marketplace extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: products,
            productsUp: []
        }
       
    }

    addProduct = (product, qnt) => { 
        alert(`Add ${product.name} to cart :D`)
        console.log(product);
    }

    deleteProduct = (product) => { 
        const products = [...this.state.products];
 
        products.splice( //rimuove 1 el posizione ->(product)
            products.indexOf(product), 1
        );

         this.setState({products});
    }

    render() {
        console.log(products);
        const product = this.state.products.map(product => 
            <Product  
                key={product.id} 
                product={product} 
                deleteProduct={this.deleteProduct} 
                addProduct={this.addProduct} 
            />
        );
        
        return (        
            <div className="row">{ product } </div>     
        )
    }
}

