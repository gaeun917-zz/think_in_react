import React from 'react';
import ProductCategory from './ProductCategory'
import ProductRow from './ProductRow'

class ProductTable extends React.Component {
    render() {
        const category = this.props.category;
        const name = this.props.name;
        const price = this.props.price;

        return (
            <div>
                <ProductCategory category={category}/>
                <ProductRow name={name} price={price}/>
            </div>
        );
    }
}

export default ProductTable;