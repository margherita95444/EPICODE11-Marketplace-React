import React from 'react';
import productCategories from "../../data/ProductCategories";
import ProductCategoriesListRow from "../../components/product-categories-list-row/ProductCategoriesListRow";


export default class ProductCategoriesList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            productCategories: productCategories   
        }
    }

    deleteProductCategory = (productCategory) => {
        const productCategories = [...this.state.productCategories];

        productCategories.splice(
            productCategories.indexOf(productCategory), 1
        );

        this.setState({ productCategories });
    }

    render() {
        console.log(productCategories)
        const rows = this.state.productCategories.map(productCategory => 
            <ProductCategoriesListRow  
                key={productCategory.id} 
                productCategory={productCategory} 
                deleteProductCategory={this.deleteProductCategory}  
            />
        );

        return (
            <>
                <table className="table container mt-5">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
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