import React from 'react';

class ProductTable extends React.Component {
    render() {
        const name = this.props.name;
        const price = this.props.price;

        return (
            <div className='category_title'>
                <div className='category_title_name'>{name}</div>
                <div className='category_title_price'>{price}</div>
            </div>
        );
    }
}

export default ProductTable;