import React from 'react';

export default class ProductCategoriesListRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.productCategory.id);
        return (
            <tr>
                <td>{ this.props.productCategory.id }</td>
                <td>{ this.props.productCategory.name }</td>
                <td className="text-end">
                    <button className="btn btn-danger" onClick={() => this.props.deleteProductCategory(this.props.productCategory)}>Delete</button>
                </td>
            </tr>
        );
    }
}