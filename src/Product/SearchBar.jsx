import React from 'react';

class SearchBar extends React.Component {

    render() {
        return (
           <div>
               <input type="text" placeholder='Search'/>
               <input className='searchbar_checkbox' type="checkbox"/>
           </div>
        );
    }
}

export default SearchBar;