import React, { Component } from 'react';
import { connect } from 'react-redux';
import { byCategoryId } from '../../collections/products.collection';

const DefaultMode = 'all';
const CategoryMode = 'category';

class Products extends Component {

    render() {
        const params = this.props.match.params;
        let products = this.props.products;
        const categories = this.props.categories;

        let subheading = null;
        let mode = DefaultMode;

        if (params.categoryId) {
            mode = CategoryMode;
            const categoryId = Number(params.categoryId);
            products = products.filter(byCategoryId(categoryId));
            const category = categories.find(cat => cat.id === categoryId);
            subheading = category ? <h4>Category: <em>{category.categoryName}</em></h4> : null;
        }

        return (
            <div>
                <h3>Products</h3>
                {subheading}
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Supplier</th>
                            { mode === CategoryMode ? null : <th>Category</th> }
                            <th>Qty Per Unit</th>
                            <th>Unit Price</th>
                            <th>On Order</th>
                            <th>Reorder Level</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(p => (
                            <tr key={p.id} className={p.discontinued ? 'product-discontinued' : ''}>
                                <td>{p.productName}</td>
                                <td>{p.supplier}</td>
                                { mode === CategoryMode ? null : <td>{p.category}</td> }
                                <td>{p.quantityPerUnit}</td>
                                <td>{p.unitPrice}</td>
                                <td>{p.unitsOnOrder}</td>
                                <td>{p.reorderLevel}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }

}

const mapStateToProperties = state => {
    return {
        products: state.products,
        categories: state.categories
    }
}

export default connect(mapStateToProperties)(Products);