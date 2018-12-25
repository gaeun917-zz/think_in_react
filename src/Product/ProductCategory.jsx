import React from 'react';

class ProductCategory extends React.Component {
    render() {
        const category = this.props.category;
        return (
            <div className='category_title_main'>
                {category}
            </div>
        );
    }
}

export default ProductCategory;