import React from 'react';
import ProductCategory from './ProductCategory'
import ProductRow from './ProductRow'

class ProductTable extends React.Component {
    render() {
        const category = this.props.category;
        const product = this.props.product;

        return (
            <div>
                <ProductCategory category={category}/>
                <ProductRow product={product}/>
            </div>
        );
    }
}

export default ProductTable;