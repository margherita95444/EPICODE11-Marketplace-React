import React from 'react';
import { Link } from 'react-router-dom';

export default class ProductsListRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td>{ this.props.product.id }</td>
                <td><img src={ this.props.product.img }width="70vw"/></td>
                <td>{ this.props.product.name }</td>
                <td>{ this.props.product.description }</td>
                <td>{ this.props.product.price }€</td>
                <td className="text-end">
                    <Link className="btn btn-primary" to={ `/products/${this.props.product.id}` } user={this.props.product}>Details</Link>
                    <button className="btn btn-danger" onClick={() => this.props.deleteProduct(this.props.product)}>Delete</button>
                </td>
            </tr>
        );
    }
}