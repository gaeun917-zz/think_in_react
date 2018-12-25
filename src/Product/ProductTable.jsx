import React from 'react';
import ProductCategory from './ProductCategory'
import ProductRow from './ProductRow'
import _ from 'lodash'

class ProductTable extends React.Component {
    render() {
        const product = this.props.product;
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;
        let row = [];
        let lastCategory = null;

        _.forEach(product, (item) => {
            //filtering
            if(item.name.indexOf(filterText) === -1){
                return;
            }
            if(inStockOnly && item.stocked){
                return;
            }
            if (item.category !== lastCategory) {
                row.push(
                    <ProductCategory
                        key={item.name}
                        category={item.category}
                    />
                )
            }
            row.push(
                <ProductRow
                    key={item.name}
                    product={item}
                />
            );
            lastCategory = item.category;
        });

        return (
            <div>
                {row}
            </div>
        );
    }
}

export default ProductTable;