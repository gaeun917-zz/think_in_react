import React from 'react';
import ProductCategory from './ProductCategory'
import ProductRow from './ProductRow'

class ProductTable extends React.Component {
    render() {
        const category = this.props.category;
        return (
           <div>
               <div className='category_title'>
                   <div>Name</div>
                   <div className='category_title_price'>Price</div>
               </div>
               <div>
                   <ProductCategory category={category}/>
                   <ProductRow ></ProductRow>
               </div>
           </div>
        );
    }
}

export default ProductTable;