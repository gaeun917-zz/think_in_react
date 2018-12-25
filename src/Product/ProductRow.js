import React from 'react';

class ProductTable extends React.Component {
    render() {
        const name = this.props.name;
        const price = this.props.price;

        return (
            <div>
                <div className='category_title'>
                    <div>{name}</div>
                    <div>{price}</div>
                </div>
            </div>
        );
    }
}

export default ProductTable;