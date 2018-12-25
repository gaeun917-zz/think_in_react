import React from 'react';

class SearchBar extends React.Component {

    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;


        return (
            <div>
                <input type="text"
                       placeholder='Search'
                       value={filterText}/>
                <input className='searchbar_checkbox'
                       type="checkbox"
                       checked={inStockOnly}/>
            </div>
        );
    }
}

export default SearchBar;