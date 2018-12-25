import React from 'react';

class ProductCategory extends React.Component {
    render() {
        const category = this.props.category;
        return (
            <div>
                {category}
            </div>
        );
    }
}

export default ProductCategory;