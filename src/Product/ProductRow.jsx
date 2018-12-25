import React from 'react';

class ProductTable extends React.Component {
    render() {
        const price = this.props.product.price;
        const stocked = this.props.product.stocked;

        let name = stocked ? this.props.product.name :
            <span style={{color: 'red'}}>{this.props.product.name}</span>

        return (
            <div className='category_title'>
                <div className='category_title_name'>{name}</div>
                <div className='category_title_price'>{price}</div>
            </div>
        );
    }
}

export default ProductTable;